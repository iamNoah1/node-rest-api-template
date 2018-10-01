var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes.js');
app.use('/', routes);

var port = process.env.PORT || 3000

app.listen(port);
console.log('server started on port ' + port);