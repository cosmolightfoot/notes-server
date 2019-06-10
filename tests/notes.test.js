require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');
const app = require('../lib/app');

describe('notes routes', () => {
  beforeAll(() => {
    return connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can add a note', () => {
    return request(app)
      .post('/api/v1/notes')
      .send({ title: 'my note', body: 'is awesome' })
      .then(res => {
        expect(res.body).toEqual({
          title: 'my note',
          body: 'is awesome',
          _id: expect.any(String),
          __v: 0
        });
      });
  });

});
