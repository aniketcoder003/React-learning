import './App.css'
import Heading from './components/Heading'
import Items from './components/Items'
import Error from './components/Error'
import Container from './components/Container'
import Input from './components/Input'
import {useState} from 'react'
function App() {
  
 

  let [food , set]=useState([]);
 

  const handleonkeydown=(event)=>{
     console.log(event)
    if(event.key==='Enter')
    { 
      let foods =[...food,event.target.value]
      event.target.value='';
      set(foods);

    }
 }
  
  return <>
          <Container>
           <Heading ></Heading>
           <Input handleonkeydown={handleonkeydown}></Input>
           <Error data={food}></Error>
           <Items data={food} ></Items>
           </Container>

           
        
  </>
   
}

export default App
