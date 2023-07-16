// Get all elements with class name "img-parallax"
var imgElements = document.getElementsByClassName("img-parallax");

// Iterate over each element
Array.prototype.forEach.call(imgElements, function(img) {
    var imgParent = img.parentElement;

    // Define the parallaxImg function
    function parallaxImg() {
        console.info('kibiras');
        var speed = 1;
        var imgY = imgParent.offsetTop;
        var winY = window.scrollY || window.pageYOffset;
        var winH = window.innerHeight;
        var parentH = imgParent.clientHeight;
        var winBottom = winY + winH;
        var imgPercent;

        if (winBottom > imgY && winY < imgY + parentH) {
            var imgBottom = (winBottom - imgY) * speed;
            var imgTop = winH + parentH;
            imgPercent = (imgBottom / imgTop) * 100 + (50 - speed * 50);
        }

        img.style.top = imgPercent + '%' ;
        img.style.transform = 'translate(-50%, -' + imgPercent + '%)';
    }

    // Attach event listeners to scroll and DOM ready events
    document.addEventListener('scroll', parallaxImg);
    window.addEventListener('DOMContentLoaded', parallaxImg);
});