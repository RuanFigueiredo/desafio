// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const mysql = require('mysql');
module.exports = {
 
  development: {
    client: 'mysql',
    connection: {
      database:"db_knex",
      user:"root",
      password:"root"
    },
    migrations: {
      tableName: 'db_knex',
      directory: `${__dirname}/src/database/migrations`
    }
  }
};
