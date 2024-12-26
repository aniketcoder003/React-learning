import style from "./Items.module.css"
function Item ({data}){
	return <>
         <li className={`list-group-item ${style['my-items']}`}>{data}</li>
	</>
}

export default Item;