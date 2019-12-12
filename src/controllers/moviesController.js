const moviesModel = require('../models/movies.model');

exports.getMovies = async (req, res) => {

	moviesModel.find({}, function (err, movies) {
		if (err) {
			res.json({
				status: 'failure',
				message: 'Cannot find users',
				error_message: err
			})
		} else {
			res.json({ status: 'success', message: movies });
		}
	});

}


exports.createMovies = async (req, res) => {
	const { title, synopsis, rating } = req.body;

	let movies = new moviesModel({
		title,
		synopsis,
		rating
	});

	movies.save(function (err) {
		if (err) {
			res.json({ status: 'failure', message: 'Unable to reserve movies', errorMessage: err })
		} else {
			res.json({ status: 'success', message: "Movies Saved Successfully." });
		}
	})

}