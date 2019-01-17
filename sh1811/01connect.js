// const mongodb = require('mongodb');
// const mongodbClient = mongodb.MongoClient; //这是mongodb需要的对象，就是monggodb的客户端
const { MongoClient } = require('mongodb');  //这是mongodb需要的对象，就是monggodb的客户端
const mongodbUrl = 'mongodb://127.0.0.1:27017';//mongodb是协议,127.0.0.1是域名,27017是端口
// mongodbClient 是客户端，connect连接；连接里面是参数，第一个参数就是连接的路径

MongoClient.connect(mongodbUrl, (err, client) => {  //client连接池，通过client.db这个方法拿到所有的连接池中的一个数据库
	if (err) throw err;
	const db = client.db('sh1811'); //这是数据库的连接池，连接到sh1811这个数据库
	console.log("数据库连接成功")
	
})