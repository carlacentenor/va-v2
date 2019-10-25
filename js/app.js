const menuButton = $('.burger-menu-js');
const menuButtonExit = $('.burger-menu-close-js');
const menuSection = $('.menu-section');
const linkBot = $('.link-bot');
const linkUxUi = $('.link-uxui');
const linkBigData = $('.link-bigdata');
const linkCloud = $('.link-cloud');
const linkServerless = $('.link-serverless');
const linkDevops = $('.link-devops');




menuButton.on('click', () => {
    menuSection.addClass("show-menu");
});

menuButtonExit.on('click', () => {
    menuSection.removeClass("show-menu");
});

linkBot.on('click', () => {
    window.location.href = 'views/categories.html#bot';
});
linkUxUi.on('click', () => {
    window.location.href = 'views/categories.html#uxui';
});
linkBigData.on('click', () => {
    window.location.href = 'views/categories.html#bigdata';
});
linkCloud.on('click', () => {
    window.location.href = 'views/categories.html#cloud';
});
linkServerless.on('click', () => {
    window.location.href = 'views/categories.html#serverless';
});
linkDevops.on('click', () => {
    window.location.href = 'views/categories.html#devops';
});


/////
//
var slider = $('#slider').swipeSlider();


