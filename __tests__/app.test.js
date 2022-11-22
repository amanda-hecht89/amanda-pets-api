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
    expect(res.body).toEqual([
      {
        id: '1',
        name: 'Arya',
        species: 'Dog',
        breed: 'Treeing Walker Coonhound',
        age: '9'
      },
      {
        id: '2',
        name: 'Boulder',
        species: 'Dog',
        breed: 'Pitt Mix',
        age: '6'
      },
      {
        id: '3',
        name: 'Crowley',
        species: 'Turtle',
        breed: 'Red-Earred Slider',
        age: '5'
      },
      {
        id: '4',
        name: 'Fancy',
        species: 'Fish',
        breed: 'Clown',
        age: '1'
      },
      {
        id: '5',
        name: 'Alfred',
        species: 'Fish',
        breed: 'Pleco',
        age: '5'
      },
      {
        id: '6',
        name: 'Ninja',
        species: 'Fish',
        breed: 'Clown',
        age: '1'
      }
    ]);
  });
  afterAll(() => {
    pool.end();
  });
});
