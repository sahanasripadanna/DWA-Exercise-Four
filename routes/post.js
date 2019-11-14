const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
	return(
	res.send(`Reading About from ${req.headers.host}`))
});
router.get('/me', (req, res) => (res.send('About Me: i am hip')));

module.exports = router;