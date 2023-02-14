var tablinks =document.getElementsByClassName("tab-links");
var tabcontents =document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let menubtn=document.getElementById("menu-btn").addEventListener('click',bar);
let sidenav=document.getElementById("side-nav");
let menu=document.getElementById("menu");


sidenav.style.right = "-250px";

function bar(){


    if(sidenav.style.right=="-250px"){
        sidenav.style.right = "0";
        menu.src = "./img/37333.png"
    }
    else{
        sidenav.style.right ="-250px"
        menu.src = "./img/9e631f71532eec1f846be3c0d7a98ae1-logotipo-de-corazon-de-rayas-negras.png"
    }
}