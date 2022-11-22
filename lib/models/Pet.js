const pool = require('../utils/pool');

class Pet {
  id;
  name;
  species;
  breed;
  age;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.species = row.species;
    this.breed = row.breed;
    this.age = row.age;
  }
  
  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT * from pets
      `
    ); return rows.map((row) => new Pet(row));
  }

} //end of model
module.exports = { Pet };
