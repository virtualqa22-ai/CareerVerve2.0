process.env.BREVO_API_KEY = 'mock_brevo_api_key'; // Mock Brevo API key for testing
const request = require('supertest');
const app = require('../../index'); // Assuming your Express app is exported from index.js

describe('Health Check', () => {
  it('should return 200 OK for /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('OK');
  });
});
