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
        // return NextResponse.json({error: error.message})
        
    }
}