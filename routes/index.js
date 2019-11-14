const express = require('express');
const router = express.Router();
const firebase = require('firebase');

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
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
	.then(blogPosts => {
			blogposts.forEach(docs =>{
				posts.push(docs.data());
			});
			console.log('blogPosts', blogPosts);
		})
	.catch(err => {
		console.log('error',err);
	})


router.get('/', (req, res) => {
	res.send(posts);
});

module.exports = router;