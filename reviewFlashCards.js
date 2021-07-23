let cards = new Array();
let currentCard = 0;
let showFrontOfCard = true;

const init = () => {
        getCards();
        updateUI();
        document.getElementById('btnNext').addEventListener('click', displayNextCard);
        document.getElementById('btnFlip').addEventListener('click', flipCard);
        console.log("init currentCard: ", currentCard);
}

const updateUI = () => {
        console.log("updateUI currentCard: ", currentCard);
        document.getElementById('backOfCard').style.display = "none";
        document.getElementById('frontOfCard').style.display = "block";
        document.getElementById('frontOfCard').innerHTML = cards[currentCard].front
        document.getElementById('backOfCard').innerHTML = cards[currentCard].back;
        document.getElementById('cardNumber').innerHTML = currentCard + 1;
        if (currentCard < (cards.length - 1)) {
                currentCard++;
        } else {
                currentCard = 0;
        }
}

const getCards = () => {
        try {
                let jsonCards = localStorage.getItem('cards');
                cards = JSON.parse(jsonCards);
                console.log("reviewFlashCards cards: ", cards);
                document.getElementById('numOfCards').innerHTML = cards.length;
        } catch (error) {
                console.log("error @getCards(): ", error.message);
        }
}

const displayNextCard = () => {
        updateUI();
}

const flipCard = () => {
        if (showFrontOfCard) {
                document.getElementById('backOfCard').style.display = "block";
                document.getElementById('frontOfCard').style.display = "none";
                showFrontOfCard = !showFrontOfCard;
        } else {
                document.getElementById('backOfCard').style.display = "none";
                document.getElementById('frontOfCard').style.display = "block";
                showFrontOfCard = !showFrontOfCard;
        }
}

init();