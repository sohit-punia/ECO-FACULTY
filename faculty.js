let popup1 = document.querySelector('.popup');
let body = document.getElementById('body');
let popup2 = document.querySelector('.popup2');
let popup3 = document.querySelector('.popup3');
let popup4 = document.querySelector('.popup4');
var container = document.querySelector('.container');



function openpopup(){
    popup1.classList.add("open-popup");
    // body.style.backgroundColor = 'black';
  
    // body.classList.add("blur");
    container.classList.add("blur");
}
function openpopup2(){
    popup2.classList.add("open-popup2");
    container.classList.add("blur");

}
function openpopup3(){
    popup3.classList.add("open-popup3");
    container.classList.add("blur");
}
function openpopup4(){
    popup4.classList.add("open-popup4");
    container.classList.add("blur");
}
// 
function closepopup1(){
    popup1.classList.remove("open-popup");
    container.classList.remove("blur");
}
function closepopup2(){
    popup2.classList.remove("open-popup2");
    container.classList.remove("blur");
}
function closepopup3(){
    popup3.classList.remove("open-popup3");
    container.classList.remove("blur");
}
function closepopup4(){
    popup4.classList.remove("open-popup4");
    container.classList.remove("blur");
}