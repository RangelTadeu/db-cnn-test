const mssql = require("./mssql");
const oracle = require("./oracle");
const postgres = require("./postgres");

const args = process.argv.slice(2);

if (args.length !== 6) {
  console.error(
    "Incorrect use. The app requires: driver, host, port, db, user and password."
  );
  process.exit(1);
}

const [driver, host, port, db, user, password] = args;

const drivers = { mssql, oracle, postgres };

(async () => {
  const driverFn = drivers[driver];

  if (driverFn == null) {
    console.error("Incorrect driver or not implemented");
    process.exit(1);
  }

  await driverFn({ host, port, db, user, password });
})();
