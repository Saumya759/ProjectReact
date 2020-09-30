import React, { useState } from 'react';
import ToDolists from "./ToDolists";

const App = () => {

  const [inputList, setInputList] = useState("")
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems([...items, { text: inputList, checked: false }])
    setInputList("");
  };

  // const strike = () => {
  //   // setItems(event.target.strike)
  // };

  const onCheck = (text) => {
    // setItems(checked: true)
   setItems(items.map(val=>{
     if(val.text == text){
       val['checked'] = !val.checked
       return val;
     }
     else{
       return val
     }
   }))
  };

  // onMove = () => {
  //   console.log(this.strike);
  // }

  console.log(items, "AAAAAAAAAAAAAAAA")

  return (
    <>

      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input type="text" placeholder='Add a Items'
            value={inputList}
            onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>
          <ol>
            {/* <li> {inputList} </li> */}

            {items.map((value, i) => {
              return <ToDolists data={value} onCheck={onCheck}/>;
            })}

          </ol>
        </div>
      </div>
    </>
  );
};


export default App;
