import { NextResponse } from "next/server";
import {headers} from 'next/headers'
import jwt from "jsonwebtoken";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";

export async function GET(request){
    const headersInstance = headers()
    const barearToken =  headersInstance.get("Authorization")

    const Token = barearToken.split(" ")[1]

    const payload = jwt.decode(Token)
    await connectMongoDB();
    const userWithEmail = await User.findOne({email:payload.email}).select("admin first_name last_name email")
    
    return NextResponse.json({
        admin:userWithEmail?.admin,
        first_name:userWithEmail?.first_name,
        last_name:userWithEmail?.last_name,
        email:userWithEmail?.email
    })
}