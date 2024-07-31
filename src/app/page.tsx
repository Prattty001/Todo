import Addtodo from '@/Components/Addtodo'
import Navbar from '@/Components/Navbar'
import Todos from '@/Components/Todos'
import React from 'react'
import "./globals.css"
import { RiCalendarTodoFill } from "react-icons/ri";
const page = () => {
  return (
    <main>

      <h2><RiCalendarTodoFill className='icons' /> Todo NEXT + Typescript <RiCalendarTodoFill className='icons' /></h2>
      <Navbar />
      <Addtodo />
      <Todos />
      
    </main>
  )
}

export default page
