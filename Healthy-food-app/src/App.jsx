import './App.css'
import Heading from './components/Heading'
import Items from './components/Items'
import Error from './components/Error'
function App() {
  
  let food=["dal","rice","ghee","salad","fruits"]
  
  return <>
           <div className="main-container">
           <Heading ></Heading>
           <Error data={food}></Error>
           <Items data={food}></Items>
           </div>    
  </>
   
}

export default App
