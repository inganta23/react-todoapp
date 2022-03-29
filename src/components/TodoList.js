import TodoItem from "./TodoItem";


const TodoList = ({items, clearList, handleDelete, handleEdit, edit}) => {
    return (  
       <ul className="list-group my-5">
           <h3 className="text-capitalize text-center">todo list</h3>
            {
                items.map(item => {
                    return(
                        <TodoItem 
                            key={item.id} 
                            title={item.title}
                            edit={edit}
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)}/>
                    )
                })
            }
           
            
            <button 
                type="button" 
                className="btn btn-danger text-capitalize mt-5"
                onClick ={clearList}    
            >clear list</button>
                
       </ul>

    );
}
 
export default TodoList;