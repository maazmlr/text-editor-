var body=document.querySelector('body');
const text=document.querySelector(".p");
const font = document.querySelector("#font");
var bold=document.querySelector(".bold")
var italic=document.querySelector(".italic")
var color=document.querySelector("#color");
var setColor=document.querySelector(".setColor")
var setFont=document.querySelector('.setFont')
console.log(color);
bold.addEventListener("click",function(){
    text.style.fontWeight='bold'
})
italic.addEventListener("click",function(){
    text.style.fontStyle='italic';
})
color.addEventListener("change",function(){
    body.style.backgroundColor=color.value;
})
font.addEventListener("change",function(){
    const ab=font.value;
    text.style.fontSize=ab+"px";
    
})
