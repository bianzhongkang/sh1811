 sql.remove('sh1811', 'users', {'username':'卞中康'}).then(() => {
	console.log('删除成功')
}).catch((err) => {
	console.log('删除失败')
})