
import { Item1 } from "../Store/item1"
import { useContext } from "react";
const Msg=()=>{
	const {array}=useContext(Item1)


	return <>
           {array.length==0 && <h3>Enjoy your day</h3>}
	</>
}

export default Msg