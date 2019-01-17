const { MongoClient } = require('mongodb');
const mongoUrl = 'mongodb://127.0.0.1:27017';

MongoClient.connect(mongoUrl, (err, client ) => {
	if (err) throw err;
	const db = client.db('sh1811');
	const collection = db.collection('users');
	collection.updateMany({},{$inc: {age: 1}}, (err) => {
		if (err) throw err;
		 console.log('更改成功');
		 client.close();
	})
})