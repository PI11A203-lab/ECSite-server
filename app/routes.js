const productRoutes = require("../features/product/productRoutes");

module.exports = (app) => {
    app.use("/products", productRoutes);
};
