const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';

MongoClient.connect(url, (err, data) => {
	if (err) throw err;
	const db = data.db('sh1811');
	const collection = db.collection('users');
	coll
})