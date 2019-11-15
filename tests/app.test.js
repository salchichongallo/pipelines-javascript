import request from 'supertest';

import app from '../src/app';

test('APP is OK', async () => {
  const response = await request(app).get('/');

  expect(response.status).toBe(200);
  expect(response.body).toBe('OK');
});
