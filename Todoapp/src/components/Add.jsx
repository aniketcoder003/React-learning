import style from "./Add.module.css"
import { useState } from "react";
import { MdAddTask } from "react-icons/md";
const Add=({handleonclick})=>{
    
	const [text,set]=useState('');
	const [text2,settext2]=useState('');

	const handleonchange =(event)=>{
		set(event.target.value)
		// event.target.value='';
	}

	const handleonchangedate=(event)=>{
		settext2(event.target.value)
	}

	const setonclick=()=>{
		handleonclick(text,text2);
		set('');
		settext2('')

	}
     
	return <>
	       <div className={`container ${style['my-container']}`}>
                <div className={`row ${style.myrow}`}>
                <div className="col-3 column">
				<input type="text" placeholder="enter task here" onChange={handleonchange} value={text}></input>
				</div>
                <div className="col-2 column">
				<input type="date"  onChange={handleonchangedate}  value={text2}></input>
				</div>
                <div className="col-1 column">
				<button type="button" className="btn btn-success"  onClick={setonclick}>
				<MdAddTask />

				</button>
				</div>
                </div>
           </div>

	</>
}

export default Add;