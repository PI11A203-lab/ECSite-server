const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const models = require("../db/initializer");
const registerRoutes = require("./routes"); // routesまとめ役

const app = express();
const PORT = 8081;

// ミドルウェア設定
app.use(express.json());
app.use(cors());

// uploadsフォルダを静的公開
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Multer設定
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, "../uploads")); // ← ここを修正
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        },
    }),
});


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
