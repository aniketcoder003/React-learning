import Item from "./Item";
import style from "./Items.module.css"
function Items ({data}){
	
	let handleonclick =(event,data)=>{
		console.log(event)
		console.log(`${data} clicked`)
	}
return <>
       <ul className={`list-group ${style['my-items']}`}>
            {
				data.map((item)=>(<Item data={item} key={item} handleonclick={(event)=>handleonclick(event,item)}></Item>))
			}
		</ul>
	</>
}

export default Items;