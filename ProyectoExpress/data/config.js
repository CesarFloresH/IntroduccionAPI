const sql = require ('mssql');

const config = {
    user: 'root',
    password: 'root',
    server: 'localhost',
    database: 'api',
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
    options: {
        trustedconnection: false,
        enableArithAbort: true,
        encrypt:false,
        instancename: 'WINSERVERFLORES\\SQLEXPRESS01',
        trustServerCertificate: false,
    }
}
module.exports = config;
