'use strict';

require('dotenv').config(); // ← .env を読み込む
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;

// .envから設定を直接使う or configから生成
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else if (config.url) {
    // もし config.js でURL形式使う場合に対応
    sequelize = new Sequelize(config.url, config);
} else {
    // SQLiteなど通常パターン
    sequelize = new Sequelize(
        config.database || null,
        config.username || null,
        config.password || null,
        config
    );
}

// モデルの自動読み込み
fs
    .readdirSync(__dirname)
    .filter((file) => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js' &&
            file.indexOf('.test.js') === -1
        );
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

// モデル間の関連付け
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
