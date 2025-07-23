import { NextResponse } from 'next/server'
import { createConnection } from '../../lib/db'

export async function GET(){
    try{
        const db = await createConnection();
        const sql = 'select * from tasks;';
        const [posts] = await db.query(sql)
        return NextResponse.json(posts)
    }
    catch(error){
        console.log(error);
        return NextResponse.json({error: "Fectching data unsuccess"})
        
    }
}

export async function POST(req: Request) {
  try {
    const db = await createConnection()
    const body = await req.json()

    const { name, description } = body

    if (!name || !description) {
      return NextResponse.json({ error: 'Missing name or description' }, { status: 400 })
    }

    const sql = 'INSERT INTO tasks (name, description) VALUES (?, ?)'
    const [result] = await db.query(sql, [name, description])

    return NextResponse.json({ message: 'Task added successfully', result })
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}