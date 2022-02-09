

let colors = ["Hearts","Spades","Diamonds","Clubs"]


let cardsEl = document.getElementById("Cards-el")
let sumEl = document.getElementById("Sum-el")
let dealearCardsEl =document.getElementById("Dealer-Cards-el") 
let dealerSumEl = document.getElementById("Dealer-Sum-el")
let messageEl = document.getElementById("Message-el")
let message = ""

let playerStand = false
let isAlive = false
let hasBlackJack = false

function startGame() {
    renderGame()
}

function renderGame() {  
    //loop
    for ( let i = 0; i < mapArray.length; i++) {
        cardsEl.textContent += mapArray[i] + " "
    }
    for ( let i = 0; i < dealerMapArray.length; i++) {
        dealearCardsEl.textContent += dealerMapArray[i] + " "
    }
   
    if (playerStand === false) {
        
    if (playerSum <= 20) {
            isAlive = true
            hasBlackJack = false
            message = "draw a new card"
        } if (playerSum === 21) {
            isAlive = true
            hasBlackJack = true
            message = "YOU WIN!!!"
            if (setTimeout(function() {
                
                (confirm("Another one?!")); {
                location.reload() }
        
        }, 1000));
        } if (playerSum > 21) { 
            isAlive = false
            hasBlackJack = false
            message = "better luck next time..."
            if (setTimeout(function() {
                
                    (confirm("Play again?")); {
                    location.reload() }
            
            }, 1000));       
        } 
    } if (playerStand === true) {
        
        if (dealerSum > 21) {
            message = "Dealer busted! Congradulations!!!"
            if (setTimeout(function() {
                
                (confirm("Another one?!")); {
                location.reload() }
        
        }, 1000));       
        } if (dealerSum > playerSum && dealerSum <= 21) {
            message = "You lost to dealer..."
            if (setTimeout(function() {
                
                (confirm("You'll get it next time..")); {
                location.reload() }
        
        }, 1000));       
        } if (dealerSum < playerSum && playerSum <= 21) {
            message = "YOU WIN!!!"
            if (setTimeout(function() {
                
                (confirm("Another one?!")); {
                location.reload() }
        
        }, 1000));       
        }
    }


    messageEl.textContent = message
    cardsEl.textContent = mapArray
    sumEl.textContent = "player Sum: " + playerSum
    
    dealearCardsEl.textContent = dealerMapArray
    dealerSumEl.textContent = "Dealer Sum: " + dealerSum

}

function getColor() {
    
    let colorNumber = Math.floor(Math.random()*4)

      if (colorNumber === 0) {
        return colors[0]
    } if (colorNumber === 1) {
        return colors[1]
    } if (colorNumber === 2) {
        return colors[2]
    } if (colorNumber === 3) {
        return colors[3]
    }
}

function getName() {
    let cardNumber = Math.floor(Math.random()*13)+1   
    
    if (cardNumber > 1 && cardNumber < 11) {
        return cardNumber
    } if (cardNumber === 1) {
        let cardNumber = "Ace"
        return cardNumber
    } if (cardNumber === 11) {
        let cardNumber = "Jack"
        return cardNumber
    } if (cardNumber === 12) {
        let cardNumber = "Queen"
        return cardNumber
    } if (cardNumber === 13) {
        let cardNumber = "King"
        return cardNumber
    } 
}

class Card {
    
    constructor (_name, _color,_value) {
        this.name = _name
        this.color = _color
        if (this.name === "Ace") {
            this.value = 11
            return this.value 
        } else if (this.name === "King") {
            this.value = 10
            return this.value
        } else if (this.name === "Queen") {
            this.value = 10
            return this.value
        } else if (this.name === "Jack") {
            this.value = 10
            return this.value
        } else {
            this.value = this.name
            return this.value
        }
    }
    nameAndColor() {
       return  " " + this.name + " of " + this.color 
    }
} 

//player cards
let card1 = new Card (getName(),getColor())
let card2 = new Card (getName(),getColor())
let cardArray = [card1, card2]
let mapArray = cardArray.map( x => x.nameAndColor())  
let playerSum = card1.value + card2.value
//dealer cards
let dealerCard1 = new Card (getName(),getColor())
//let dealerCard2 = new Card (getName(),getColor())
let dealerCardArray = [dealerCard1] //dealerCard2]
let dealerMapArray = dealerCardArray.map( x => x.nameAndColor())
let dealerSum = dealerCard1.value//+ dealerCard2.value



//     function getNewCard() {
//     let newNewCard = new Card (getName(),getColor())
//     playerSum += newNewCard.value
//     let newFullCard = newNewCard.nameAndColor()
//     mapArray.push(newFullCard)
//     renderGame()
// }

function hit() {
    let newNewCard = new Card (getName(),getColor())
    playerSum += newNewCard.value
    let newFullCard = newNewCard.nameAndColor()
    mapArray.push(newFullCard)
    renderGame()
}

function stand() {
    while (dealerSum < 17) {
        playerStand = true
        let newNewCard = new Card (getName(),getColor())
        dealerSum += newNewCard.value
        let newFullCard = newNewCard.nameAndColor()
        dealerMapArray.push(newFullCard)
        renderGame() 
    }
}


// stand should be automatic
// if dealer sum < 16 it should draw continuesly
// when dealer sum > 17 game pauses
// if after the pause dealer sum > player sum dealer wins and vise versa
// 




// if (dealerSum > 21) {
//     isAlive = true
//     hasBlackJack = true
//     message = "dealer bust!"
// } else if (dealerSum > playerSum) {
//     isAlive = false
//     hasBlackJack = false
//     message = "you lost to dealer!"
// } else if (dealerSum < playerSum && playerSum <= 21) {
//     isAlive = true
//     hasBlackJack = true
//     message = "YOU WON!!!"
// }











