var dropmenu = document.getElementsByClassName("drop-items-wrapper");
var dropdown = document.getElementsByClassName("dropdown");
  
window.onload = function(){
    dropmenu[0].style.display = "none";
    dropdown[0].addEventListener("click",function(){
        var dropicon = document.getElementById("icon");
        if(dropmenu[0].style.display == "inline-block"){
            dropmenu[0].style.display = "none";
            dropmenu[0].style.top = "-20px";
            dropicon.setAttribute("class","fas fa-chevron-down");
        }
        else{
            var i = -20;
            dropmenu[0].style.display = "inline-block";
            var anim = setInterval(function(){
                dropmenu[0].style.top = i+"px";
                i++;
                if(i == 0){
                    i = -20;
                    clearInterval(anim);
                }
            },5)
            dropicon.setAttribute("class","fas fa-chevron-up");
        }
    })
    var dropitems = document.getElementsByClassName("drop-items");
    let x;
    for(x=0; x<dropitems.length;x++){
        dropitems[x].addEventListener("click",function(){
            
        })
    }

}


