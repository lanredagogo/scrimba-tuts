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









