const express = require("express");
const cors = require("cors");
const path = require("path");
const models = require("../models");
const registerRoutes = require("./routes"); // routesまとめ役

const app = express();
const PORT = 8081;

// ミドルウェア設定
app.use(express.json());
app.use(cors());

// アップロード静的フォルダ
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// 全ルート登録
registerRoutes(app);

// サーバー起動
app.listen(PORT, async () => {
    console.log(`サーバーがポート ${PORT} で稼働中`);

    try {
        await models.sequelize.sync(); // DB連結
        console.log("DB連結成功");
    } catch (err) {
        console.error("DB連結失敗", err);
        process.exit(1);
    }
});
