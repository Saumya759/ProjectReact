import React, { useState } from 'react';
import ToDolists from "./ToDolists";

const App = () => {

  const [inputList, setInputList] = useState("")
  const [items, setItems] = useState([]);
  const [filterData, changeFilterData] = useState('all')


  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {

    setItems([...items, { text: inputList, checked: false }])
    setInputList("");
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      listOfItems()
    }
  }

  const onCheck = (text) => {
    setItems(items.map(val => {
      if (val.text == text) {
        val['checked'] = !val.checked
        return val;
      }
      else {
        return val;
      }
    }))
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />

          <input type="text" placeholder='Add a Items'
            onKeyPress={onKeyPress}
            value={inputList}
            onChange={itemEvent} />
          {items.filter((i) => {
            if (filterData === 'active') {
              return i.checked === false
            } else if (filterData === 'completed') {
              return i.checked === true
            } else {
              return i
            }
          }).map((value, i) => {
            return <ToDolists data={value} onKeyPress={listOfItems} onCheck={onCheck} />;
          })}

          <ol>
            <div className="box">
              <button onClick={() => {
                console.log('all')
                changeFilterData('all')
              }}> ALL </button><br /><br />


              <button onClick={() => {
                console.log('active')
                changeFilterData('active')
              }} > Active </button><br /><br />


              <button onClick={() => {
                console.log('completed')
                changeFilterData('completed')
              }}> Completed </button>
            </div>
          </ol>
        </div>
      </div>
    </>
  );
};
export default App;
