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
                if (localStorage.getItem('cards')){
                        cards = JSON.parse(localStorage.getItem('cards'));
                        console.log("reviewFlashCards cards: ", cards);
                        document.getElementById('numOfCards').innerHTML = cards.length;
                }
        } catch (error) {
                console.log("error @getCards(): ", error.message);
        }
}


const saveCard = (e) => {
        e.preventDefault();
        cards.push({front: document.getElementById('frontOfCard').value, back: document.getElementById('backOfCard').value})
        console.log(cards);
        clearUI();
        numOfCards();
        storeCards();
}

window.onload = () => {
        getCards();
}

document.getElementById('btnSave').addEventListener('click', saveCard);





