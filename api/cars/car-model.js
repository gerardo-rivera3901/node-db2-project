const db = require('../../data/dbConfig');

module.exports = {
  getAll() {
    return db('cars');
  },
  getById(id) {
    return db('cars').where({id}).first();
  },
  create(post) {
    return db('cars').insert(post);
  },
  update(id, post) {
    return db('cars').where({id}).update(post);
  },
  delete(id) {
    return db('cars').where({id}).del();
  }
};