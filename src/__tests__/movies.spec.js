const supertest = require('supertest');
const Movies = require('../models/movies.model');
const app = require('../server');

describe("Testing the movies API", () => {

	// Testing the Base endpoint
	it("tests the base route and returns true for status", async () => {

		const response = await supertest(app).get('/');

		expect(response.status).toBe(200);
		expect(response.body.status).toBe(true);

	});

	// Testing the GET /movies endpoint
	it("tests the get movies endpoint and have message property", async () => {

		const response = await supertest(app).get('/movies');

		expect(response.status).toBe(200);
		expect(response.body.status).toBe('success');
		expect(response.body).toHaveProperty('message');

	});


	// Testing the POST /movies endpoint
	it("tests the post new movies endpoint and returns as success message", async () => {

		const response = await supertest(app).post('/movies').send({
			title: 'New Movie',
			synopsis: 'Synopsis of the new movie',
			rating: 'PG'
		});

		expect(response.status).toBe(200);
		expect(response.body.status).toBe('success');
		expect(response.body.message).toBe('Movies Saved Successfully.');

	});

	// This is run after 
	afterEach(async () => {
		await Movies.deleteOne({
			title: 'New Movie'
		})
	})

});