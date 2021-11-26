const section = document.querySelector('section');
const logo = document.querySelector('.logo');
const fps = 60;

section.style.height = window.innerHeight + 'px';
section.style.width = window.innerWidth + 'px';


let Xpos = 10;
let Ypos = 10;
let Xspeed = 4;
let Yspeed = 4;

function upate(){
    if(Xpos + logo.clientWidth >= window.innerWidth || Xpos <= 0){
        Xspeed = -Xspeed;
    }
    if(Ypos + logo.clientHeight >= window.innerHeight || Ypos <= 0){
        Yspeed = -Yspeed;
    }
    logo.style.left = Xpos + 'px';
    logo.style.top = Ypos + 'px';
}

setInterval(()=>{
    Xpos += Xspeed;
    Ypos += Yspeed;
    upate();
},1000/fps)