import React from "react";

const ToDoLists = ({ data, onCheck }) => {

    const deleteItems = () => {
        // console
    }
    console.log(data,"kkkkkkkkk");
    
    return (
        <>
            <div className='todo_style'>
                {/* <i class="fa fa-times" aria-hidden="true" onClick={deleteItems} /> */}


                <div>
                    <input type="checkbox" id={data.text} name={data.text} checked={data.checked}
                        onChange={() => onCheck(data.text)} />
                    <label for="scales">{data.text}</label>
                </div>
                {/* <div className="item-text">
                    <span style={{strike: data.checked? strike }}> {data.text} </span>
                </div> */}
                {/* <div className="item-remove-div">
                    <button className="item-remove" onClick={() => this.props.onDeleteList(index)}>
                </button>
                </div> */}

            </div>
        </>
    );
};

export default ToDoLists;



