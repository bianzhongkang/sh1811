const { MongoClient } = require('mongodb');
const mongoUrl = 'mongodb://127.0.0.1:27017';

MongoClient.connect(mongoUrl, (err, client) => {
	if (err) throw err;
	const db = client.db('sh1811');
	const collection = db.collection('users');
	collection.insert([{username:'卞中康',age:25,aa:'你好'},{username:'谢霆锋',age:30},{username:'王菲',age:40}], (err) => {
		if (err) throw err;
		console.log('添加成功');
		client.close();
	})
})