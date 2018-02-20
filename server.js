// Simple server for servis SPA applications
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();


// Morgan middleware
app.use(morgan('dev'));

// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, ''));
app.set('view engine', 'ejs');

app.use(require('prerender-node').set('prerenderServiceUrl', 'http://localhost:3000'));
app.get('/*', (req, res) => {
	res.render('index');
});

app.listen(9000, function() {
	console.log('Server listening on port 9000!');
});
