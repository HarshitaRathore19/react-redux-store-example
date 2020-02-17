
const reducerDesig = (state='',action)=>{
	//console.log(action)
	if (action.type=== 'CHANGE_DESIG')
	{
		return action.payload
		
	}
	return state;
} 

export default reducerDesig;