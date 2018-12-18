const express = require('express');
const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser');

var app = express();

var data;

var options = {
    key: fs.readFileSync('certs/server.key'),
    cert: fs.readFileSync('certs/server.crt')
}

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/webhooks', (req, res) => {
    console.log('*************');
    console.log('POST /webhooks');
    data= req.body;
    console.dir(data);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Ok');
});

app.get('/webhooks', (req, res) => {
    console.log('*************');
    console.log('GET /webhooks');
    res.json(data);    
})

const port=process.env.PORT || 8443;

https.createServer(options, app).listen(port, () => {
  console.log('Webhooks app listening on port ' + port)
})