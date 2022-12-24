// document.getElementById("count-el").innerText = 5
//1. create a variable ,myAge, and set its value to your age
//2.  log the myAge variable to the console
// let myAge = 22
// console.log(myAge)

// let firstBatch = 5
// let secondBatch = 7


// let count = firstBatch + secondBatch 

// console.log(count)



// let myAge = 22
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)


// let count = 5

// count = count + 1
// console.log(count)


// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)



// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count

// let count = 0


// function increment() {
//      console.log("The button was clicked")
// }



// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// //setting up the race 

// countdown()






// //go
// // players are running the race
// //race is finished

// //get ready for a new race
// countdown()



// create a function that logs out the number 42 to the console
// call invoke the function


// function myLogger() {
//     console.log(42)
// }
// myLogger()


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // let lap = lap1 + lap2 + lap3
 


// // create a function that logs out the sum of all the lap times

// function lapTime() {
//     let lap = lap1 + lap2 + lap3
//     console.log(lap)
//     // console.log(lap1 + lap2 + lap3)
// }
// lapTime()


// let lapsCompleted = 0

// // create a function that increments the lapsComleted variable  with one
// // run it three times


// function incrementLap() {
//        lapsCompleted = lapsCompleted + 1
// }
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)



// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count


// let countEl = document.getElementById("count-el")

// let count = 0

// function increment() {
//     count = count + 1
//     // countEl.innerText = count
//     document.getElementById("count-el").innerText = count
//     // console.log(count)
// }



// grab the save-el paragraph and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0


function increment() {
 count += 1
 countEl.innerText = count
}

// create a function save which logs out the count when it's called


function save() {
    let countStr = count + " - "
//create a variable that contains both the count and the dash seperator
// render the variable in the saveEl using innerText 
// NB: make sure to not delete the existing content of the paragraph
saveEl.innerText += countStr

console.log(count)
}


// string  eg  '' " " can be used to create this



// let username = "per"

// // create a variable message that stores the string " you have three new notifcations"
// let message = " you have three new notifcations"
// // create a variable , messageToUser , that contains the message we have logged
// let messageToUser = message + " , "  + username +" ! "
// console.log(messageToUser)


//create two variables name and greeting. the name variable should store your name, the greetings should store  eg "Hi, my name is Sujan."


// create a third variable myGreeting that contcatenates the two strings.
// log myGreetings to the console

// let name = "Sujan"
// let greeting = " Hi, my name is "

// let myGreeting = greeting + name  
// console.log(myGreeting)




// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

// console.log(totalPoints)


// console.log( 4 + 5)  //9
// console.log( "2" + "4")  //"24"
// console.log("5" + 1)    // "51"
// console.log(100 + "100")   //"100100"


// grab the welcome-el paragraph and store it in a variable called welcome

let welcomeEl = document.getElementById("welcome-el")
// create two variables name & greetings that contain your name
// and the greeting we want to render on the page 

let name = "Sujan Kandel"
let greeting = "Welcome back "

// render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name


// add an emoji to the end!
// write your code below here
// hint count = count + 1

// welcomeEl.innerText = welcomeEl.innerText + "👋"  
welcomeEl.innerText +=  "👋"  








