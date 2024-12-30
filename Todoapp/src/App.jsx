import style from "./App.module.css"
import Heading from "./components/Heading"
import Add from "./components/Add"
import Items from "./components/Items"
import { useState } from "react"
function App() {
        let [array,set]=useState([  
        ])

        const handleonclick=(text,text2)=>{
             let newobj={
                task:text,
                date:text2,
             }
             let newarr=[...array,newobj]
             set(newarr)
        }
        const handleonclick2 =(text)=>{
                let newarr=array.filter((item)=>(item.task!==text))
                set(newarr)
        }
return <>
        <center className={style.container} >
           <Heading></Heading>
            <Add handleonclick={handleonclick}></Add>
           <Items data={array} handleonclick={handleonclick2}></Items>        
        </center>
</>
}

export default App
