let numSquares = 6
let colors = generateRandomColors(numSquares)

let squares = document.querySelectorAll(".square")
let pickedColor = pickColor()
let colorDisplay = document.getElementById("colorDisplay")
let messageDisplay = document.querySelector("#message")
let h1 = document.querySelector("h1")
let resetButton = document.querySelector("#reset")
let easyBtn = document.querySelector("#easyBtn")
let hardBtn = document.querySelector("#hardBtn")



easyBtn.addEventListener("click" , function() {
	console.log('easy button works')
	easyBtn.classList.add("selected")
	hardBtn.classList.remove("selected")
	numSquares = 3
	colors = generateRandomColors(numSquares)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor
// if there is a color at that index and if there is, we will change the color of the first three. we only have 3 colors in that array
	for (let i = 0 ; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i]
		} else {
			squares[i].style.display = "none" // this will hide the last 3 boxes
		}
 }
})


hardBtn.addEventListener("click" , function() {
	console.log('hard button works')
	easyBtn.classList.remove("selected")
	hardBtn.classList.add("selected")
	numSquares = 6
	colors = generateRandomColors(numSquares)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor
// if there is a color at that index and if there is, we will change the color of the first three. we only have 3 colors in that array
	for (let i = 0 ; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i]
	squares[i].style.display ="block"
		}
 

 })


resetButton.addEventListener("click" , function() {
	console.log('reset works')
	// generate new colors
	colors = generateRandomColors(numSquares)
	// pick a new random color
	pickedColor = pickColor()
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor
	this.textContent = "New Colors"

	// change colors of squares
	for (let i = 0 ; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i]
	// the color of the stripe should go back to the original color
	h1.style.backgroundColor = "steelblue"
	messageDisplay.textContent = ""

	}
})


colorDisplay.textContent = pickedColor

for( let i = 0 ; i< squares.length; i++) {
// add initial colors to squares
	squares[i].style.backgroundColor = colors[i]

	// add click handlers to squares
	squares[i].addEventListener("click", function (){
		// console.log('square clicked')
		// grab color of clicked . the 'this' referes to the item that was clicked on
		let clickedColor = this.style.backgroundColor

		// compare color to picked color
		console.log('clicked color2 is', clickedColor)
		console.log('clicked color2 is' , pickedColor)
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct"
			resetButton.textContent = "Play Again"
			changeColors(clickedColor)
			h1.style.backgroundColor = clickedColor
		} else {
			console.log('wrong')
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = "Try Again"
		}
	})
}

// change color of all divs to match the winning color
function changeColors(color) {
	// loop through all divs 
	for( let i = 0 ; i< squares.length; i++) {
	squares[i].style.backgroundColor = color
	}
}

// pick a random number of index and use that to access teh number/color
// Math.floor removes anything beyond the decimal
// return colors[random]. it picks a random number and then returns those many colors

function pickColor(){
	let random = Math.floor(Math.random() * colors.length)
	return colors[random]
}

function generateRandomColors(num) {
// make an array and add num random colors to array and then return that array in the end
	let arr = []
// repeat num times
	for ( let i = 0 ; i < num; i ++) {
// get random color and push into array
	arr.push(randomColor())
}
// return that array
return arr
}

function randomColor () {
	// pick a "red" from 0-256
	let r = Math.floor(Math.random() * 256)
	// pick a "green" from 0-256
	let g = Math.floor(Math.random() * 256)
	// pick a "blue" from 0-256
	let b = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", " + g + ", " + b + ")"
}

