import { useReducer, createContext } from "react";

export const Item1=createContext([]); 

const reducer = (state, action) => {

	let newtodoitems = state;
	if (action.type === "NEW_ITEM") {
	  newtodoitems = [
		...state,
		{
		  task: action.payload.task,
		  date: action.payload.date,
		},
	  ];
	} else if (action.type === "DELETE_ITEM") {
	  newtodoitems = state.filter((item) => item.task != action.payload.task);
	}
	return newtodoitems;
  };

const Contextprovider =({children})=>{
  const [array, dispatcher] = useReducer(reducer, []);

 
   const addnewitem = (text, text2) => {
	 const newitem = {
	   type: "NEW_ITEM",
	   payload: {
		 task: text,
		 date: text2,
	   },
	 };
	 dispatcher(newitem);
   };
 
   const deleteitem = (text) => {
	 const newitem = {
	   type: "DELETE_ITEM",
	   payload: {
		 task: text,
	   },
	 };
	 dispatcher(newitem);
   };

   return <>
	 <Item1.Provider value={{ array, addnewitem, deleteitem }}>
		{children}
	 </Item1.Provider>
   </>
 
}

export default Contextprovider