const sql = require("mssql");

module.exports = async ({ host, port, db, user, password }) => {
  const sqlConfig = {
    user,
    password,
    database: db,
    server: host,
    port: parseInt(port, 10),
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    options: {
      trustServerCertificate: false,
    },
  };

  try {
    await sql.connect(sqlConfig);

    await sql.query`SELECT 1`;

    console.log("Connection was successful!");
  } catch (error) {
    console.error(error);
  } finally {
    if (sql != null) await sql.close();
  }
};
