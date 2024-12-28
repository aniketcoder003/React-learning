import Button from "./Button"
const Buttons = ({data,handleonclick})=>{
	

	
	return <>
	     
         {data.map((item)=>(<Button data={item}  key={item} handleonclick={()=>handleonclick(item)}></Button>))}
	</>
}
export default Buttons