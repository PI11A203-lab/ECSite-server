const productRoutes = require("../features/product/productRoutes");
const bannerRoutes = require("../features/banner/bannerRoutes");
const purchaseRoutes = require("../features/purchase/purchaseRoutes");

module.exports = (app) => {
    app.use("/products", productRoutes);
    app.use("/banners", bannerRoutes);
    app.use("/purchase", purchaseRoutes);
};
