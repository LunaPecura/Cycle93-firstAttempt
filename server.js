

// Set port
const PORT = 3000;

// Load & instantiate express
const express = require('express');
const app = express();

require('dotenv').config();
const mongoose = require('mongoose');
const Data = require('./models/data.js');
const User = require('./models/user.js');
const methodOverride = require('method-override')


// Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))
app.use((req, res, next) => { /* console.log(''); */ next(); });

// Connect to Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => { console.log("Connected to mongo"); });



// === Routes ==========================================================

// Main route
app.get('/', (req, res) => { res.send("<h1>Main</h1>"); })

// Index route 
app.get('/data', async (req, res) => {
	Data.find({}).then( allData => {
		res.render('Index', { data: allData });
	});
});

// Index route USER
app.get('/users', async (req, res) => {
	User.find({}).then( allData => {
		res.render('UserIndex', { data: allData });
	});
});

// Post route
app.post('/data', async (req, res) => {
	req.body.attr1 = req.body.attr1 === 'on';
	Data.create(req.body).then( newData => {
		res.send(newData);
		// res.redirect('/data');
	})
});

// Post route USER
app.post('/users', async (req, res) => {
	// req.body.attr1 = req.body.attr1 === 'on';
	User.create(req.body).then( newData => {
		res.send(newData);
		// res.redirect('/data');
	})
});

// Create route
app.get('/data/new', (req, res) => { res.render('New'); });

// Create route USER
app.get('/users/new', (req, res) => { res.render('UserNew'); });

// Delete route
app.delete('/data/:index', async (req, res) => {
	await Data.findByIdAndRemove(req.params.index)
	res.redirect('/data')
});

// Delete route USER
app.delete('/users/:index', async (req, res) => {
	await User.findByIdAndRemove(req.params.index)
	res.redirect('/users')
});

// Update route
app.put('/data/:index', async (req, res) => {
	req.body.attr1 = req.body.attr1 === 'on';
	await Data.findByIdAndUpdate(req.params.index, req.body);
	res.redirect(`/data/${req.params.index}`);
});

// Update route USER
app.put('/users/:index', async (req, res) => {
	// req.body.attr1 = req.body.attr1 === 'on';
	await User.findByIdAndUpdate(req.params.index, req.body);
	res.redirect(`/users/${req.params.index}`);
});

// Edit route
app.get('/data/:index/edit', async (req, res) => {
	const foundItem =  await Data.findById(req.params.index) 
	res.render('Edit', {item: foundItem})
})

// Edit route USER
app.get('/users/:index/edit', async (req, res) => {
	const foundItem =  await User.findById(req.params.index) 
	res.render('UserEdit', {item: foundItem})
})

// Show route 
app.get("/data/:index", async (req, res) => {
	const foundItem = await Data.findById(req.params.index);
	res.render('Show', {item: foundItem})
});

// Show route USER
app.get("/users/:index", async (req, res) => {
	const foundItem = await User.findById(req.params.index);
	res.render('UserShow', {item: foundItem})
});




app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})