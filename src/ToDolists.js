import React from "react";

const ToDoLists = ({ data, onCheck }) => {

    return (
        <>
            <div className='todo_style'>
                <div>
                    <input type="checkbox" id={data.text} name={data.text} checked={data.checked}
                        onChange={() => onCheck(data.text)}
                    /><label for="scales">{data.text}</label>
                </div>

            </div>
        </>
    );
};

export default ToDoLists;



