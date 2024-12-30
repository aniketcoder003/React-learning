import style from "./Item.module.css"
import { MdDelete } from "react-icons/md";
const Item=({task,date,handleonclick})=>{
	return <>
	       <div class={`container ${style['my-container']}`}>
                <div class={`row ${style.myrow}`}>
                <div class="col-3 column">
					{task}
				</div>
                <div class="col-2 column">
				{date}
				</div>
                <div class="col-1 column">
				<button type="button" class="btn btn-danger" onClick={()=>handleonclick(task)}><MdDelete /></button> 
				</div>
                </div>
           </div>

	</>
}

export default Item;