let text;       // variable for the text div you'll create
const WebSocket = require('ws');
let socket = new WebSocket("ws://localhost:8081");
 
let dataPars = "weasdsadas"
socket.onmessage = showData;
function showData(result) {
  // result is a JSON string. Parse it:
  let input = JSON.stringify(result.data);
  dataPars=input
  console.log(input)
  
}

function myFunc(){
  document.body.innerHTML = "<h1>" + "sdadasds" + "</h1>"
}

document.body.innerHTML = "<h1>" + "sdadasds" + "</h1>"

/*
function setup() {
    // The socket connection needs two event listeners:
    socket.onopen = openSocket;
    socket.onmessage = showData;
   
    // make a new div and position it at 10, 10:
    text = createDiv("Sensor reading:");
    text.position(10,10);
  }
   
  function draw() {
  }

  function openSocket() {
    text.html("Socket open");
    socket.send("Hello server");
  }
   
  function showData(result) {
    // result is a JSON string. Parse it:
    let input = JSON.parse(result.data);
    console.log(result)

    console.log(input)
    // when the server returns, show the result in the div:
    //text.html("Sensor reading:" + input);
  }*/