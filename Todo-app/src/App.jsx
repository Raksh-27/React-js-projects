import { useState } from 'react';
import './App.css';
import Todoinput from './Components/Todoinput';
import TodoList from './Components/TodoList';

function App() {
  const [Listtodo, setlisttodo] = useState([]);
  const [isEditing, setIsEditing] = useState(null); // Track the item being edited

  const deleteitems = (key) => {
    let ListItems = [...Listtodo];
    ListItems.splice(key, 1);
    setlisttodo(ListItems);
  };

  const addList = (inputText) => {
    setlisttodo([...Listtodo, inputText]);
  };

  const editItem = (key, newText) => {
    let ListItems = [...Listtodo];
    ListItems[key] = newText;     
    setlisttodo(ListItems);
    setIsEditing(null); 
  };

  return (
    <>
      <div className="main">
        <div className="Box">
          <div id="Todo">
            <Todoinput addList={addList} />
            {Listtodo.map((items, i) => {
              return (
                <TodoList
                  key={i}
                  index={i}
                  items={items}
                  delItems={deleteitems}
                  editItem={editItem}
                  isEditing={isEditing === i} // Pass if the current item is being edited
                  setIsEditing={setIsEditing} // Pass the function to toggle edit mode
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
