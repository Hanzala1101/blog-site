import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import validator from "validator";
import * as jose from 'jose'
import bcrypt from 'bcrypt'

export async function GET() {
    return NextResponse.json({
        "id": "hanzala"
    })
}

export async function POST(request) {
    const res = await request.json();

    const errors = []
    const validatorSchema = [
        {
            valid: validator.isLength(res.first_name, {
                min: 3
            }),
            errorMessage: "First enter is not vailid"
        },
        {
            valid: validator.isLength(res.last_name, {
                min: 3
            }),
            errorMessage: "Last name enter is not vailid"
        },
        {
            valid: validator.isEmail(res.email),
            errorMessage: "Email is enter is not vailid"
        },
        {
            valid: validator.isStrongPassword(res.password),
            errorMessage: "password entered is not strong"
        }
    ]

    validatorSchema.forEach((check) => {
        if (!check.valid) {
            errors.push(check.errorMessage)
        }
    })

    if (errors.length) {
        return new NextResponse(JSON.stringify({ errorMessage: errors[0] }),{Status:400})
    }

    await connectMongoDB();

    const usersWithEmail = await User.findOne({ email: res.email })

    if (usersWithEmail) {
        return new NextResponse(JSON.stringify({ errorMessage: "Account is already created " }),{status:400})
    }

    const hashpassword = await bcrypt.hash(res.password, 10)
    
    await User.create({ admin:false ,first_name: res.first_name, last_name: res.last_name, email: res.email, password: hashpassword })

    const alg = "HS256"
    const signature = new TextEncoder().encode(process.env.JWT_SECRET)
    const token = await new jose.SignJWT({ email: res.email })
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .sign(signature)

    const response = NextResponse.json({
        admin:false,
        first_name:res.first_name,
        last_name:  res.last_name,
        email:  res.email
    },{status:200})

    response.cookies.set({
        name: "jwt",
        value: token,
        maxAge: 60 * 60 * 24
      });

    return response;
}