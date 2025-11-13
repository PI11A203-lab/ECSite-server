'use strict';

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config.js')[process.env.NODE_ENV || 'development'];

const sequelize = config.url
    ? new Sequelize(config.url, config)
    : new Sequelize(config.database, config.username, config.password, config);

const db = { sequelize, Sequelize };

// models ディレクトリから feature 内のモデルを自動登録
const modelsDir = path.join(__dirname, '../features');
fs.readdirSync(modelsDir).forEach((feature) => {
    const modelPath = path.join(modelsDir, feature, `${feature}Model.js`);
    if (fs.existsSync(modelPath)) {
        const model = require(modelPath)(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    }
});

module.exports = db;
