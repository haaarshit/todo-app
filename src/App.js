import { useEffect, useState } from 'react';
import './App.css'
import Form from './componets/Form';
import Todolist from './componets/Todolist';

function App() {
  // states
  const [inputdata,setInputData] = useState("")
  const [todo,setTodo] = useState([])
  const [filter,setFilter] = useState('all')
  const [filterTodo,setFilterTodo] = useState([])
  // fucntions
  const filterTodoHandler = ()=>{
    console.log(1)
    switch(filter){
      case 'completed':
        setFilterTodo(todo.filter(data=>{
          if(data.completed === true){
            return data
          }
        }))
        break;
      case 'uncompleted':
        setFilterTodo(todo.filter(data=>{
          if(data.completed === false){
            return data
          }
        }))
        break;
      default:
        setFilterTodo(todo)
      
    }
  }
  useEffect(()=>{

    filterTodoHandler()
  }
  ,[filter,todo])
  return (
    <>
      <div className="App">
        <header>
          <h1 className='todolist-heading'>MY TO-DO LIST</h1>
        </header>
        <div className="mainbox">
          <div className="search">
            <Form setInputData= {setInputData} setTodo={setTodo} todo={todo} setFilter={setFilter} filterTodoHandler={filterTodoHandler} filterTodo={filterTodo}  />
          </div>
          <div className="list">
               <Todolist todo={todo} filterTodo={filterTodo} setTodo={setTodo} filterTodoHandler={filterTodoHandler}/>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
