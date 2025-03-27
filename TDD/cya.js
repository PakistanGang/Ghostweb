
s = window.innerWidth


if(s<447){
    document.getElementById("click_nav").style.width=(s+"px").toString()
document.getElementById("click_nav2").style.width=(s+"px").toString()
document.getElementById("click_nav3").style.width=(s+"px").toString()
document.getElementById("click_nav4").style.width=(s+"px").toString()
document.getElementById("click_nav5").style.width=(s+"px").toString()
document.getElementById("click_nav6").style.width=(s+"px").toString()
document.getElementById("click_nav7").style.width=(s+"px").toString()
}


function click_nav(){

    if (s <447){
        if (document.getElementById("click_nav").style.display!="block"){
            document.getElementById("click_nav").style.display="block"
            document.getElementById("click_nav2").style.display="block"
            document.getElementById("click_nav3").style.display="block"
            document.getElementById("click_nav4").style.display="block"
            document.getElementById("click_nav5").style.display="block"
            document.getElementById("click_nav6").style.display="block"
            document.getElementById("click_nav7").style.display="block"
        }
        else{
            document.getElementById("click_nav").style.display="none"
            document.getElementById("click_nav2").style.display="none"
            document.getElementById("click_nav3").style.display="none"
            document.getElementById("click_nav4").style.display="none"
            document.getElementById("click_nav5").style.display="none"
            document.getElementById("click_nav6").style.display="none"
            document.getElementById("click_nav7").style.display="none"
        }

    }

    
   
}

function on_scroll() {
    if(s<447){
        document.getElementById("click_nav").style.display="none"
        document.getElementById("click_nav2").style.display="none"
        document.getElementById("click_nav3").style.display="none"
        document.getElementById("click_nav4").style.display="none"
        document.getElementById("click_nav5").style.display="none"
        document.getElementById("click_nav6").style.display="none"
        document.getElementById("click_nav7").style.display="none"
        


    }
}