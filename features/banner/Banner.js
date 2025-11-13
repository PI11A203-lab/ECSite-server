'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Banner', {
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        altText: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
};
