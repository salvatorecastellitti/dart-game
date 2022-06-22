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

    calcoloPunteggio(input)
    showLeftDart()
}

function calcoloPunteggio(placeHolderFreccia) {

    let puntoFreccia = points[placeHolderFreccia]
    pointDart.innerHTML = puntoFreccia
    handleTaze(puntoFreccia)
    if (turnoPlayer == true) {
        if (puntoFreccia > punteggio1) {
            turnoPlayer = !turnoPlayer
            contaFrecce1 = 0
            score1.innerHTML = `<div style="animation: shake 0.5s;">` + punteggio1 + `</div>`
        } else {
            contaFrecce1++
            punteggio1 = punteggio1 - puntoFreccia
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



