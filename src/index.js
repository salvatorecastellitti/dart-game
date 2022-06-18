import { points } from './handlePoint/points.js';
const electron = require('electron')
const path = require('path')
var punteggio1 = 501
var punteggio2 = 501
var turnoPlayer = true
var contaFrecce1 = 0
var contaFrecce2 = 0
var remainingDart1 = 0
var remainingDart2 = 0



//definiamo la connessione alla websocketx  
const WebSocket = require('ws');
let socket = new WebSocket("ws://localhost:8081");

//definiamo le variabili id che saranno presenti nell'html
var score1 = document.getElementById('score1')
var score2 = document.getElementById('score2')
//var dartLeft1 = document.getElementById('dartLeft1')
//var dartLeft2 = document.getElementById('dartLeft2')

score1.innerHTML = punteggio1
score2.innerHTML = punteggio2
//dartLeft1.innerHTML = 3
//dartLeft2.innerHTML = 3
//socket.onmessage, ogni qual volta riceve un messagio esegue una funzione, in questo caso show data
socket.onmessage = showData;
//dartLeft.innerHTML += `<img src="./assets/imgs/darts-svgrepo-com.svg"/>` + `<img src="./assets/imgs/darts-svgrepo-com.svg"/>`
for(var i=3;i>contaFrecce1;i--){
    dartLeft1.innerHTML += `<img src="./assets/imgs/darts-svgrepo-com.svg"/>`
}
for(var i=3;i>contaFrecce2;i--){
    dartLeft2.innerHTML += `<img src="./assets/imgs/darts-svgrepo-com.svg"/>`
}
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
    if (turnoPlayer == true) {
        if (puntoFreccia > punteggio1) {
            turnoPlayer = !turnoPlayer
            contaFrecce1 = 0
        } else {
            contaFrecce1++
            punteggio1 = punteggio1 - puntoFreccia
            score1.innerHTML = punteggio1
            dartLeft1.innerHTML = ``
            for(var i=3;i>contaFrecce1;i--){
                
                dartLeft1.innerHTML += `<img src="./assets/imgs/darts-svgrepo-com.svg"/>`
            }
            
        }

    } else {
        if (puntoFreccia > punteggio2) {
            turnoPlayer = !turnoPlayer
            contaFrecce2 = 0
        } else {
            contaFrecce2++
            punteggio2 = punteggio2 - puntoFreccia
            score2.innerHTML = punteggio2
            dartLeft2.innerHTML = ``
            for(var i=3;i>contaFrecce2;i--){
                
                dartLeft2.innerHTML += `<img src="./assets/imgs/darts-svgrepo-com.svg"/>`
            }
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




