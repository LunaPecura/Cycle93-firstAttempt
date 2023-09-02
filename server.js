
// Set port
const PORT = 3000;

// Imports
const express = require('express');
const app = express();

// Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Routes
app.get('/', (req, res) => {
	res.send('<h1>Hello World!</h1>');
});

// Obligatory 'Listening on…'
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});