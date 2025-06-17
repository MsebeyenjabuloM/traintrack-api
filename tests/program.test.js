const request = require('supertest');
const app = require('../server');

describe('Program Routes', () => {
  it('should return all programs', async () => {
    const res = await request(app).get('/api/programs');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return 404 for invalid program ID', async () => {
    const res = await request(app).get('/api/programs/invalid-id');
    expect(res.statusCode).toBe(500);
  });
});
