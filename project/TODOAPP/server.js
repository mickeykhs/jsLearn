const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');

var db;
MongoClient.connect('mongodb+srv://admin:qwer1234@cluster0.zdqnhxu.mongodb.net/todoapp?retryWrites=true&w=majority', function(에러,client){
    if(에러) return console.log(에러)

    db = client.db('todoapp');

    // db.collection('post').insertOne({이름: 'John', _id : 100}, function(에러, 결과){
    //     console.log('저장완료');
    // });

    app.listen(8080, function(){
        console.log('listening on 8080');
    });
});


app.get('/pet',function(req, resp){
    resp.send('펫쇼핑할 수 있는 페이지입니다');
});

app.get('/beauty',function(req, resp){
    resp.send('뷰티용품 쇼핑 페이지임');
});

app.get('/',function(req, resp){
    resp.sendFile(__dirname + '/index.html');
});

app.get('/write',function(req, resp){
    resp.sendFile(__dirname + '/write.html');
});

/* 어떤 사람이 /add 경로로 POST 요청을 하면... ??코드를 실행해주세요 */

app.post('/add', function(req, resp){
    resp.send('전송완료');
    // DB에 저장해주세요
    // 'post'라는 이름을 가진 collection에 데이터 두개를 저장하기
    db.collection('counter').findOne({name : '게시물갯수'}, function(에러, 결과){
        console.log(결과.totalPost);
        var 총게시물갯수 = 결과.totalPost;
        db.collection('post').insertOne({ _id : 총게시물갯수 +1, 제목: req.body.title, 날짜:req.body.date }, function(){
            console.log('저장완료');
            // counter라는 콜렉션에 있는 totalPost 라는 항목도 1 증가시켜야함 , 뒤에 콜백은 사용해도되고안해도되고
            db.collection('counter').updateOne({name: '게시물갯수'},{ $inc : {totalPost:1}}, function(에러, 결과){
                if(에러){return console.log(에러)}
            });
        });

    });
});




// /list로 GET요청으로 접속하면
// 실제 DB에 저장된 데이터들로 예쁘게 꾸면진 HTML을 보여줌
app.get('/list', function(req, resp){
    // 모든 데이터 가져오기
    db.collection('post').find().toArray(function(에러, 결과){
        // console.log(결과);
        resp.render('list.ejs', {posts: 결과});
    }); 
     
});

app.delete('/delete', function(req, resp){
    console.log(req.body);
    req.body._id = parseInt(req.body._id);
    // 요청.body 에 담겨온 게시물번호를 가진 글을 db에서 찾아서 삭제해주세요
    db.collection('post').deleteOne(req.body, function(에러, 결과){
        console.log('삭제완료');
        resp.status(200).send({ message: '성공했습니다'});
    });
});