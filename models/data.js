/* const data = [
	{ name: 'Item0', id: 0, attr1: false }, 
	{ name: 'Item1', id: 1, attr1: false }, 
	{ name: 'Item2', id: 2, attr1: true }, 
	{ name: 'Item3', id: 3, attr1: false }
]

module.exports = data; */



const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name:	{ type: String, required: true },
    id: 	{ type: Number, required: true },
    attr1:	{ type: Boolean, required: false }
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;