var express = require('express');
var app = express();
var routes = require('./server/routes.js');
var port = 5000;
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/2wayview-api', {useNewUrlParser:true});
var db = mongoose.connection;

db.once("open", function() {
  console.log('connected');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', routes);

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './client/public', 'index.html'));
});

app.listen(port, function() {
  console.log('Started server on the port :'  + port);
});
