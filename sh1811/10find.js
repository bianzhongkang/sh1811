const sql = require('./sql.js');

sql.find('sh1811', 'users', {}).then((data) => {
	console.log(data)
}).catch((err) => {
	console.log(err)
})