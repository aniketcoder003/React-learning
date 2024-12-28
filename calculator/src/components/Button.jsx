import style from "./Button.module.css"
const Button =({data,handleonclick})=>{
	return <>
       <button className={style['my-button'] 
	   }
    onClick={handleonclick}>{data}</button>
	</>
}

export default Button;