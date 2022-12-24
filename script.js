// let firstcard = 3
// let secondcard = 11
// let sum = firstcard + secondcard
// console.log(sum)

// conditional statements practicing
// let age = 22
// if(age<21){
//     console.log("You cannot enter")
// } else{
//     console.log("Welcome!")
// }

// let age = 100
// if(age<100){
//     console.log("You are not eligible")
// } else if(age===100){     // === strictly checks the data type i.e 100==="100" is not valid and == leniently checks only the value i.e 100=="100" is valid
//     console.log("Here is your birthday card from the king!")
// } else{
//     console.log("You have already gotten one card")
// }


// writing conditionals for our game 


// making the cards array
let cards = []
let sum = 0
let player = {
    name:"Harry",
    chips:190
}
let isAlive = false
let hasBlackJack = false // making variables to store results accordingly in conditionals
let message = "" // creating a message variables to store results eventually
let messageEl = document.getElementById("message-el")
// getting the sum element 
let sumEl=document.getElementById("sum-el")
// getting the cards element
let cardsEl = document.getElementById("cards-el")
// getting the player element
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// create a random card function that always returns 5
function randomcard(){
    let x = Math.floor(Math.random()*13)+1
    // modifying ace and king cards
    if (x===1){
        return 11;
    }
    else if (x===11 || x===12 || x===13){
        return 10;
    }
    else{
        return x
    }
}
// making a start game function that calls rendergame
function startGame(){
    isAlive = true
    // modifyiing variables when start function is clicked
    let firstcard = randomcard()
    let secondcard = randomcard()
    cards = [firstcard,secondcard]
    sum = cards[0] + cards[1]
    renderGame()
}


function renderGame(){
    // displaying the cards
    // cardsEl.textContent = "Cards: "+cards[0]+" "+cards[1]
    // Creating for loops
    cardsEl.textContent = "Cards: " // ye cards el text content define karna zaroori hai kiunke isi textcontent mae loop wala teext content increment hoga
    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent +=   cards[i] + " "
    }
    // displaying the sum
    sumEl.textContent = "Sum: "+ sum  
    if(sum<=20){
        message="Do you want to draw a new card?"
    } else if(sum===21){
        message="You've got the Blackjack!"
        hasBlackJack = true 
    } else{
        message="You're out of the game!"
        isAlive = false
    }
    messageEl.textContent=message
}
// Creating a new card function
function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let Newcard = randomcard()
        sum+= Newcard
        cards.push(Newcard)
        // console.log(cards)
        renderGame()
    }
}

// console.log(message)



// PRACTICING BOOLEANS
// console.log(4===3) // false
// console.log(5>2) // true
// console.log(12>12) // false
// console.log(3<0) // false
// console.log(3>=3) // true
// console.log(11<=11) // true
// console.log(3<=2) // false


// Practicing Arrays
// let linkedin= [
//     "Junior developer",
//     "Intermediate",
//     "Html Css Js Bootstrap React Jquery UI UX"
// ]

// console.log(linkedin[1])
// console.log(linkedin[2])
// console.log(linkedin[0])

// Array length will be one more than the last index
// console.log(linkedin.length)

// Array can contain any data type 
// let arr = [
//     "Nehal",
//     20,
//     true
// ]
// console.log(arr)

// adding and removing items in array 
// let message1 = [
//     "Hey,how are you!",
//     "How it's going",
//     "Working on portfolio"
// ]
// let newmessage = "Same here!"
// message1.push(newmessage)
// console.log(message1)
// let popped = message1.pop()
// console.log(popped)
// console.log(message1)


// Counting practices (loops)
// for(let count=10; count<21; count+=1){
//     console.log(count)
// }

// for(let count=10; count<101; count+=10){
//     console.log(count)
// }

// Array based loops
// let msgs = [
//     "hey",
//     "how are you",
//     "Hope you are doing well",
//     "Have a good day mate",
//     "Bye bye"
// ]
// for(let i = 0; i<msgs.length; i+=1){
//     console.log(msgs[i])
// }

