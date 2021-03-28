"use strict";

const simple = [
  "blue",
  "yellow",
  "green",
  "red",
  "orangered",
  "royalblue",
  "lightgreen",
];

const button = document.querySelector("#btn");
const body = document.querySelector("body");
const span = document.querySelector("span");
const simpleBtn = document.getElementById("simp");
const rgbBtn = document.getElementById("rgb");

// random number
const rn = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// random color
const rc = () => `rgb(${rn(0, 255)},${rn(0, 255)},${rn(0, 255)})`;

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (document.URL.indexOf("rgb.html") >= 0) {
    let rgbR = rc();
    body.style.backgroundColor = rgbR;
    span.textContent = rgbR;
  } else {
    let simpR = rn(0, simple.length - 1);
    body.style.backgroundColor = simple[simpR];
    span.textContent = simple[simpR];
  }
});
