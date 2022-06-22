const axios = require('axios')

URL = 'http://192.168.1.150/player1'
let payload = ""
export function handleTaze(point){
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
        await axios.post(URL,payload)
    }
}