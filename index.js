const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var data;

app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.use(bodyParser.json());

app.get('/webhooks', (req,res) => {
    
    console.log('*************');
    console.log('GET /webhooks');
    res.json(data);  
});

app.post('/webhooks', (req,res) => {
    console.log('*************');
    console.log('POST /webhooks');
    data= req.body;
    console.dir(data);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Ok');
});

const port=process.env.PORT || 80;

app.listen(port, () => {
    console.log('Webhooks app listening on port ' + port)
});

