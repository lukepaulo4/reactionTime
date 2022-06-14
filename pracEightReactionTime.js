/*
DONE have a box on teh screen
DONE when box is clicked it disappears
DONE when box is clicked, it reappears after 3 seconds (research how)
DONE measure time between shape appearing adn being clicked
DONE output that time

part 2
DONE random delay time
DONE random location on screen
DONE random shape
    -height & width
    -curvature
DONE random color
*/

var start;
var clicked;

function disappear() {
    document.getElementById('shape').style.display='none';
    clicked=Date.now();
    var reactionTime = (clicked-start)/1000;
    alert(reactionTime+' seconds');
    var randomDelay = ((Math.random()*3))*1000; //math rand goes 0-1. this gives time between 2-5
    setTimeout(appear, randomDelay);
}

function appear() {
    var randomTop = Math.random()*400;
    var randomLeft = Math.random()*300;
    var randomHeight = Math.random()*200+10;
    var randomWidth = Math.random()*200+10;
    var randomCurve = Math.random();
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    if (randomCurve < 0.5) {
        document.getElementById('shape').style.borderRadius=25+'px';
    } else {
        document.getElementById('shape').style.borderRadius=0+'px';
    }
    document.getElementById('shape').style.top=randomTop+'px';
    document.getElementById('shape').style.left=randomLeft+'px';
    document.getElementById('shape').style.width=randomWidth+'px';
    document.getElementById('shape').style.height=randomHeight+'px';
    document.getElementById('shape').style.display='block';
    document.getElementById('shape').style.backgroundColor='#'+randomColor;
    start=Date.now();
}
