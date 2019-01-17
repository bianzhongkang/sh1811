sql.update('sh1811', 'users', 'updateOne', {username:/^张/}, {$set: {'class': 'aaa'}}).then(() => {
	console.log('修改成功')
}).catch((err) => {
	console.log('修改失败')
})