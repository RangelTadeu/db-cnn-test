// get the client
const mysql = require("mysql2/promise");

module.exports = async ({ host, port, db, user, password }) => {
  let cnn;
  try {
    cnn = await mysql.createConnection({
      host,
      user,
      database: db,
      port: parseInt(port, 10),
      password,
    });

    await cnn.execute("SELECT 1 as test");

    console.log("Connection was successful!");
  } catch (error) {
    console.error(error);
  } finally {
    await cnn.end();
  }
};
