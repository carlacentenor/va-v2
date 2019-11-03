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
const sectionBlogMobile = $('.blog-js');
const screenHeight = window.screen.height;
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
if (screen.width < 1025) {
    var slider = $('#slider').swipeSlider();
}
// Hide or Show mini box the contact
$(window).scroll(function(event) {
    if (screen.width > 1024) {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= (screenHeight / 2) && scrollTop < (screenHeight * 2)) {
            $('.fixed-container').fadeIn('slow');
        } else {
            $('.box-contact-js').fadeOut('slow');
        }
    }

});

// Send Email 

$(".mail-js").click(function() {
    document.location.href = "mailto:hola@vonallem.la";
});

// View location google-maps

const searchLocation = () => {
    document.location.href = "https://goo.gl/maps/mE8sUtptEiFGbZXT6";
}

$(".location-js").click(searchLocation())
$(".location-post-js").click(searchLocation())