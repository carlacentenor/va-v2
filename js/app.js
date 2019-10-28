const menuButton = $('.burger-menu-js');
const menuButtonExit = $('.burger-menu-close-js');
const menuSection = $('.menu-section');
const linkBot = $('.link-bot');
const linkUxUi = $('.link-uxui');
const linkBigData = $('.link-bigdata');
const linkCloud = $('.link-cloud');
const linkServerless = $('.link-serverless');
const linkDevops = $('.link-devops');
const linkResearch = $('.research-js');
const linkIdeate = $('.ideate-js');
const linkPrototipe = $('.prototipe-js');
const linkCreate = $('.create-js');
// Route Menu

menuButton.on('click', () => {
    menuSection.addClass("show-menu");
});

menuButtonExit.on('click', () => {
    menuSection.removeClass("show-menu");
});

// Route Categories

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

// Route Categories
linkResearch.on('click', () => {
    window.location.href = 'views/process.html#research';
});
linkIdeate.on('click', () => {
    window.location.href = 'views/process.html#ideate';
});
linkPrototipe.on('click', () => {
    window.location.href = 'views/process.html#prototipe';
});

linkCreate.on('click', () => {
    window.location.href = 'views/process.html#create';
});





// Execute library slider horizontal mobile

    var slider = $('#slider').swipeSlider();




