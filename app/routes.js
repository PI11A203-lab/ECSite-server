const productRoutes = require("../features/product/productRoutes");
const bannerRoutes = require("../features/banner/bannerRoutes");
const purchaseRoutes = require("../features/purchase/purchaseRoutes");
const imageRoutes = require("../features/image/routes")
module.exports = (app) => {
    app.use("/products", productRoutes);// 出品用エンドポイント
    app.use("/banners", bannerRoutes); // banner登録用
    app.use("/purchase", purchaseRoutes); // 購入用
    app.use("/image", imageRoutes);　// image登録するようエンドポイント
};

// localhost:8081/products~~~~