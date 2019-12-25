 function Myfunction(Language){
     var programming = document.getElementsByClassName("opentext");
     for(i=0;i<programming.length;i++){
         programming[i].style.display="none";
     }
     document.getElementById(Language).style.display="block";
}


var acc=document.getElementsByClassName("accord");
var i;
for(i=0;i<acc.length;i++){
    acc[i].addEventListener("click",function(){
        var panel=this.nextElementSibling;
        if(panel.style.display=="block"){
            panel.style.display ="none";
        }
        else {
            panel.style.display ="block"
        }
})
}


 var slides = document.querySelectorAll("#slides .slide");
 var currentslide = 0;
 var slideInterval = setInterval(nextslide,2500);

 function nextslide(){
     slides[currentslide].className ='slide';
     currentslide = (currentslide+1)%slides.length;
     slides[currentslide].className = "slide showing";
 }

