const express = require("express");
const cors = require("cors");
const app = express();
const models = require("./models");
const port = 8081;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  models.Product.findAll()
    .then((result) => {
      console.log("PRODUCTS : ", result);
      res.send({
        products: result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("エラー発生");
    });
});

app.post("/products", (req, res) => {
  const body = req.body;
  const { name, description, price, seller } = body;
  if (!name || !description || !price || !seller) {
    res.send("すべてのフィールドに入力してください。");
  }
  models.Product.create({
    name,
    description,
    price,
    seller,
  })
    .then((result) => {
      console.log("商品の生成結果 : ", result);
      res.send({
        result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("商品のアップロードに問題が発生しました。");
    });
});

app.get("/products/:id", (req, res) => {
  const params = req.params;
  const { id } = params;
  res.send(`idは${id}です。`);
});

app.listen(port, () => {
  console.log("サーバーが稼働しています。");
  models.sequelize
    .sync()
    .then(() => {
      console.log("DB連結成功");
    })
    .catch((err) => {
      console.error(err);
      console.log("DB連結失敗");
      process.exit();
    });
});
