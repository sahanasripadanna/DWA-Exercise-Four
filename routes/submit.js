const express = require('express');
const router = express.Router();
const firebase = require('firebase');

var admin = require("firebase-admin");
var serviceAccount = require("../service.json");


const db = admin.firestore();

const sampleData = {
	title:'Test',
	text: 'Test Text',
	author: 'Sahana Sripadanna'
}

// test route
router.get("/test", (req, res) =>{
	// localhost:4000/submit?title=title&text=text&author=authornamewhatever
	db.collection("blog-posts")
	//setting an id for the test doc
	.doc("test-doc")
	.set(sampleData)
	.then(function(){
		res.send(`${sampleData} Test Data Submitted`)
	})
	.catch(function(error) {
		res.send("error writing document: ", error);
	});
})

// submit data
router.get("/", (req, res) => {
	let titleVal = req.query.title ? req.query.title: '';
	let textVal = req.query.text ? req.query.text: '';
	let authorVal = req.query.author ? req.query.author: '';
	db.collection("blog-posts")
	.add({
		title: titleVal,
		text: textVal,
		author: authorVal
	})
	.then(ref => res.send(ref))
	.catch(e => res.send(e));
})

module.exports = router;
