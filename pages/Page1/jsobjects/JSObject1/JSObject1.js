export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		setInterval(() => { 
			showAlert('hi') 
		}, 5000, "interval1");
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		
		clearInterval('interval1')
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}