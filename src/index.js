import { points } from './handlePoint/points.js';
const electron = require('electron')
const path = require('path')
var punteggio1 = 501
var punteggio2 = 501
var turnoPlayer = true
var contaFrecce = 0


//definiamo la connessione alla websocket
const WebSocket = require('ws');
let socket = new WebSocket("ws://localhost:8081");

//definiamo le variabili id che saranno presenti nell'html
var score1 = document.getElementById('score1')
var score2 = document.getElementById('score2')
var dartLeft1 = document.getElementById('dartLeft1')
var dartLeft2 = document.getElementById('dartLeft2')

score1.innerHTML = punteggio1
score2.innerHTML = punteggio2
dartLeft1.innerHTML = 3
dartLeft2.innerHTML = 3
//socket.onmessage, ogni qual volta riceve un messagio esegue una funzione, in questo caso show data
socket.onmessage = showData;

//gestisce il messaggio
function showData(result) {
    // result is a JSON string. Parse it:
    let input = JSON.stringify(result.data);
    input = input.replace("\"", "")
    input = input.replace("\\r", "")
    input = input.replace("\"", "")


    calcoloPunteggio(input)
}

function calcoloPunteggio(placeHolderFreccia) {

    let puntoFreccia = points[placeHolderFreccia]
    contaFrecce++
    if (turnoPlayer == true) {
        if (puntoFreccia > punteggio1) {
            turnoPlayer = !turnoPlayer
            contaFrecce = 0
        } else {
            punteggio1 = punteggio1 - puntoFreccia
            score1.innerHTML = punteggio1
            dartLeft1.innerHTML = 3-contaFrecce
        }

    } else {
        if (puntoFreccia > punteggio2) {
            turnoPlayer = !turnoPlayer
            contaFrecce = 0
        } else {
            punteggio2 = punteggio2 - puntoFreccia
            score2.innerHTML = punteggio2
            dartLeft2.innerHTML = 3-contaFrecce
        }

    }
    if (contaFrecce == 3) {
        turnoPlayer = !turnoPlayer
        contaFrecce = 0

    }
}




