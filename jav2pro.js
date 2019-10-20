var myBody = document.querySelector('body');
myBody.style.backgroundColor = "rgb(16, 9, 22)";
myBody.style.marginTop="30px";

var btn=document.createElement('button');
myBody.appendChild(btn);
btn.textContent='click to reset number of grid';
btn.addEventListener('click', function refreshPage(){
  window.location.reload();
} );
btn.setAttribute("style", "position: fixed;top:100px;left:20px; border-radius:5px; background-color:#663399	;border:none;padding:10px	" );

var cont=document.getElementById('container');
cont.setAttribute("style","width: 700px; height: 700px; margin: auto" );
var num = prompt("Please enter number of grid in each rows and columns:", "16");

function addSquare(){
    var square = document.createElement("div");
    square.classList.add("myDiv");
    cont.appendChild(square);
    square.setAttribute("style"," display:inline-block; margin-bottom: 0; padding-bottom: 0 ; background-color :rgb(199, 196, 196)" );
    square.style.width= `${700/num}px` ;
    square.style.height= `${700/num}px` ;
}

function getRandomColor() {
    var letters = "0123456789abcdef";
    var result = "#";
    for (var i = 0; i < 6; i++) {
      result += letters.charAt(parseInt(Math.random() * letters.length));
    }
    return result;
  }
  

for (var i= 0; i<num; i++) {
  for (var j=0; j<num; j++){
   addSquare();
  }}
  

  var colored = document.getElementsByClassName('myDiv');
  for (let a = 0; a <= Math.pow(num, 2); a++) {
    colored[a].addEventListener('mouseover', function() { colored[a].style.backgroundColor = getRandomColor()})};
