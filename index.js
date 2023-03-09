
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    dots:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false
});
$("#year").text(new Date().getFullYear());

// first count
var count = 0;

function incrementCount() {
    count++;
    document.getElementById("stop").innerHTML = count;
    if (count === 18) {
        clearInterval(interval);
    }
}
var interval = setInterval(incrementCount, 1000);

// second count
var number = 0;

function incrementNumber() {
    number++;
    document.getElementById("counter").innerHTML = number;
    if (number === 9) {
        clearInterval(stop);
    }
}
var stop = setInterval(incrementNumber, 1000);


// how to resize an image base on the screen size with javascript
// var img = document.getElementById("my-img");
//
// window.onresize = function() {
//     var width = window.innerWidth;
//     var height = window.innerHeight;
//     img.style.width = width + "px";
//     img.style.height = height + "px";
// };
