document.addEventListener("DOMContentLoaded",function() {
    const click = document.querySelectorAll(".input")
    const span = document.querySelectorAll(".input .len")
    var tg = "lan1";
    click[0].onclick = function() {
        tg="lan1";
        if(tg==="lan1")
        {
            span[0].classList.add("small");
            span[1].classList.remove("small");
            span[2].classList.remove("small");
            span[3].classList.remove("small");
            tg="lan2";
        }
        else
        {
            if(tg==="lan2")
            {
                span[0].classList.remove("small");
                tg="lan1";
            }
        }
    }
    click[1].onclick = function() {
        tg="lan1";
        if(tg==="lan1")
        {
            span[0].classList.remove("small");
            span[1].classList.add("small");
            span[2].classList.remove("small");
            span[3].classList.remove("small");
            tg="lan1";
        }
        else
        {
            if(tg==="lan2")
            {
                span[1].classList.remove("small");
            }
        }
    }
    click[2].onclick = function() {
        tg="lan1";
        if(tg==="lan1")
        {
            span[0].classList.remove("small");
            span[1].classList.remove("small");
            span[2].classList.add("small");
            span[3].classList.remove("small");
            tg="lan2";
        }
        else
        {
            if(tg==="lan2")
            {
                span[2].classList.remove("small");
            }
        }
    }
    click[3].onclick = function() {
        tg="lan2";
        if(tg==="lan2")
        {
            span[0].classList.remove("small");
            span[1].classList.remove("small");
            span[2].classList.remove("small");
            span[3].classList.add("small");
            tg="lan2";
        }
        else
        {
            if(tg==="lan1")
            {
                span[3].classList.remove("small");
            }
        }
    }
    const actionlist = document.querySelector(".action-list");
    const lefttoright = document.querySelector(".left-to-right")
    const black = document.querySelector(".den");
    actionlist.onclick = function() {
        lefttoright.classList.toggle("to-right");
    }
    const close = document.querySelector(".close");
    close.onclick = function() {
        lefttoright.classList.remove("to-right");
    }
    const icon = document.querySelector(".chat span")
    var tg1 = "lan1"
    setInterval(function(){
        if(tg1==="lan1")
        {
            icon.innerHTML="<ion-icon name='list'></ion-icon>";
            tg1="lan2";
        }
        else
        {
            if(tg1==="lan2")
            {
                icon.innerHTML="<ion-icon name='chatbox-ellipses'></ion-icon>";
                tg1="lan1";
            }
        }
    },1000)
    const actionmenu = document.querySelectorAll(".action-menu")
    const down = document.querySelectorAll(".left-to-right .list-menu-down")
    tg1 = "lan1";
    actionmenu[0].onclick=function() {
        down[0].classList.toggle("list-menu-down")
    }
    actionmenu[1].onclick=function() {
        down[1].classList.toggle("list-menu-down")          
     }
     actionmenu[2].onclick=function() {
        down[2].classList.toggle("list-menu-down")       
     }
     actionmenu[3].onclick=function() {
        down[3].classList.toggle("list-menu-down")    
     }
     actionmenu[4].onclick=function() {
        down[4].classList.toggle("list-menu-down")     
     }
},false)