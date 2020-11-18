function clickRegister(){
document.getElementById("tijiao").value = "功能未实现";
}

function initialDraw(){
let myCanvas = document.getElementById("myCanvas");

myCanvas.width = document.documentElement.clientWidth;
myCanvas.height = document.documentElement.clientHeight;

let canvasWidth = myCanvas.width;
let canvasHeight = myCanvas.height;
let dotNumber = 100;
let widthArray = [];
let heightArray = [];
let widthSpeedArray = [];
let heightSpeedArray = [];

let ctx = document.getElementById("myCanvas").getContext("2d");

for (let i = 0; i < dotNumber; i++){
let widths = Math.floor(Math.random()*canvasWidth);
let heights = Math.floor(Math.random()*canvasHeight);
widthArray.push(widths);
heightArray.push(heights);
ctx.beginPath();
ctx.arc(widths,heights,3,0,2*Math.PI);
ctx.closePath();
ctx.fillStyle="#D0D0D0";
ctx.fill();

let speedW = Math.random()*0.1*(Math.round(Math.random()) * 2 - 1);
let speedH = Math.sqrt(0.01-Math.pow(speedW,2))*(Math.round(Math.random()) * 2 - 1);
widthSpeedArray.push(speedW);
heightSpeedArray.push(speedH)
}

move = setInterval(function(){dotMove(widthArray,heightArray,widthSpeedArray,heightSpeedArray,dotNumber)}, 
3); 
}

function drawLines(widthArray,heightArray,dotNumber){

let ctx = document.getElementById("myCanvas").getContext("2d");
for (let i = 0; i < dotNumber; i++){
for (let j = i+1;j < dotNumber; j++){

let distanse = Math.pow(widthArray[i]-widthArray[j],2)+Math.pow(heightArray[i]-heightArray[j],2)

if (distanse < 10000){
ctx.beginPath();
ctx.moveTo(widthArray[i], heightArray[i]);
ctx.lineTo(widthArray[j], heightArray[j]);
ctx.closePath();
ctx.strokeStyle="#D0D0D0";
ctx.stroke();
}}}}

function dotMove(widthArray,heightArray,widthSpeedArray,heightSpeedArray,dotNumber){

let myCanvas = document.getElementById("myCanvas");
let ctx = document.getElementById("myCanvas").getContext("2d");
let canvasWidth = myCanvas.width;
let canvasHeight = myCanvas.height;
ctx.clearRect(0,0,canvasWidth,canvasHeight);

for (let i = 0; i < dotNumber; i++){
widthArray[i] += widthSpeedArray[i];
heightArray[i] += heightSpeedArray[i];
if (widthArray[i]<0 | widthArray[i]>canvasWidth){widthSpeedArray[i] = -widthSpeedArray[i]};
if (heightArray[i]<0 | heightArray[i]>canvasHeight){heightSpeedArray[i] = -heightSpeedArray[i]};
ctx.beginPath();
ctx.arc(widthArray[i],heightArray[i],3,0,2*Math.PI,true);
ctx.closePath();
ctx.fill();
}
drawLines(widthArray,heightArray,dotNumber);
}

function resizeCanvas() {
clearInterval(move);
let myCanvas = document.getElementById("myCanvas");
let ctx = document.getElementById("myCanvas").getContext("2d");
ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
myCanvas.width = window.clientWidth;
myCanvas.height = window.clientHeight;
initialDraw();
}