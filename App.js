/*import { without } from 'lodash';*/
var _= require('lodash');

let array = [1,2,3,5,6,7,8,];
console.log('answer', _.without(array, 3));

const css = document.querySelector('h3');
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("body");

function setBackgroundColors() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setBackgroundColors);
color2.addEventListener("input", setBackgroundColors);