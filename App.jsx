import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = ()=>{

    const[inputList,setInputList]=useState("");
    const[items,setItems]=useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) =>{
            return [...oldItems,inputList];
        });
    };
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                      <h1>ToDo List</h1>
                    <br/>
                    <input type="text" placeholder="Add a item" value={inputList} onChange={itemEvent}/>
                    <button onClick={listOfItems}> + </button>
                    
                    <ol>
                        {
                            items.map((itemVal) => {
                              return <ToDoList text={itemVal} />;
                            })
                        }
                    </ol>

                </div>
            </div>
        </>
    );
};

export default App;