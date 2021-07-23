let cards = new Array();


const clearUI = () => {
        document.getElementById('frontOfCard').value = '';
        document.getElementById('backOfCard').value = '';
}

const numOfCards = () => {
        document.getElementById('numOfCards').innerHTML = cards.length;
}

const storeCards = () => {
        try {
                localStorage.setItem('cards', JSON.stringify(cards));
                console.log("storeCards() cards: ", cards);
                
        } catch (error) {
                console.log("error @storeCards(): ", error.message);
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


const saveCard = (e) => {
        e.preventDefault();
        let frontContent = document.getElementById('frontOfCard').value;
        let backContent = document.getElementById('backOfCard').value;
        let flashCard = {front: frontContent, back: backContent};
        cards.push(flashCard);
        console.log(cards);
        clearUI();
        numOfCards();
        storeCards();
}

window.onload = () => {
        getCards();
}

document.getElementById('btnSave').addEventListener('click', saveCard);





