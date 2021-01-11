function getIp(){
    var request = new XMLHttpRequest();
    request.open('GET', './sample.txt', true);
    request.send();

    if(request.readyState == 4 && request.status == 200){
        console.log(request.responseText);
    }

}