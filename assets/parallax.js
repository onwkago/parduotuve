

document.getElementByClassName("img-parallax").each(function(){
    let img = this;
    let imgParent = this.parent();
    function parallaxImg () {
        console.info('bybys kiausai');
        let speed = img.data('speed');
        let imgY = imgParent.offset().top;
        let winY = this.scrollTop();
        let winH = this.height();
        let parentH = imgParent.innerHeight();



        let winBottom = winY + winH;


        if (winBottom > imgY && winY < imgY + parentH) {

            let imgBottom = ((winBottom - imgY) * speed);

            let imgTop = winH + parentH;

            let imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
        }
        img.css({
            top: imgPercent + '%',
            transform: 'translate(-50%, -' + imgPercent + '%)'
        });
    }
    document.on({
        scroll: function () {
            parallaxImg();
        }, ready: function () {
            parallaxImg();
        }
    });
});