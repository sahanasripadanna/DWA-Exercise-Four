const express = require('express');
const router = express.Router();


router.get('/', (req, res) => (res.send('Thank you for tuning in sir')));

module.exports = router;