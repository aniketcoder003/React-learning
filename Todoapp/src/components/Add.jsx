import style from "./Add.module.css";
import { useRef } from "react";
import { MdAddTask } from "react-icons/md";
import { Item1 } from "../Store/item1"
import { useContext } from "react";
import Item from "./Item";


const Add = () => {

 const {addnewitem}=useContext(Item1)
  const task=useRef();
  const date=useRef();
 

  const setonclick = (event) => {

	event.preventDefault();
  addnewitem(task.current.value, date.current.value);
    task.current.value=''
    date.current.value=''

  };

  return (
    <>
      <div className={`container ${style["my-container"]}`}>
        <form className={`row ${style.myrow}`}
		 onSubmit={setonclick}
		>
          <div className="col-3 column">
            <input
              type="text"
			  ref={task}
              placeholder="enter task here"
             
            ></input>
          </div>
          <div className="col-2 column">
            <input
              type="date"
              ref={date}
            ></input>
          </div>
          <div className="col-1 column">
            <button            
              className="btn btn-success"
              onClick={setonclick}
            >
              <MdAddTask />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Add;
