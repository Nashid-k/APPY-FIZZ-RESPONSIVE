window.onscroll = function() {
    var theta = document.documentElement.scrollTop / 50 % Math.PI;

document.getElementById('image-responsive').style.transform ='rotate(' + theta + 'rad)';
}

var myHeading = document.getElementsByClassName('text-container');
    var clickCount = 0;

    myHeading[0].addEventListener('click', flashColor);

    function flashColor() {
        if (clickCount % 2 === 0) {
            this.style.color = 'yellow';
        } else {
            this.style.color = 'white';
        }
        clickCount++;
    }