import Item from "./Item";
import style from "./Items.module.css"
import {useState} from 'react'
function Items ({data}){
	
	const [array,setarray]=useState([])
	let handleonclick =(event,data)=>{
		
		console.log(`${data} clicked`)
	    let newarr=[...array,data]
         setarray(newarr)


	}
return <>
       <ul className={`list-group ${style['my-items']}`}>
            {
				data.map((item)=>(<Item data={item} key={item} signal={array.includes(item)} handleonclick={(event)=>handleonclick(event,item)}></Item>))
			}
		</ul>
	</>
}

export default Items;