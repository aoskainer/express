import config from 'config';
import mysql from 'mysql2/promise';

const connectDatabase = async () => {
  const host: string = config.get('database.host');
  const port: number = parseInt(config.get('database.port'));
  const user: string = config.get('database.user');
  const password: string = config.get('database.password');
  const database: string = config.get('database.database');

  const connection = await mysql.createConnection({
    host: host,
    port: port,
    user: user,
    password: password,
    database: database,
  });

  return connection;
}

export {
  connectDatabase,
}
