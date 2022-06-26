# dart-tazer-game

<img src="/src/assets/imgs/dartboard.svg" width="300" height="300">

Ciao a tutti.

Qui potete trovare il progetto dell'App Dart game, usata nel video: per gestire il punteggio e mandare la scossa.

Utilizzo:
1. Clonare il progetto
2. Collegare Arduino (tabellone freccette) al computer, diregerci nella cartella `cd src/serialPortArduino` ,lanciare lo script: `node listPort.js` . (eventualmenete fare un `npm rebuild`) per avere tutte le porte attive sul computer.
3. Dopo aver individuato la porta dell'arduino, inserirla all'interno del file src/serialPortArduino/serialPort.js alla riga 5 var portName =  'XXXXXXXXX'; e avviare con `node serialPort.js`
4. Tornare alla cartella principale e avviare l'app con `npm start` .
5. Divertitevi

Questo progetto è in evoluzione, ogni tanto controllate il mio canale [YouTube](https://www.youtube.com/channel/UCOaquYtO5UImU6pLkqvs-Mw).

Grazie
