const env = process.env.NODE_ENV;

const dev = {
  web: {
    port: parseInt(process.env.DEV_APP_PORT || 3000),
  },
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: parseInt(process.env.DEV_DB_PORT) || 27017, // default mongo
    name: process.env.DEV_DB_NAME || 'FullStack App',
  },
};

module.exports = {
  dev,
}[env];
