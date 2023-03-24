import React from 'react'

function Todo({listitem,handleDelete,handleDone}) {
    const handleTrash = (id)=>{
        console.log(id)
        handleDelete(id)
    }
    return (
        <div className='todoitem' >
            <li  className={listitem.completed?"completed":""}>
                <p>{listitem.text}</p>
               <div style={{display:"flex"}}>
               <i className="fa-solid fa-check"  style={{marginLeft:'10px'}} onClick={()=>{handleDone(listitem.id)}}></i>
               <i className="fa-solid fa-trash" onClick={()=>{handleTrash(listitem.id)}}></i>
               </div>
            </li>
        </div>
    )
}

export default Todo
