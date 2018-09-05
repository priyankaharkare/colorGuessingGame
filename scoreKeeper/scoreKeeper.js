let p1Button = document.querySelector("#p1")
let p2Button = document.getElementById("p2")
let p1Display = document.querySelector("#p1Display")
let p2Display = document.querySelector("#p2Display")
let reset = document.getElementById("reset")
let numInput = document.querySelector("input")
let p = document.querySelector("p")

let p1Score = 0
let p2Score = 0
let gameOver = false
let winningScore = 5



p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++
    if (p1Score === winningScore) {
      p1Display.classList.add("winner")
      gameOver = true
    }
    p1Display.textContent = p1Score
  }

})

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++
    if (p2Score === winningScore) {
      p2Display.classList.add("winner")
      gameOver = true
    }
    p2Display.textContent = p2Score
  }
})

reset.addEventListener("click", function() {
  console.log('clicked')
  resetGame()
})

function resetGame(){
  p1Score = 0
  p2Score = 0
  p1Display.textContent = p1Score
  p2Display.textContent = p2Score
  p1Display.classList.remove("winner")
  p2Display.classList.remove("winner")
  gameOver = false
}
// we can use the 'change' instead of 'click' becuase that will indicate a number is changed as opposed to click
numInput.addEventListener("change", function () {
  console.log('clicked the input')
  value.textContent = numInput.value
  winningScore = Number(numInput.value)
  resetGame()
})
