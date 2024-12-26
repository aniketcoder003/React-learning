import style from "./Container.module.css"
function Container (props){
	return <>
	<div className={style['my-container']}>
     { props.children}
	</div>

	</>
}

export default Container;