'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddTaskPage() {
  const [task, setTask] = useState({ name: '', description: '' })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Task submitted:', task)
// sending data to database
    await fetch('/api/tasks', { 
        method: 'POST',
        body: JSON.stringify(task)
    })

    router.push('/') // Redirect to home after submission
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add Task</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Task name"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          className="border px-3 py-2 w-full"
          required
        />
        <textarea
          placeholder="Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="border px-3 py-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  )
}
