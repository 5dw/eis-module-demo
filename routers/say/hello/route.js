const express = require("express");
const router = express.Router();

router.post(
    "",
    router.CreateDocument("author")
);

router.get(
    "/author",
    async (req, res, next) => {
        // const authors = await router.mdl.models.author.find({});
        // res.endWithData(authors);
        res.addData({authors: await (router.Model('author')).find({})})
        // res.addData(await (router.Model('author')).find({}))

        return next();
    },
    // router.FindDocuments("author")
);

module.exports = router;
