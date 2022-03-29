import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuid} from 'uuid';
import { useState } from "react";

function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(false);
  const [index , setIndex] = useState(null);

  const handleSubmit = e =>{
    e.preventDefault();
    const newItem = {
      id : uuid(),
      title: input
    }
    console.log(newItem);
    const updatedItems = [...items,newItem];
    setItems(updatedItems);
    setInput('');
    setEdit(false);
  }

  const editSubmit = (e) =>{
    e.preventDefault();
    // console.log(id);
    // const findItem = items.find(item => item.id === id);
    items[index].title = input;
    setItems(items);
    setEdit(false);
    setInput('');
  }

  const handleChange = e =>{
    // console.log(e);
    setInput(e.target.value);
  }

  const clearList = () =>{
    setItems([]);
  }

  const handleDelete = id =>{
    const filteredItems = items.filter(item =>
      item.id !== id );
    setItems(filteredItems);
  }

  const handleEdit = id =>{
    const findItem = items.find(item => item.id === id);
    console.log(findItem);
    setEdit(true);
    setInput(findItem.title)
    setIndex(items.indexOf(findItem));
  } 

  // const handleEdit = id =>{
  //   const findItem = items.find(item => item.id === id);
  //   console.log(findItem);
  //   setInput(findItem.title);
  //   setEdit(true);
  //   setIndex(items.indexOf(findItem));
  // } 


  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">
            Todo Input
          </h3>
            <TodoInput 
                input={input} 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                edit={edit}
                editSubmit={editSubmit} />
            <TodoList
                items={items}
                clearList={clearList} 
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                edit={edit}
                editSubmit={editSubmit}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
