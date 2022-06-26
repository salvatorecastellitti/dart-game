const axios = require('axios')

URL = 'http://192.168.1.150/player1'
//URL2 in caso ci siano piu esp32 (più giocatori)

export function handleTaze(point){
    //if (turnoPlayer == true)
    //in questo modo anciamo a gestire a chi mandare la scossa
    let payload = ""
    console.log(point)
    switch(point){
        case "40":
            payload = {duration:1000, pause:1}
            break
        case "60":
            payload = {duration:2000, pause:4}
            break
        case "57":
            payload = {duration:2000, pause:3}
            break
        case "54":
            payload = {duration:1000, pause:1}
            break
        default:
            console.log("nothing to do")
    }

    if (payload != ""){
        console.log(payload)
        axios.post(URL,payload)
    }
}