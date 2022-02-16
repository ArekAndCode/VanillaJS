const BODY = document.querySelector('body');
const COLORMIXER = document.querySelector('.colormixer')
const RED_NUMBER = document.querySelector('.red_number');  
const GREEN_NUMBER = document.querySelector('.green_number');  
const BLUE_NUMBER = document.querySelector('.blue_number');  
const OPACITY_NUMBER = document.querySelector('.opacity_number');  
const TITLE = document.querySelector('.title');
const RANGE_RED = document.querySelector('.range_red');  
const RANGE_GREEN = document.querySelector('.range_green');  
const RANGE_BLUE = document.querySelector('.range_blue');  
const RANGE_OPACITY = document.querySelector('.range_opacity');

let RED = 0;
let GREEN = 0;
let BLUE = 0;
let OPACITY = 0;

RANGE_RED.addEventListener("input", function(){
    RED=RANGE_RED.value; GREEN=RANGE_GREEN.value; BLUE=RANGE_BLUE.value; OPACITY=RANGE_OPACITY.value;
    RED_NUMBER.innerHTML=RED;
    BODY.style.backgroundColor='rgba('+RED+','+GREEN+','+BLUE+','+OPACITY+')';
    TITLE.style.color='rgba('+RED+','+GREEN+','+BLUE+','+OPACITY+')';
});

RANGE_GREEN.addEventListener("input", function(){
    RED=RANGE_RED.value; GREEN=RANGE_GREEN.value; BLUE=RANGE_BLUE.value; OPACITY=RANGE_OPACITY.value;
    GREEN_NUMBER.innerHTML=GREEN;
    BODY.style.backgroundColor='rgba('+RED+','+GREEN+','+BLUE+','+OPACITY+')';
    TITLE.style.color='rgba('+RED+','+GREEN+','+BLUE+','+OPACITY+')';
});

RANGE_BLUE.addEventListener("input", function(){
    RED=RANGE_RED.value; GREEN=RANGE_GREEN.value; BLUE=RANGE_BLUE.value; OPACITY=RANGE_OPACITY.value;
    BLUE_NUMBER.innerHTML=BLUE;
    BODY.style.backgroundColor='rgba('+RED+','+GREEN+','+BLUE+','+OPACITY+')';
    TITLE.style.color='rgba('+RED+','+GREEN+','+BLUE+','+OPACITY+')';
});

RANGE_OPACITY.addEventListener("input", function(){
    OPACITY=RANGE_OPACITY.value;
    OPACITY_NUMBER.innerHTML=OPACITY;
    BODY.style.backgroundColor='rgba('+RED+','+GREEN+','+BLUE+','+OPACITY+')';
    TITLE.style.color='rgba('+RED+','+GREEN+','+BLUE+','+OPACITY+')';
});


