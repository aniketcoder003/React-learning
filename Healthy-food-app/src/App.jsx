import './App.css'
import Heading from './components/Heading'
import Items from './components/Items'
import Error from './components/Error'
import Container from './components/Container'
import Input from './components/Input'
function App() {
  
  let food=["dal","rice","ghee","salad","fruits"]

  let text="input"
  const handleonchange=(event)=>{
    console.log(event.target.value)
    text=event.target.value;
 }
  
  return <>
          <Container>
           <Heading ></Heading>
           <Input handleonchange={handleonchange}></Input>
           <p>{text}</p>
           <Error data={food}></Error>
           <Items data={food}  ></Items>
           </Container>

           
        
  </>
   
}

export default App
