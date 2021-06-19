document.addEventListener("DOMContentLoaded", () => {

    const cardArray = [
        {
            name: "cheeseburger",
            img: "src/images/cheeseburger.png"
        },
        {
            name: "fries",
            img: "src/images/fries.png"
        },
        {
            name: "hotdog",
            img: "src/images/hotdog.png"
        },
        {
            name: "ice-cream",
            img: "src/images/ice-cream.png"
        },
        {
            name: "milkshake",
            img: "src/images/milkshake.png"
        },
        {
            name: "pizza",
            img: "src/images/pizza.png"
        },
        {
            name: "cheeseburger",
            img: "src/images/cheeseburger.png"
        },
        {
            name: "fries",
            img: "src/images/fries.png"
        },
        {
            name: "hotdog",
            img: "src/images/hotdog.png"
        },
        {
            name: "ice-cream",
            img: "src/images/ice-cream.png"
        },
        {
            name: "milkshake",
            img: "src/images/milkshake.png"
        },
        {
            name: "pizza",
            img: "src/images/pizza.png"
        }
    
    ]


    //  console.log(cardarray)

        const grid = document.querySelector(".grid")
        
    function createGrid() {
        for (i=0; i < cardArray.length; i++){
            const card = document.createElement("img")
            card.setAttribute("src", "src/images/blank.png")
            card.setAttribute("data-id", i)
            card.addEventListener("click", flipCard)
            grid.appendChild(card)
        }
    }

    const cardsChosen =[]
    function flipCard() {
        let cardSelected = this.getAttribute("data-id")
        this.setAttribute("src", cardArray[cardSelected].img)
        // console.log(cardArray[cardSelected])
        cardsChosen.push(cardSelected)
        // console.log(cardsChosen)

        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }
    const cardsWon =[]
    function checkForMatch() {
        let cards =  document.querySelectorAll("img")
       
        if (cardsChosen[0].img === cardsChosen[1].img) {
            alert("You Have Found A Match!")
            cards[cardsChosen[0]].setAttribute("src", "src/images/white.png")
            cards[cardsChosen[1]].setAttribute("src", "src/images/white.png")
            cards[cardsChosen[0]].removeEventListener("click", flipCard)
            cards[cardsChosen[1]].removeEventListener("click", flipCard)
            cardsWon.push(cards[cardsChosen[0]].img)
            console.log(cardsWon)
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert("The Same Card, Please Choose Again!")
            cardsChosen[0].setAttribute("src", "src/images/blank.png")
        }
    }
    createGrid()

})