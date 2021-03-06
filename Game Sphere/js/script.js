window.onscroll = function(){updateScrollBar()};

isFull = false
function updateScrollBar() {
    docYPos = scrollY;
    scrollBar = document.getElementById('scroll-bar');
    scrollbarYPos = scrollBar.getBoundingClientRect().y,
    scrollBarHeight = scrollBar.offsetHeight;
    progressBarHeight = -scrollbarYPos + window.innerHeight / 2;

    if (isFull) {
        progressBarHeight = scrollBarHeight;
    }
    else if (progressBarHeight < 0) {
        progressBarHeight = 0;
    } else if (progressBarHeight >= scrollBarHeight) {
        progressBarHeight = scrollBarHeight;
        isFull = true;
    } else {
        progressBarHeight = Math.round(progressBarHeight);
    }
    document.getElementById('progress-bar').style.height = progressBarHeight.toString() + 'px';

    landingAreaYPos = document.getElementById('landing-area').style.height;
    if (docYPos > landingAreaYPos + window.innerHeight) {
        document.getElementById('side-bar').classList.add('active');
    } else {
        document.getElementById('side-bar').classList.remove('active');
    }
}