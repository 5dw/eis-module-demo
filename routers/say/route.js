const express = require('express');
const router = express.Router();

router.get('', (req, res, next) => {
    res.endWithData('I will say something!')
    return next();
})

module.exports = router;