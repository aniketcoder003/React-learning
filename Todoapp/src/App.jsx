import style from "./App.module.css";
import Heading from "./components/Heading";
import Add from "./components/Add";
import Items from "./components/Items";
import Msg from "./components/Msg";
import Contextprovider from "./Store/item1";



function App() {

  return (
    <>     
      <Contextprovider>
        <center className={style.container}>
          <Heading></Heading>
          <Add></Add>
          <Msg></Msg>
          <Items></Items>
        </center>
        </Contextprovider>
       
    </>
  );
}

export default App;
