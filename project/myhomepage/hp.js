function game(title, text, icon){
    swal({
        title: '미니게임',
        text: 'the plane game gogo!!',
        icon: 'success',
        buttons: '확인'
    }).then((value) => {
        if(value){
            location.href=('../planeProject/index.html');
        }
    })
}