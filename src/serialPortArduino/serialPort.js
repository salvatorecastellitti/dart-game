// /dev/tty.usbmodem21301
var SerialPort = require('serialport'); // include the serialport library
var WebSocketServer = require('ws').Server;

var portName =  '/dev/tty.usbmodem21301'; // get the port name from the command line
var myPort = new SerialPort(portName, 9600);// open the port

const SERVER_PORT = 8081;
let wss = new WebSocketServer({port: SERVER_PORT});
let connections = new Array;

let Readline = SerialPort.parsers.Readline; // make instance of Readline parser
let parser = new Readline(); // make a new parser to read ASCII lines
myPort.pipe(parser); // pipe the serial stream to the parser

// these are the definitions for the serial events:    // called when the serial port opens
myPort.on('open', showPortOpen);
parser.on('data', readSerialData);
myPort.on('close', showPortClose);
myPort.on('error', showError);

function showPortOpen() {
    console.log('port open. Data rate: ' + myPort.baudRate);
  }
   
  function readSerialData(data) {
    console.log(data);
  }
   
  function showPortClose() {
    console.log('port closed.');
  }
   
  function showError(error) {
    console.log('Serial port error: ' + error);
  }
