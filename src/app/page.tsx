"use client"

import { useEffect, useState } from 'react'
import { Trash2, CirclePlus } from "lucide-react"




export default function (){

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


  return(
  <div className="main w-full h-screen bg-zinc-800 p-4">

    <div className="nav flex justify-between">
      <h1 className="text-4xl font-extrabold">To-Do List</h1>
      <button>
        <CirclePlus size={36} />
      </button>
    </div>

    <div className='task-container'>

      {
        tasks.map((elem) => (
          <div key={elem.id} className={`relative tasks-view mt-8  ${elem.bgcolor} `}>
            <h2 className="text-2xl font-medium">{elem.name}</h2>
            <h3 className="text-base w-9/10 ml-2">{elem.description}</h3>
            <button className="absolute right-4 top-1">
              <Trash2 />
            </button>
          </div>

        ))
      }

    </div>


  </div>

  
)}
