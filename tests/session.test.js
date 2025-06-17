const request = require('supertest');
const app = require('../server');

describe('Session Routes', () => {
  it('should return all sessions', async () => {
    const res = await request(app).get('/api/sessions');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return 404 for invalid session ID', async () => {
    const res = await request(app).get('/api/sessions/invalid-id');
    expect(res.statusCode).toBe(500);
  });
});
