//===================using event listener===================

let btn=document.querySelector("button");
let h1=document.querySelector("h1");
btn.addEventListener("click",function(){
    let h1=document.querySelector("h1");
    let color=getRandomColor();
    h1.innerText=color;

let div=document.querySelector("div");
div.style.backgroundColor=color;

console.log("color updated to ");
});
function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`;
}