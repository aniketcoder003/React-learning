import style from "./Item.module.css"
function Item ({data, handleonclick}){
   


	return <>
         <li style={{color: "red"}} className={`list-group-item ${style['my-items']}`}>{data}
		 
		 <button className={`btn btn-info  ${style['my-btn']} `} 
		  onClick={handleonclick}
		 >buy</button>
		 </li>
	</>
}

export default Item;