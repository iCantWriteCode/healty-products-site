// Simple server for servis SPA applications
const express = require('express');
const path = require('path');

const app = express();

// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, ''));
app.set('view engine', 'ejs');

app.use(()=>{
	console.log("mpika")
	require('prerender-node').set('prerenderToken', '1chV2LTbzMvt1S0zuo6y')
});

app.get('/*', (req, res) => {
	res.render('index');
});

app.listen(9000, function() {
	console.log('Server listening on port 9000!');
});
