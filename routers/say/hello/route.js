const express = require("express");
const router = express.Router();

router.post(
    "",
    router.CreateDocument("author")
);

router.get(
    "/author",
    router.FindDocuments("author")
);

module.exports = router;
