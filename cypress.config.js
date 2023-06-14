const { defineConfig } = require("cypress");
const oracledb = require("oracledb");
require("dotenv").config();
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');


// Establece la configuración de conexión para el ambiente de base de datos
const connection = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: process.env.DB_CONNECT_STRING,
};

// Establece la función para realizar consultas a la base de datos Oracle
function queryDB(query) {
  return new Promise((resolve, reject) => {
    oracledb.getConnection(connection, (error, connection) => {
      if (error) {
        reject(error);
      } else {
        connection.execute(query, (error, result) => {
          connection.close(() => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        });
      }
    });
  });
}

module.exports = defineConfig({
  // Ajusta el tiempo de espera predeterminado en milisegundos
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 10000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    // Al iniciar la prueba esta será la url base
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on("task", {
        queryDatabase({ query }) {
          return queryDB(query);
        },
      });
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });
      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
  },
});