// let prcards = [7,3,9]
// for(let i=0; i<prcards.length; i++){
//     console.log(prcards[i])
// }

// let demo = ["my","name","is","Nehal"]
// let greetingEl = document.getElementById("greeting-el")
// for (let i= 0; i<demo.length; i++){
//     greetingEl.textContent += demo[i] + " "
    
// }

// Returning values in functions 
// let firstplayer = 102
// let secondplayer = 100
// function total() {
//     let x = firstplayer+secondplayer
//     return x     
// }
// let totaltime = total()
// console.log(totaltime)


// random numbers math.random
// let randomnumber = Math.random()
// console.log(randomnumber)
// answer it is generatting values less than 1

// another example
// let randomnum = Math.random()*6
// console.log(randomnum)
//random number between 0 to 6 6 not included

// math .floor
// let floorednumber = Math.floor(3.45673)
// console.log(floorednumber)
// answer: ignores all the numbers after decimal


// Creating a dice with math.random and math.floor 
// let randomnumber = Math.floor(Math.random()*6)
// console.log(randomnumber)
// Output 0 1 2 3 4 5
// function rolldice(){
//     let dicenum = Math.floor(Math.random()*6)+1 // adding 1 to the result to exclude 0 and include 6
//     return dicenum
// }
// console.log(rolldice())


// practicing logical operators
// AND
// let hassolvedchallenge = false
// let hashintsleft = false

// function solution() {
//     console.log("Showing solution.....")
// }

// if (hassolvedchallenge===false && hashintsleft==false){
//     solution()
// }


// OR
// let likesDocumentaries = true
// let likeStartups = false
// function recommendMovie(){
//     console.log("Hey check out this new film we think you will like it")
// }
// if(likeStartups===true|| likesDocumentaries===true){
//     recommendMovie()
// }

// objects practice
// let castle={
//     name:"kings palace",
//     price : 190,
//     locations: ["Canada","Sudan","Maldives"],
//     loan:true
// }
// console.log(castle.locations)
// console.log(castle.loan)


// Project completed let's practice 

// objects practice
// let Nehal = {
//     name: "Nehal",
//     age: 20,
//     country:"Pakistan"
// }

// function logData(){
//     console.log(Nehal.name + " is " + Nehal.age + " years old and lives in " + Nehal.country)
// }

// logData()

// conditionals practice
// let age = 25
// if (age<6){
//     console.log("Free")
// } else if (age<18){
//     console.log("Child discount")
// } else if (age<27) {
//     console.log("Student Discount")
// } else if (age<67){
//     console.log("Full Price")
// } else if (age>66){
//     console.log("Senior citizen discount")
// }

// Practicing loop
// let largecountries = ["China","India","USA","Indonesia","Pakistan"]
// console.log("The 5 largest countries in the world are")
// for(let i = 0; i<largecountries.length; i++){
//     console.log("-" + largecountries[i])
// }

// Array methods
// let largecountries = ["Tuvalu","Indonesia","USA","India","Monaco"]
// // remove tuvalu and monaco and insert china and pakistan
// largecountries.shift()// shift removes the firrst item
// largecountries.unshift("China") // shift inserts items at starting
// largecountries.pop()
// largecountries.push("Pakistan")
// console.log(largecountries)


// Logical operators practice
// let dayofmonth = 13
// let weekday = "Friday"
// if (dayofmonth==13 && weekday=="Friday"){
//     console.log("😱")
// }


// Rock paper scissors
// let arr = ["Rock","Paper","Scissors"]
// function rand2(){
//     let randomindex = Math.floor(Math.random()*3)//0-2.9999 random number
//     return arr[randomindex]
// }
// console.log(rand2())


let fruits = ["🍎","🍊","🍎","🍎","🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

for(let i = 0; i<fruits.length;i++){
    if(fruits[i]=="🍎"){
        appleShelf.textContent+="🍎"
        
    } else if (fruits[i]=="🍊"){
        orangeShelf.textContent+="🍊"
        
    }
}
