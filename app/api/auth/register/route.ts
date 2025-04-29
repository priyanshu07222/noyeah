import prisma from "@/lib/prisma";
import bcrypt from "bcrypt"
import { signIn } from "next-auth/react";

export async function POST(req: Request) {
    const {name, email, password} = await req.json();

    if (!email || !password) {
        return Response.json({message: "All fields are required"}, {status: 400})
    }

    try {
        const isUserAlreadyExist = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (isUserAlreadyExist){
            return Response.json({ error: 'Email already exists' }, { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name: name ? name : "Anonymous",
                email: email,
                passwordHash: hashedPassword
            }
        })

        await signIn('credentials', email, password);
        return Response.json({ message: 'User created', user: { id: user.id, name, email } }, { status: 201 });
    } catch (error:any) {
        return Response.json({
            message: error.message
        }, {status: 500})
    }

    
}