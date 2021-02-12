'use strict'

const letters1 = ['', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
const letters2 = ['', 'a', 'e', 'i', 'o', 'u'];
const letters3 = ['', 'b', 'd', 'f', 'g', 'k', 'l', 'm', 'n', 'p', 's', 't', 'v', 'x', 'y', 'z'];

const card1 = new Card(document.getElementById('card1'), letters1);
const card2 = new Card(document.getElementById('card2'), letters2);
const card3 = new Card(document.getElementById('card3'), letters3);

const overlay = document.getElementById('overlay');
const rotate = document.getElementById('rotate');
let rotation = false;
let time = { diff: 0 };
let width = window.screen.availWidth;
let screen = window.screen.orientation;

if (width < 500 && screen.type == 'portrait-primary') {
  overlay.style.visibility = 'visible';
  window.requestAnimationFrame(main);
} else {
  overlay.style.visibility = 'hidden';
}

window.onorientationchange = function() {
  width = window.screen.availWidth;
  if (width < 500) {
    screen = window.screen.orientation;
    switch(screen.type) {
      case 'landscape-primary':
        overlay.style.visibility = 'hidden';
        break; 
      case 'portrait-primary':
        overlay.style.visibility = 'visible';
        window.requestAnimationFrame(main);
        break;
    }
  } else {
    overlay.style.visibility = 'hidden';
  }
}

function main(now) {
  updateTime(now);
  if( time.diff > 2000 ) {
    if (rotation) {
      rotate.src = 'images/portrait.svg';
      rotation = false;
    } else {
      rotate.src = 'images/landscape.svg' ;
      rotation = true;
    }
    time.diff = 0;
  }
  window.requestAnimationFrame(main);
}

function updateTime(now) {
  if (time.before !== undefined) time.diff += now - time.before;
  time.before = now;
}