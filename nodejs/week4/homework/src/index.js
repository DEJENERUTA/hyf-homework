require('dotenv').config();
const express = require("express");
const localtunnel = require('localtunnel')
const app = express();

const domainName = process.env.domain;
console.log(domainName)

//app.get("/", (req, res) => res.send("Hello World!"));

app.get("/check", (req, res) => res.send("ok!"));

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}!`)
    console.log(`The subdomain is ${process.env.SUBDOMAIN}`);

    localtunnel(process.env.PORT, { subdomain: process.env.SUBDOMAIN }, (err, tunnel) => {
        if (!err)
          console.log('Tunnel is open');
        else
          console.log('Error opening tunnel: ', err);
        
        tunnel.on('close', function() {
            // When the tunnel is closed
            console.log('Tunnel is closed');
        });
        });
      
});