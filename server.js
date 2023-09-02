
// Set port
const PORT = 3000;

// Imports
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/user');

// Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:true}));


// Connect to Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => { console.log('connected to mongo'); });




// Routes
app.get('/', (req, res) => {res.send('<h1>Hello World!</h1>');});

// Index route
app.get('/users', async (req, res) => {
	User.find({}).then( allData => {
		res.render('Index', { data: allData });
	});
})

// New User route
app.post('/users/', async (req, res) => {
    User.create(req.body).then( newUser => {
        res.send(newUser);
		res.redirect('/users');
    });
});


// Create route
app.get('/users/new', (req, res) => { 
	res.render('New'); 
	// res.redirect('/users/')
});


// Show route 
app.get("/users/:id", async (req, res) => {
	const foundUser = await Data.findById(req.params.id);
	res.render('Show', {item: foundUser})
});



// Obligatory 'Listening on…'
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});