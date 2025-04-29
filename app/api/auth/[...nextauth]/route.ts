import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt"
import {PrismaAdapter} from '@auth/prisma-adapter'

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
    }
  }
}

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
        authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
    }),
    CredentialsProvider({
        name: "Credentials",
        credentials: {
            email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
            password: { label: "Password", type: "password" }
        }, 

        async authorize(credentials, req): Promise<any> {
            try {
                const data = credentials
                const email = data?.email;
                const password = data?.password

                if(!email || !password){
                    return Response.json({message: "All fields are required"})
                }
                
                const user = await prisma.user.findFirst({
                    where: { email }
                });

                if(!user){
                    return null;
                }

                const isValidPassword = await bcrypt.compare(password, user.passwordHash as string)
          
                if (isValidPassword) {
                    return { id: user.id, email: user.email, name: user.name }
                } else {
                    return null
                }
            } catch (error: any) {
                console.log(error)
                return null
            }
        }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
      }
      return session;
    }, 
  },
  pages: {
    signIn: "/login",
    error: "/login"
  }
})

export { handler as GET, handler as POST }