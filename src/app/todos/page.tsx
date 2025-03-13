'use client';

import Link from "next/link"
import { useEffect, useState } from "react";


interface Todo{
    id: number;
    todo: string,
    completed: boolean
}

const Page = () =>{
    const [todos, setTodos] = useState<Todo[]>();
    const [show, isLoading] = useState(true);

    useEffect(() => {
        const fetchTodos = async () => {
          try {
            isLoading(true)
            const res = await fetch('https://dummyjson.com/todos') 
            const data = await res.json();
            setTodos(data.todos);
          } catch (e) {
            console.error(e);
            
          } finally{
            isLoading(false)
          }
        }

        fetchTodos();
    }, [])
    return (
        <div className="py-5">
            <div className=" px-7">
    <Link href={'/'} className="text-xl transform ease-in-out hover:text-slate-400 duration-75">Back</Link>
             </div>

    <h1 className="text-center text-3xl font-bold  mb-5 " >All Todos</h1>

  
   {
    show? 
    <div>Loading...</div>
     :
      <table className="w-3/4 mx-auto border">
    <thead>
        <tr>
            <th>Todo</th>
            <th>Completed</th>  
        </tr>
    </thead>
    <tbody>
       {todos?.map(p => (
        <tr key={p.id}>
            <td>{p.todo}</td>
            <td className={`${p.completed? 'text-green-500' : 'text-red-500'}`}>{p.completed? 'Yes': 'No'}</td>
        </tr>
       ) )}
    </tbody>
</table>
   }
  
        </div>
    )
}

export default Page