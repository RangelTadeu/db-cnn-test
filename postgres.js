const { Pool } = require("pg");

module.exports = async ({ host, port, db, user, password }) => {
  let pool;

  try {
    pool = new Pool({
      host,
      port: parseInt(port, 10),
      database: db,
      user,
      password,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });

    await pool.query("SELECT $1::text as message", ["test"]);

    console.log("Connection was successful!");
  } catch (error) {
    console.error(error);
  } finally {
    await pool.end();
  }
};
