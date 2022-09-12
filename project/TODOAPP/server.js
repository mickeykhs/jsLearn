const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

app.listen(8080, function(){
    console.log('listening on 8080');
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
    console.log(req.body.date);
    console.log(req.body.title);
    // DB에 저장해주세요
});

