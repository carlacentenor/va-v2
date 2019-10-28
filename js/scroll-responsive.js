if(screen.width<1025){
  
    var slider = $('#slider').swipeSlider();

}else{

    
    $('#myContainer').multiscroll({

        anchors: ['bot', 'uxui', 'bigdata', 'cloud', 'serverless', 'devops'],
        menu: '#menu',
        loopTop: false,
        loopBottom: false
    });
 
}