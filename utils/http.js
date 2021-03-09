// 默认请求的地址
const HTTP_SRC=""
// 封装请求方法
export const http = (options) =>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:HTTP_SRC+options.url,
			data:options.data || {},
			method:options.method || 'GET',
			success:(res) => {
				// 如果返回状态码不正确，提示用户报错
				if(res.data.status !== 2000){
					return uni.showToast({
						title: '获取数据失败'
					})
				}
				resolve(res)
			},
			fail: (err) => {
				return uni.showToast({
					title: '获取接口失败'
				})
				reject(err)
			}
		})
	})
}