import './App.css'
import Input from './components/Input'
import Buttons from "./components/Buttons"
import { useState } from 'react'

function App() {

  let btn=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0']
  const [text,settext]=useState('');
  const onclick=(item)=>{
	  let newtext='';
	  if(item==='=')
		{
			newtext=eval(text);
			
		}
		else if(item==='C')
			{
				newtext='';
			}	
	  else  newtext=text+item;
	  settext(newtext)
	  console.log(newtext)
	  
	}
  
  return <>
       <div className="container">
       <Input data={text}></Input>
       <div className="my-btn">
       <Buttons data={btn}  handleonclick={onclick}></Buttons>
       </div>
       </div>
  </>
}

export default App
