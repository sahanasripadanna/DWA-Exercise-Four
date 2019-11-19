const express = require('express');
const router = express.Router();

const firebase = require('firebase');


var admin = require("firebase-admin");
var serviceAccount = require("../service.json");

const db = admin.firestore();

router.get('/:id', (req, res) => {
	db.collection('blog-posts').doc(req.params.id).get()
	  .then(doc => {
	    if (!doc.exists) {
	      console.log('No such document!');
	    } else {
	      res.send(doc.data());
	    }
	  })
	  .catch(err => {
	   	console.log('Error getting document', err);
	  });
});



module.exports = router;


