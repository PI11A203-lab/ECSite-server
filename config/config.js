require('dotenv').config();

module.exports = {
    development: {
        dialect: process.env.DB_DIALECT || 'sqlite',
        storage: process.env.DB_STORAGE || './database.sqlite3',
    },
    test: {
        dialect: 'sqlite',
        storage: ':memory:',
    },
    production: {
        dialect: process.env.DB_DIALECT || 'sqlite',
        storage: process.env.DB_STORAGE || './database.sqlite3',
    },
};

