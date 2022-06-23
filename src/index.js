import { points } from './handlePoint/points.js';
import { handleTaze } from './handleTaze/handleTaze.js';
const electron = require('electron')
const path = require('path')

var punteggio1 = 501
var punteggio2 = 501
var turnoPlayer = true
var contaFrecce1 = 0
var contaFrecce2 = 0

//definiamo la connessione alla websocketx  
const WebSocket = require('ws');
let socket = new WebSocket("ws://localhost:8081");

//definiamo le variabili id che saranno presenti nell'html
var score1 = document.getElementById('score1')
var score2 = document.getElementById('score2')
var pointDart = document.getElementById('pointDart')
var resetBtn = document.getElementById("resetBtn")
var vicotory = document.getElementById("victory")

score1.innerHTML = punteggio1
score2.innerHTML = punteggio2

socket.onmessage = showData;

for(var i=3;i>contaFrecce1;i--){     
    dartLeft1.innerHTML += `<img src="./assets/imgs/darts-svgrepo-com.svg"/>`
}

//gestisce il messaggio
function showData(result) {
    // result is a JSON string. Parse it:
    let input = JSON.stringify(result.data);
    input = input.replace("\"", "")
    input = input.replace("\\r", "")
    input = input.replace("\"", "")

    //handlePass Turn
    calcoloPunteggio(input)
    showLeftDart()
}

function calcoloPunteggio(placeHolderFreccia) {

    let puntoFreccia = points[placeHolderFreccia]
    //score2.innerHTML = `<div style="animation: shake 0.8s;">` + punteggio2 + `</div>`
    pointDart.innerHTML = `<div style="animation: scale 0.5s;">` + puntoFreccia + `</div>`
    handleTaze(puntoFreccia)
    if (turnoPlayer == true) {
        if (puntoFreccia > punteggio1) {
            turnoPlayer = !turnoPlayer
            contaFrecce1 = 0
            score1.innerHTML = `<div style="animation: shake 0.8s;">` + punteggio1 + `</div>`
        } else {
            contaFrecce1++
            punteggio1 = punteggio1 - puntoFreccia
            if (punteggio1 == 0){
                vicotory.innerHTML = `<h1 style="animation: scale 0.8s forwards;">` + 'VICTORY'+ `</h1>`
            }
            score1.innerHTML = punteggio1
            
        }

    } else {
        if (puntoFreccia > punteggio2) {
            turnoPlayer = !turnoPlayer
            contaFrecce2 = 0
            score2.innerHTML = `<div style="animation: shake 0.8s;">` + punteggio2 + `</div>`
        } else {
            contaFrecce2++
            punteggio2 = punteggio2 - puntoFreccia
            if (punteggio2 == 0){
                vicotory.innerHTML = `<h1 style="animation: scale 0.8s forwards;">` + 'VICTORY'+ `</h1>`
            }
            score2.innerHTML = punteggio2
        }

    }
    if (contaFrecce1 == 3) {
        turnoPlayer = !turnoPlayer
        contaFrecce1 = 0
        
    }else if (contaFrecce2 ==3){
        turnoPlayer = !turnoPlayer
        contaFrecce2 = 0
    }
}

function showLeftDart(){
    dartLeft1.innerHTML = ``
    dartLeft2.innerHTML = ``
    if(turnoPlayer == true){
        for(var i=3;i>contaFrecce1;i--){     
            dartLeft1.innerHTML += `<img src="./assets/imgs/darts-svgrepo-com.svg"/>`
        }
    }else{
        for(var i=3;i>contaFrecce2;i--){     
            dartLeft2.innerHTML += `<img src="./assets/imgs/darts-svgrepo-com.svg"/>`
        }
    }
}

resetBtn.addEventListener("click", function() {
    punteggio1 = 501
    punteggio2 = 501
    turnoPlayer = true
    contaFrecce1 = 0
    contaFrecce2 = 0

    dartLeft1.innerHTML = ""
    for(var i=3;i>contaFrecce1;i--){     
        dartLeft1.innerHTML += `<img src="./assets/imgs/darts-svgrepo-com.svg"/>`
    }

    dartLeft2.innerHTML = ""
    score1.innerHTML = punteggio1

    pointDart.innerHTML = ""
    score2.innerHTML = punteggio2

    vicotory.innerHTML = ""

}, false);

