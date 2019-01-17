const sql = require('./sql.js');

sql.insert('sh1811', 'users', { "username": "张柏芝", "age": 24 }).then(() => {
	//成功
	console.log('插入数据成功')
}).catch((err) => {
	//失败
	console.log('插入数据失败')
})
