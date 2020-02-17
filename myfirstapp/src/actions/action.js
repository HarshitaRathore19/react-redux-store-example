 export const nameaction =()=>{
 	return(dispatch)=>{
 	fetch('https://jsonplaceholder.typicode.com/users')
 	.then(res=>res.json())
 	.then(res1=>{dispatch({type:'CHANGE_NAME',payload:res1[0].name})})
 }
	//return{
	//	type:'CHANGE_NAME',
	//	payload:name
	//}
}

export const desigaction = (designation)=>{
	return(dispatch)=>{
 	fetch('https://jsonplaceholder.typicode.com/users')
 	.then(res=>res.json())
 	.then(res1=>{//console.log(res1)
 		dispatch({type:'CHANGE_DESIG',payload:res1[1].email})
 	})
 }
	//return{
	//	type:'CHANGE_DESIG',
	//	payload:designation
	//}
}
 