const request = require('supertest')
const app = require('../app');
const mongoose = require('mongoose');

afterAll(async () => {
    // Closing the DB connection allows Jest to exit successfully.
    await mongoose.connection.close()
}, 10000)

describe('Test Endpoints', () => {
    it('should return status code 200', async () => {
        const res = await request(app)
            .get('/')
        expect(res.statusCode).toEqual(200)
        // expect(res.body).toHaveProperty('post')
    })
    it('should return some value', async () => {
        const res = await request(app).post('/filter_records')
            .send({
                "startDate": "2016-01-26",
                "endDate": "2018-02-02",
                "minCount": 2700,
                "maxCount": 3000
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body.code).toEqual(0)
        expect(res.body.records).toBeDefined()
    }, 60000)
    it('should return status code 500', async () => {
        const res = await request(app).post('/');
        expect(res.statusCode).toEqual(500);
    })
    it('should return code as 1', async () => {
        const res = await request(app).post('/filter_records')
        expect(res.statusCode).toEqual(200)
        expect(res.body.code).toEqual(1);
    })
})