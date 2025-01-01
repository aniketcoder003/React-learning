import Item from "./Item";
import { Item1 } from "../Store/item1"
import { useContext } from "react";

const Items=({handleonclick})=>{

	const {array,}=useContext(Item1)
	// console.log(datacontext)
	return <>
          {array.map((item)=>(<Item task={item.task} date={item.date} handleonclick={handleonclick}></Item>))}
	</>
}

export default Items;