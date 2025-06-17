const request = require('supertest');
const app = require('../server');

describe('Trainer Routes', () => {
  it('should return all trainers', async () => {
    const res = await request(app).get('/api/trainers');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return 404 for invalid trainer ID', async () => {
    const res = await request(app).get('/api/trainers/invalid-id');
    expect(res.statusCode).toBe(500);
  });
});
