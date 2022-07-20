let menuBtn = document.getElementById("menu-btn");
let sidNav = document.getElementById("sideNav");

sidNav.style.top="-100%"

function menu(){
    if(sidNav.style.top == "-100%"){
        sidNav.style.top = '0';
    }
    else{
        sidNav.style.top = "-100%";
    }
}