const { MongoClient } = require('mongodb');
const mongoUrl = 'mongodb://127.0.0.1:27017';

MongoClient.connect(mongoUrl, (err, client) => {
	if (err) throw err;
	const db = client.db('sh1811');
	const collection = db.collection('users');
	collection.find({},{}).toArray((err, data) => { //toarray是转成数组的形式显示
		if (err) throw err;
		console.log(data);
		client.close();
	})
})