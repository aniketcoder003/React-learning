import style from "./Input.module.css";

function Input({handleonchange}) {
	
  return (
    <>
      <input
        type="text"
        placeholder="enter food here "
        className={style["my-input"]}
		onChange={handleonchange}
      ></input>
    </>
  );
}

export default Input;
