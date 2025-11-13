const bannerService = require("./bannerService");

exports.getBanners = async (req, res) => {
    try {
        const banners = await bannerService.findAllBanners();
        res.send({ banners });
    } catch (err) {
        console.error(err);
        res.status(500).send("バナー取得でエラーが発生しました");
    }
};

exports.createBanner = async (req, res) => {
    const { imageUrl, link, altText } = req.body;
    if (!imageUrl) {
        return res.status(400).send("画像URLは必須です");
    }

    try {
        const result = await bannerService.createBanner({ imageUrl, link, altText });
        res.send({ result });
    } catch (err) {
        console.error(err);
        res.status(500).send("バナー作成でエラーが発生しました");
    }
};
