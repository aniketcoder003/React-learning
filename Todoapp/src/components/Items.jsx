import Item from "./Item";

const Items=({data,handleonclick})=>{
	return <>
          {data.map((item)=>(<Item task={item.task} date={item.date} handleonclick={handleonclick}></Item>))}
	</>
}

export default Items;