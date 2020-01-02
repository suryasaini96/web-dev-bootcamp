// var colors = [
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(255, 0, 255)",
//   "rgb(0, 255, 255)",
//   "rgb(0, 0, 255)",
//   "rgb(0, 255, 0)"
// ];

var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var message = document.getElementById('message');
var pickedColor = pickedColor();

colorDisplay.textContent = pickedColor;

for(var i=0; i<colors.length; i++){
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      message.textContent = "Correct!";
      changeColors(clickedColor);
    } else {
      message.textContent = "Try again";
      this.style.backgroundColor = "#232323";
    }
  });
}

function changeColors(color){
  for (var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickedColor(){
  var random = Math.floor(Math.random() * 5);
  return colors[random];
}

function generateRandomColors(num){
  var arr = [];
  for (var i=0; i<num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256 );
  var g = Math.floor(Math.random() * 256 );
  var b = Math.floor(Math.random() * 256 );
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
