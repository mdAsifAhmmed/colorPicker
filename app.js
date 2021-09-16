function ChangeColor (){
    var x;
    x = document.querySelector("#PageColor").value;
    document.body.style.background=x;
}
function hName(){
    var y;
    y = document.querySelector("#PageColor").value;
    var z;
    z =document.querySelector("#colorInput").value;
    document.querySelector("#Hname").innerHTML= y;
    document.querySelector("#fColor").innerHTML= z;
}
function bodyColor(){
    var z;
    z =document.querySelector("#colorInput").value;
   document.body.style.color=z;
}
