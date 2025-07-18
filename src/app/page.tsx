
import{ tasks } from '../../public/database/tasks'
import { Trash2, CirclePlus } from "lucide-react"
export default function (){
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
          <div key={elem.id} className={`relative tasks-view mt-8 bg-cyan-600 ${elem.bgColor} `}>
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
