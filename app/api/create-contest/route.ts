import prisma from "@/lib/prisma";
import getProgram from "@/utils/solana";
import { BN, web3 } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { Responsive } from "@tsparticles/engine";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    console.log("inside the api/create-contest")
    const {title, entry_fee, end_time, signature} = await req.json();

    if(!title || !entry_fee || !end_time || !signature){
        return NextResponse.json({
            message: "All fields are required"
        })
    }

    console.log(title, end_time, entry_fee, signature, "back to the game")

    // convert the dateTime into unixtimestamp and BN
    // convert Lamport into BN

    return NextResponse.json({
        success: true,
        message: "done"
        // tx
    })
    
}


export async function GET(){
    await prisma.contest.findMany({where: {}})
}