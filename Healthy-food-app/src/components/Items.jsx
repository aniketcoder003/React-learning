import Item from "./Item";
import style from "./Items.module.css"
function Items ({data}){
	return <>
       <ul className={`list-group ${style['my-items']}`}>
            {
				data.map((item)=>(<Item data={item}></Item>))
			}
		</ul>
	</>
}

export default Items;