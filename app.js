const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const indexRoute = require('./routes/index.js');
const postRoute = require('./routes/post.js');


// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://dwa-exercise-four.firebaseio.com"
// });



app.use('/index', indexRoute);
app.use('/post', postRoute);

//--- Serve Static Images
app.use('/static', express.static('public'));
app.listen(port, () => console.log(`Exercise Three is listening on port ${port}!`));

