const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET should return a list of all Amandas pets', async () => {
    const res = await request(app).get('/pets');
    expect(res.body).toEqual(expect.arrayContaining([
      expect.objectContaining(
        {
          id: expect.any(String),
          name: expect.any(String),
          species: expect.any(String),
          breed: expect.any(String),
          age: expect.any(Number)
        }
      )
    ])
    );
  });
  afterAll(() => {
    pool.end();
  });
});
