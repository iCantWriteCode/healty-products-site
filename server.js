// Simple server for servis SPA applications
const express = require('express');
const app = express();
var path = require('path');

// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, ''));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(9000, function() {
	console.log('Server listening on port 9000!');
});
