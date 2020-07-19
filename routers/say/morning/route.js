const express = require('express');
const router = express.Router();

router.get('', (req, res, next) => {
    res.endWithData('Good morning!')
    return next();
})

module.exports = router;