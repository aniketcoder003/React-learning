import style from "./Item.module.css"
function Item ({data, handleonclick,signal}){
   


	return <>
         <li style={{color: "red"}} className={`list-group-item ${style['my-items']}  ${signal && 'active'} `}>
		 {data}
		 
		 <button className={`btn btn-info  ${style['my-btn']} `} 
		  onClick={handleonclick}
		 >buy	
		 </button>
		 </li>
	</>
}

export default Item;