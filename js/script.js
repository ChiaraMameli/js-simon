// Variabili di partenza
const display = document.getElementById('numbers-box');
const result = document.getElementById('result');
let numbers = [];
let playerNumbers = [];

// Produco 5 numeri casuali
const produceUniqueNumbers = (min, max, array) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if(!(array.includes(randomNumber))) {
        array.push(randomNumber)  
    } else {    
       randomNumber
    }
}

// Stampo 5 numeri in
for (let i = 0; i < 5; i++) {
    produceUniqueNumbers(1, 30, numbers);
}
display.innerText = numbers;

// Funzione per chiedere all'utente di inserire i numeri con propmt
const askingPlayer = () => {
for (let i = 0; i < 5; i++) {
    let playerNumber = prompt('Inserisci qui il numero');
    if(numbers.includes(parseInt(playerNumber))) playerNumbers.push(playerNumber)
}}

// Faccio partire i prompt dopo 30 secondi dall'avvio della pagina
const time = setTimeout(askingPlayer, 10000);
time;
console.log(numbers, playerNumbers);