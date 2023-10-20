const oracledb = require("oracledb");

module.exports = async ({ host, port, db, user, password }) => {
  let connection;

  try {
    oracledb.initOracleClient();

    connection = await oracledb.getConnection({
      user: user,
      password: password,
      connectString: `${host}:${port}/${db}`,
    });

    await connection.execute(`SELECT 1 FROM DUAL`);

    console.log("Connection was successful!");
  } catch (error) {
    console.error(error);
  } finally {
    if (connection != null) await connection.close();
  }
};
