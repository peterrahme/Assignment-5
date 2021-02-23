// This connects "Calculate circle" button to "circle" function
document.getElementById('button').addEventListener('click', circle)
let number = 0
let area = 0
let diameter = 0
const pi = Math.PI
let radius = 0

/* This runs the area and circumference formula for the diameter inputed */ 
function circle () {
  diameter = document.getElementById('input').value
  radius = diameter / 2
  area = pi * radius ** 2
  number = 2 * pi * radius
  document.getElementById('answer').innerHTML = number
  document.getElementById('t').innerHTML = area
}
