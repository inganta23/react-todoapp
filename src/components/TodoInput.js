const TodoInput = ({input , handleChange, handleSubmit, edit, editSubmit}) => {
    return ( 
       <div className="card card-body my-3">
           <form onSubmit={edit ? editSubmit : handleSubmit}>
               <div className="input-group">
                   <div className="input-group-prepend">
                       <div className="input-group-text bg-primary text-white">
                           <i className="fas fa-book"></i>
                           
                       </div>
                   </div>
                   <input 
                        type="text" 
                        className="form-control text-capitalize" 
                        placeholder="add a todo item"
                        value={input}
                        onChange={handleChange}/>
               </div>
               <button type="submit" 
                className={edit ? "btn btn-success mt-3 col-12" : "btn btn-primary mt-3 col-12"}>
                   {edit ? 'Update item' : 'add item'}</button>
           </form>
           

       </div>
     );
}
 
export default TodoInput;