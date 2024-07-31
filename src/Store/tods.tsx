"use client"
import { createContext, ReactNode, useContext, useState } from "react";


 export type Todo ={
  id: string;
  task: string;
  completed: boolean;
}

 export type TodoContextType ={
  todos: Todo[];
  handleAddtodo: (task: string) => void;
 toggletodo : (id:string)=>void;
 handledelete : (id:string)=>void;

}

export const todoContext = createContext<TodoContextType | null>(null);

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, settodo] = useState<Todo[]>(()=>{
    const newTodos = localStorage.getItem("todos") || "[]";
    return JSON.parse(newTodos) as Todo[];
  });

  const handleAddtodo = (task: string) => {

    settodo((prev)=>{
        const newTodo : Todo[]=[
            {
                id: Math.random().toString(),
                task,
                completed: false,
              },
              ...prev
            ]
            localStorage.setItem("todos",JSON.stringify(newTodo))
            return newTodo;
    }
)


  };
//if the task is done !..
const toggletodo = (id:string)=>{
settodo((prev)=>{
  const newTodo = prev.map((task)=>{
    if(task.id===id){
      return {...task, completed : !task.completed}
    }
    return task
  })
  localStorage.setItem("todos",JSON.stringify(newTodo))
  return newTodo;
})
}

//delet the task!..
const handledelete = (id:string)=>{
settodo((prev)=>{
  const newTodo = prev.filter((task)=>task.id!==id)
  localStorage.setItem("todos",JSON.stringify(newTodo))
return newTodo 
})
}

  return (
    <todoContext.Provider value={{ todos, handleAddtodo,toggletodo,handledelete }}>
      {children}
    </todoContext.Provider>
  );
};


//context Api!..

export function useTodo(){
    const todocontextvalue = useContext(todoContext);
    if(!todocontextvalue){
        throw new Error("used outside the provider");
    }
    return todocontextvalue
}