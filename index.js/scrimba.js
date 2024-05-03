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




// Building a black jack game
/*let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    return Math.floor( Math.random()*13 ) + 1
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
*/

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sumi-el")
let cardsEl = document.querySelector("#card-el")
let playerEl = document.getElementById("player-el")
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""  
let player = {
    name: "Dagogo", 
    chips: 11
}

playerEl.innerText = player.name + ": $" + player.chips

function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    isAlive = true
     let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
 
    renderGame()
}

function renderGame() {
cardsEl.textContent = "Cards:" 
for (let i = 0; i < cards.length; i++) { 
    cardsEl.textContent += cards[i] + " "
}

sumEl.textContent = "Sum: " + sum
 if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        // message = "Drawing a new card from the deck!"
   // messageEl.innerText = message
   let card = getRandomCard()
   sum += card 
   //card = card + sum
   cards.push(card)

   renderGame() 
   //sumiEl.textContent += " " + card

    }
   // message = "Drawing a new card from the deck!"
   // messageEl.innerText = message
   let card = getRandomCard()
   sum += card 
   //card = card + sum
   cards.push(card)

   renderGame() 
   //sumiEl.textContent += " " + card

}




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


// Arrays
let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]
// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings
let experience = ["Logistic Officer at Lucktone", "CEO Dagogo groups", "Frontend Developer at Dagogo  group", "Account Officer Dagogo group", "Marketing Director Dagogo groups"]
let education = ["Studied Pub Admin in The Polytechnic Ibadan", "Studied Pub Admin in Auchi Polytechnic", "Studied UI/UX Design at Nerdyeye"]
let licenses = ["UI/UX Designer", "Frontend Developer", "WEB3 Developer"]
let skills = ["Web Design", "Product Design", "Frontend Web Development"]

console.log(experience[0])

let arr = ["My name is Lanre Dagogo","I'm 31years old" , true]

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)
messages.pop()
console.log(messages)


// LOOPS
for (let i = 10; i < 101; i += 10) {
    console.log(i)
}

let cardy = [7, 3, 9]

for (let i = 0; i < cardy.length; i++) {
    console.log(cardy[i])
}

let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el").textContent = sentence


for (let i = 0; i < greetingEl.length;/*sentence.length*/ i++) {
    console.log(greetingEl[i])
    //console.log(sentence[i])
    
}


let firstRace = 100
let secondRace = 80

function fastestRace() {
    if (firstRace < secondRace) {
        return firstRace
    } else if (firstRace > secondRace) {
        return secondRace
    } else {
        return firstRace + secondRace
    }
}

let newRace = fastestRace()
console.log(newRace)

// Math.random()
/*let randomNumber = Math.random()
console.log(randomNumber)*/
/*let randomNumber = Math.random() * 6

console.log(randomNumber) */

//Math.floor()
let flooredNumber = Math.floor(3.45632)

console.log(flooredNumber)
/* 

What does Math.floor() do to positive numbers?

Your answer: it removes the decimals



function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber

}

console.log( randomNumber() )*/


// Logical Operators
/*let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}
// If so, run the showSolution() function

function showSolution() {
    console.log("Showing the solution....")
}

let likesDocumentaries = false 
let likesStartups = true

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}*/



// Objects
// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation


let airBnb = {
    forFree: false,
    affordable: "It is very much fair in price",
    price: 230,
    rooms: ["Executive", "regular", 103, "short-time"]
}

console.log( airBnb.price )






// Practice
// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country
let person = {
    name: "Dagogo is",
    age: "31years old and",
    country: "lives in Nigeria"
}

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"
function logData() {
    console.log(person.name + " "+ person.age + " " + person.country)
}

// Call the logData() function to verify that it works
logData()

let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable
if (age < 6) {
    console.log("free")
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log("student discount")
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}

/*let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
for (let i = 0; i < largeCountries.length; i++) {
    console.log(largeCountries[i])
}*/

let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
largeCountries.pop()
largeCountries.shift()
largeCountries.unshift("China")
largeCountries.push("Pakistan")
console.log(largeCountries)


let hands = ["rock", "paper", "scissor"]
function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}

console.log( getHand() )



let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randomIndexOne = Math.floor( Math.random() * fighters.length )
    let randomIndexTwo = Math.floor( Math.random() * fighters.length )
    stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]
})




let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}

sortFruit()









