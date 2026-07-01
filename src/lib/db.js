// TODO: Configure PostgreSQL connection pool
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

/**
 * Execute a parameterised SQL query.
 * @param {string} text - SQL query string
 * @param {Array} params - Query parameters
 * @returns {Promise<import('pg').QueryResult>}
 */
async function query(text, params) {
  // TODO: implement query execution using the pool
  throw new Error('TODO: implement');
}

module.exports = { pool, query };
