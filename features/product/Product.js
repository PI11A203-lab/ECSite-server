'use strict';

module.exports = (sequelize, DataTypes) => {
    DataTypes.TEXT = undefined;
    DataTypes.INTEGER = undefined;
    return sequelize.define('Product', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        seller: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        soldout: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });
};
