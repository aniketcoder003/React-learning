import style from "./Input.module.css";

function Input({handleonkeydown}) {
	
  return (
    <>
      <input
        type="text"
        placeholder="enter food here "
        className={style["my-input"]}
		onKeyDown={handleonkeydown}
      ></input>
    </>
  );
}

export default Input;
