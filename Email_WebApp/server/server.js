const express = require('express')
const app = express(); 



app.get('/', function(req, res){
    res.send({hi: 'there'})
})

const PORT = process.env.PORT  || 3000; 
app.listen(PORT)
console.log('Listening to port 3000')

