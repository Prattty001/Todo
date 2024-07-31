"use client";
import { useTodo } from '@/Store/tods';
import React, { FormEvent, useState } from 'react'

const Addtodo = () => {
    const [todo,settodo] = useState('');
    const {handleAddtodo} = useTodo();
    const handleform = (e:FormEvent<HTMLFormElement>)=>{
e.preventDefault();
handleAddtodo(todo);    
settodo("");
    }
  return (
<form onSubmit={handleform}>
    <input type="text"
    placeholder='Enter YOur Todo'
    name=''
    value={todo}
    onChange={(e)=>settodo(e.target.value)}
     />
    <button type='submit'>Add</button>
</form>
  )
}

export default Addtodo
