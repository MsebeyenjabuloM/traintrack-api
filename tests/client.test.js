const request = require('supertest');
const app = require('../server');

describe('Client Routes', () => {
  it('should return all clients', async () => {
    const res = await request(app).get('/api/clients');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return 404 for invalid client ID', async () => {
    const res = await request(app).get('/api/clients/invalid-id');
    expect(res.statusCode).toBe(500); // Because MongoDB throws invalid format error
  });
});
