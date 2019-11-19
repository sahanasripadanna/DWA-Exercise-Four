const express = require('express');
const router = express.Router();
const firebase = require('firebase');


var admin = require("firebase-admin");
var serviceAccount = require("../service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dwa-exercise-four.firebaseio.com"
});

const db = admin.firestore();

router.get('/', (req, res) => {
	let posts = [];
	db.collection('blog-posts').get()
		.then(blogPosts => {
				blogPosts.forEach(docs =>{
					posts.push({
						id: docs.id,
						blog: docs.data()
					});
				});
				res.send(posts);
			})
		.catch(err => {
			console.log('error',err);
		})
	
});

module.exports = router;
