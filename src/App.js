import React, { useState} from 'react';
import ToDolists from "./ToDolists";
// import Table from './Table'
const App = () => {

  const [inputList, setInputList] = useState("")
  const [items, setItems] = useState([]);
  const [filterData, changeFilterData] = useState('all')
  // const [value, setValue] = useState("");

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
  // const Component = () =>{

  // }

  // var data = [
  //   {Status: 1, Description: 'ABC' },
  //   {Status: 2, Description: 'FGH' },
  //   {Status: 3, Description: 'IJK'}
  // ];

  // class App extends Component {
  //   render() {
  //     return (
  //       <div className="App">
  //         <p className="Table-header"></p>
  //         <Table data={data}/>
  //       </div>
  //     );
  //   }
  // }

  const onCheck = (text) => {
    // setItems(checked: true)
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

  console.log(items, "AAAAAAAAAAAAAAAA")


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
        {/* <button onClick={listOfItems}> + </button> */}

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
              // handleFilterSubmit('active')
              changeFilterData('active')
            }} > Active </button><br /><br />


            <button onClick={() => {
              console.log('completed')
              // handleFilterSubmit('completed')
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
