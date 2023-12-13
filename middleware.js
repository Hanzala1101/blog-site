import { NextResponse } from "next/server";
import * as jose from 'jose'

export default async function middleware(request){
    
    const barearToken =  request.headers.get("Authorization");

    if(!barearToken){
        return new NextResponse(JSON.stringify({
            errorMessage:"Barear token not define"
        }),{status:401})
    }

    const Token = barearToken.split(" ")[1]

    if(!Token){
        return new NextResponse(JSON.stringify({
            errorMessage:"token Not define"
        }),{status:401})
    }
    const signature = new TextEncoder().encode(process.env.JWT_SECRET)
    try {
        await jose.jwtVerify(Token, signature)
    } catch (error) {
        return new NextResponse(JSON.stringify({
            errorMessage:"Unauthorized request"
        }),{status:401})
    }
}

export const config = {
    matcher: ['/api/auth/me']
}