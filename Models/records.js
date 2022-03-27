const mongoose = require('mongoose');


const recordSchema = new mongoose.Schema({
	key: String,
	value: String,
	counts: [],
	createdAt: Date
})

module.exports = mongoose.model('records', recordSchema);