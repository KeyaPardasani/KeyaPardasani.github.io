let button = document.getElementById("colorbutton");
let body = document.getElementById("body");
var clicked = false;

button.onclick = function(){
    if(!clicked){
        body.style.backgroundColor = "#ECE4B7";
        body.style.color = "#311E10";
        clicked = true;
    }
    else{
        body.style.backgroundColor = "#1E1E1E";
        body.style.color = "#C2847A";
        clicked = false;
    }
}

