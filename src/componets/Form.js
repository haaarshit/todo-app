import React, { useState } from 'react'

import './Form.css'
const Form = ({ todo, setTodo, setFilter,filterTodo}) => {
  const [inputdata, setInputData] = useState("")
  // input handler
  const inputTextHandler = (e) => {
    setInputData(e.target.value)
  }
  // submit handler
  const submitHandler = (e) => {
    console.log("hey");
    if (inputdata) {
      setTodo([
        ...todo, { text: inputdata, completed: false, id: Math.random() * 1000 }
      ])
    } else {
      alert('Can not add empty data')
    }
  }
  // Filter handler
  const filterHandler = (e) => {
    console.log(e.target.value)
    setFilter(e.target.value)
   

  }
  return (
    <div className='form'>
      <form action="">
        <div className="todo-add-button">
          <input type="text" placeholder='Add todo' onChange={(e) => { inputTextHandler(e) }} />
          <i className="fa-solid fa-plus" onClick={(e) => submitHandler(e)}></i>
        </div>
        <div className="select" >
          <select name="" className='filter-todo' onChange={(e) => filterHandler(e)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Form;
