const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const firebaseConfig = {
	apiKey: "AIzaSyAOATYvVQp7H59BNrJRpNgjhz8iws1cB98",
  authDomain: "dwa-exercise-four.firebaseapp.com",
  databaseURL: "https://dwa-exercise-four.firebaseio.com",
  projectId: "dwa-exercise-four",
  // storageBucket: "dwa-exercise-four.appspot.com",
  // messagingSenderId: "738299573084",
  // appId: "1:738299573084:web:70629b2f2ede6108378799"

};

const firestoreDatabase = firebase.initializeApp(firebaseConfig);
const db = firestoreDatabase.firestore();


let posts = [];
db.collection('blog-posts').get()
	.then(
		blogPosts => {
			posts = blogPosts.data();
			console.log('blogPosts', blogPosts);
		}
	)
	.catch(err => {
		console.log('error',err);
	})


router.get('/', (req, res) => {
	res.send(posts);
});

module.exports = router;