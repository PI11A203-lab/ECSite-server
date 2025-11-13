const productService = require("./productService");

exports.getProducts = async (req, res) => {
    try {
        const products = await productService.findAllProducts();
        res.send({ products });
    } catch (err) {
        console.error(err);
        res.status(400).send("商品一覧取得でエラーが発生しました");
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await productService.findProductById(req.params.id);
        res.send({ product });
    } catch (err) {
        console.error(err);
        res.status(400).send("商品照会にエラーが発生しました");
    }
};

exports.createProduct = async (req, res) => {
    const { name, description, price, seller, imageUrl } = req.body;
    if (!name || !description || !price || !seller || !imageUrl) {
        return res.status(400).send("すべてのフィールドに入力してください");
    }

    try {
        const result = await productService.createProduct({ name, description, price, seller, imageUrl });
        res.send({ result });
    } catch (err) {
        console.error(err);
        res.status(400).send("商品の作成に失敗しました");
    }
};

exports.purchaseProduct = async (req, res) => {
    try {
        await productService.markAsSoldOut(req.params.id);
        res.send({ result: true });
    } catch (err) {
        console.error(err);
        res.status(500).send("購入処理にエラーが発生しました");
    }
};
