import React from 'react'
import Todo from './Todo'
import './Todolist.css'

function Todolist({ todo,setTodo,filterTodo}) {
    // delete todo
    const handleDelete = async(id) => {
        console.log(id)
     
       setTodo(todo.filter((data)=>{
        if(data.id != id){
            return data
        }
       }))
       
    }
    // set todo
    const handleDone = (id)=>{
        
                setTodo(todo.map((ele)=>{
                    if(ele.id === id){
                        return {
                            ...ele,completed:!ele.completed
                        }
                    }
                    else{
                        return ele
                    }
                }))
                console.log(id)
                // filterTodoHandler()
    }

    return (
        <div className="todo-container">
          
                {
                    filterTodo.map((listitem) => {
                        return (
                            <Todo listitem={listitem} handleDelete={handleDelete} key={listitem.id} handleDone={handleDone}/>
                        )
                    })
                }
          
        </div>
    )
}

export default Todolist
