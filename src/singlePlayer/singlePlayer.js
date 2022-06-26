import { points } from '../handlePoint/points.js';
import { handleTaze } from '../handleTaze/handleTaze.js';
const electron = require('electron')
const path = require('path')

var punteggio1 = 501
var contaFrecce1 = 0

const WebSocket = require('ws');
let socket = new WebSocket("ws://localhost:8081");

var score1 = document.getElementById('score1')
var pointDart = document.getElementById('pointDart')
var resetBtn = document.getElementById("resetBtn")
var passBtn = document.getElementById("passBtn")
var vicotory = document.getElementById("victory")

score1.innerHTML = punteggio1

socket.onmessage = showData;

for(var i=3;i>contaFrecce1;i--){     
    dartLeft1.innerHTML += `<img src="../assets/imgs/darts-svgrepo-com.svg"/>`
}

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
    pointDart.innerHTML = `<div style="animation: scale 0.5s;">` + puntoFreccia + `</div>`
    handleTaze(puntoFreccia)
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
}

function showLeftDart(){
    for(var i=3;i>contaFrecce1;i--){     
        dartLeft1.innerHTML += `<img src="../assets/imgs/darts-svgrepo-com.svg"/>`
    }
}

resetBtn.addEventListener("click", function() {
    punteggio1 = 501
    contaFrecce1 = 0

    dartLeft1.innerHTML = ""
    for(var i=3;i>contaFrecce1;i--){     
        dartLeft1.innerHTML += `<img src="../assets/imgs/darts-svgrepo-com.svg"/>`
    }

    score1.innerHTML = punteggio1

    pointDart.innerHTML = ""

    vicotory.innerHTML = ""

}, false);
