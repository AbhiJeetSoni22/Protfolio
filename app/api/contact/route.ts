import { NextResponse } from "next/server";


interface ContentBodyType{
    name:string;
    email:string;
    message:string;
}
export async function POST(request:Request){
    try {
        await request.json() as ContentBodyType;
        return NextResponse.json({message:'message sent successfully'},{status:200});
        
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Failed to send message";
        return NextResponse.json({
            message:errorMessage,
            status:500
        })
    }
}