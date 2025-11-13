const models = require("../../db/initializer");

exports.findAllProducts = async () => {
    return await models.Product.findAll({
        order: [["createdAt", "DESC"]],
        attributes: ["id", "name", "price", "createdAt", "seller", "imageUrl", "soldout"],
    });
};

exports.findProductById = async (id) => {
    return await models.Product.findOne({ where: { id } });
};

exports.createProduct = async ({ name, description, price, seller, imageUrl }) => {
    return await models.Product.create({ name, description, price, seller, imageUrl });
};

exports.markAsSoldOut = async (id) => {
    return await models.Product.update({ soldout: true }, { where: { id } });
};
