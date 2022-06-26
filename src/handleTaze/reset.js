const axios = require('axios')

URL = 'http://192.168.1.150/player1'
let payload = {duration:1000, pause:1}
axios.post(URL,payload)