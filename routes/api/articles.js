const express = require('express');
const router = express.Router();
const Article = require('../../models/Article');

router.get('/test', (req, res) =>
    res.json({msg: "Test"})
    );


module.exports = router;