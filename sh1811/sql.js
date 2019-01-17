const { MongoClient } = require('mongodb');
const mongoUrl = 'mongodb://localhost:27017';//127.0.0.1======localhost
const sql = {
	//插入数据
	insert: (database, collectionName, insertDate) => {
// 		MongoClient.connect(mongoUrl, (err, client) => {
// 			if (err) throw err;
// 			const db = client.db('sh1811');
// 			const collection = db.collection('users');
// 			collection.insert({username:'卞中康',age:25}, (err) => {
// 				if (err) throw err;
// 				console.log('insert success');
// 				client.close();//关闭数据库
// 			})
// 		})
			//promise是解决异步操作最好的办法，因为他有两个状态，一个是成功，一个是失败
//         return new Promise((resolve, reject) => { //两个参数，第一个是成功，第二个是失败
// 			MongoClient.connect((err, client) => {
// 				if (err) throw err;
// 				const db = client.db('sh1811');
// 				const collection = db.collection('users');
// 				collection.insert({username:'张柏芝',age:40}, (err) => {
// 					if (err) {
// 						reject(err)//失败的意思
// 					} else {
// 						resolve()//成功的意思
// 					}
// 					client.close();
// 				})
// 				
// 			})
// 		})
	return new Promise((resolve, reject) => { //两个参数，第一个是成功，第二个是失败
		MongoClient.connect(mongoUrl, (err, client) => {
	    	if (err) throw err;
				const db = client.db(database);
				const collection = db.collection(collectionName);
				collection.insert(insertDate, (err) => {
					if (err) {
						reject(err)//失败的意思
					} else {
						resolve();//成功的意思
					}
					client.close();
				})
				
			})
		})
	},
	remove: (database, collectionName, removeDate) => {
		return new Promise((resolve, reject) => {
			MongoClient.connect(mongoUrl, (err, client) => {
				if (err) throw err;
				const db = client.db(database);
				const collection = db.collection(collectionName);
				collection.remove(removeDate, (err) => {
					if (err) {
						reject(err);
					} else {
						resolve();
					}
					client.close();
				})
			})
		})
	},
	update: (database, collectionName, updataType, whereData, updateData) => {
		return new Promise((resolve, reject) => {
			MongoClient.connect(mongoUrl, (err, client) => {
				if (err) throw err;
				const db = client.db(database);
				const collection = db.collection(collectionName);
				collection[updataType](whereData, updateData, (err) => {
					if (err) {
						reject(err);
					} else {
						resolve();
					}
					client.close();
				})
			})
		})
	},
	find: (database, collectionName, whereData) => {
		return new Promise((resolve, reject) => {
			MongoClient.connect(mongoUrl, (err, client) => {
				if (err) throw err;
				const db = client.db(database);
				const collection = db.collection(collectionName);
				collection.find(whereData).toArray((err, data) => {
					if (err) {
						reject(err)
					} else {
						resolve(data);
					}
					client.close();
				})
			})
		})
	}
}
module.exports = sql;