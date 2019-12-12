const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	synopsis: {
		type: String,
		required: true
	},
	rating: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Movies', moviesSchema)

