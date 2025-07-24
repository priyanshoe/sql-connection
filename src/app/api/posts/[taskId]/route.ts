import { createConnection } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function  DELETE(req:Request, {params}:{params:{taskId:Number}}){
    const {taskId} = await params;
    try{
        
        const db = await createConnection();
        const sql = 'DELETE from tasks where id = ?';
        const result = await db.query(sql, [taskId]);

        return NextResponse.json({message: 'Task deleted successfully', result})
    }catch(error: any){
        return NextResponse.json({error: error.message},{status:500})
    }
}