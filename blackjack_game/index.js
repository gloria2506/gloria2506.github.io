

//BLACKJACKKKK
//PLAYER (Objects)
let player = {
    name: "Wayne", 
    chips: 150
}
let cards = [] 
let sumCards  = 0
let hasBlackJack = true
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el") //add # to tell them the exact id we are getting
let cardsEL = document.getElementById("cards-el")
let playerEL = document.getElementById("player-el")

//Player name and chips
playerEL.textContent = player.name + ": $" + player.chips //use key(.chips/.name) to bring the specific objects out

//get random card

function getRandomCard(){ 
    let randomNumber = Math.floor(Math.random () * 13) + 1
    if (randomNumber > 10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] //array- ordered list
    sumCards  = firstCard + secondCard
     
     
    renderGame()
}

function renderGame(){
    
    cardsEL.textContent = "Cards: "
    //render all cards
    for (let i = 0; i < cards.length; i++){
        cardsEL.textContent += cards[i] + ","
    }

    sumEl.textContent = "Sum: "  + sumCards
    if (sumCards <= 20){
        message = "Do you want to draw a new card?"
    } 
    else if(sumCards === 21){
        message = "You have got BlackJack!"
        hasBlackJack = true
    }
    else {
        message = "You are out of the game"
        isAlive = false
    }
    
    messageEl.textContent = message //make the dealer talk 
}

//Get new cards with conditions

function newCard(){

if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sumCards += card
    cards.push(card)
    console.log(cards);
    renderGame()
    
}    
}


