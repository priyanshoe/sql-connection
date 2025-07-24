"use client"

import { useEffect, useState } from 'react'
import { Trash2, CirclePlus } from "lucide-react"
import { useRouter } from 'next/navigation'
import { NextResponse } from 'next/server';




export default function (){

  const router = useRouter();
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const data = await fetch('/api/posts')
        const response = await data.json()
        setTasks(response)
        // console.log(response);
      }catch(error){
        console.log(error);
        
      }
      
    }
    fetchData();
   
  },[])

const handleDelete = async (id: number) => {
  try {
    const res = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    })

    if (res.ok) {
      alert('Task deleted')
      // Optionally refresh task list
      window.location.reload() // or refetch tasks from DB
    } else {
      const data = await res.json()
      alert('Error: ' + data.error)
    }
  } catch (error) {
    console.error(error)
    alert('Something went wrong')
  }
}


  return(
  <div className="main w-full h-full bg-zinc-800 p-4">

    <div className="nav flex justify-between">
      <h1 className="text-4xl font-extrabold">To-Do List</h1>
      <button onClick={ () => router.push('/addTask')}>
        <CirclePlus size={36} />
      </button>
    </div>

    <div className='task-container'>

      {
        tasks.map((elem:{
          id: number,
          bgcolor: string,
          name: string,
          description: string
        }) => (
          <div key={elem.id} className={`relative tasks-view mt-8  ${elem.bgcolor} `}>
            <h2 className="text-2xl font-medium">{elem.name}</h2>
            <h3 className="text-base w-9/10 ml-2">{elem.description}</h3>
            <button 
            className="absolute right-4 top-1"
            onClick={() => handleDelete(elem.id)}>
              <Trash2 />
            </button>
          </div>

        ))
      }

    </div>


  </div>

  
)}