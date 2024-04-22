/*let myAge = 30
let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio

console.log(myDogAge)

let bonusCount = 50
bonusCount = bonusCount + 50
bonusCount = bonusCount - 75
bonusCount = bonusCount + 45
console.log(bonusCount)


function numbers() {
    console.log(42)
}

numbers()

function increment() {
    console.log("The button was clicked")
}

let lap1 = 34
let lap2 = 33
let lap3 = 36
let totalLapTime = lap1 + lap2 + lap3

function lapTime() {
   // let totalLapTime = lap1 + lap2 + lap3
    console.log(totalLapTime)
}

lapTime()


let lapsCompleted = 0
lapsCompleted = lapsCompleted + 1
lapsCompleted = lapsCompleted + 1
lapsCompleted = lapsCompleted + 1
lapsCompleted 

let lapsCompleted = 0
function lapTime() {
    lapsCompleted = lapsCompleted + 1
}

lapTime()
lapTime()
lapTime()*/


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
let previousCount = count + "-"

function increment() {
    // count = count + 1 or count += 1
    count += 1
    countEl.innerText = count
}

function save() {
    let previousCount = count + " - "
    saveEl.innerText += " " + previousCount 
    countEl.textContent = 0
    count = 0
}

save()


// Exercise on renedering an error message

let errorEl = document.getElementById("error")

function errors() {
    let errorMessage = "Something went wrong, please try again"
    errorEl.innerText = errorMessage
}



/*
// Building a black jack game 
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
    isAlive = false
} else if (sum === 21){
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
}*/


// Calculator Challenge


let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumTotal = document.getElementById("sum-el")


// Create four functions: add(), subtract(), divide(), multiply()
function add(){
    count = num1 + num2
    sumTotal.innerText += " " + count
}
function subtract() {
    count = num1 - num2
    sumTotal.innerText += " " + count
}
function divide() {
    count = num1 / num2
    sumTotal.innerText += " " + count
}
function multiply() {
    count = num1 * num2
    sumTotal.innerText += " " + count
}

// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"



/*let age = 100 
if (age < 100) {
    console.log("Not elegible")
} else if (age === 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
}*/


// strings 

/*let username = "Per"
let message = "You have a three new notifications"
console.log(message + "," + username + "!")

let messageToUser = message + "," + username + "!"
console.log(messageToUser)

let name = "Lanre Dagogo"
let greeting = "Hi, my name is "
let myGreeting = greeting + name
console.log(myGreeting)

//strings vs number 
console.log(4+5)// 9
console.log("2" + "4")// "24"
console.log("5" + 1)// "51"
console.log(100 + "100")// "100100"
*/

/*let welcomeEl = document.getElementById("welcome-el")
let name = "Lanre Dagogo"
let greeting = "Welcome Back " + name


function welcome() {
    
    welcomeEl.innerText = greeting
    
}

welcome()*/












