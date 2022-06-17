const electron = require('electron')
const path = require('path')

//definiamo la connessione alla websocket
const WebSocket = require('ws');
let socket = new WebSocket("ws://localhost:8081");

//definiamo le variabili id che saranno presenti nell'html
var score1 = document.querySelector('p')
var score2 = document.querySelector('p')

//socket.onmessage, ogni qual volta riceve un messagio esegue una funzione, in questo caso show data
socket.onmessage = showData;

//gestisce il messaggio
function showData(result) {
  // result is a JSON string. Parse it:
  let input = JSON.stringify(result.data);
  dataPars=input
  score1.innerHTML = input
  console.log(input)
  
}


