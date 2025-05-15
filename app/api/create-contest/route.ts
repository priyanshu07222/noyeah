import prisma from "@/lib/prisma";
import getProgram from "@/utils/solana";
import { BN, web3 } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { Responsive } from "@tsparticles/engine";

export async function POST(req: Request) {
    const {title, entry_fee, end_time, wallet} = await req.json();

    if(!title || !entry_fee || !end_time || !wallet){
        Response.json({
            message: "All fields are required"
        })
    }

    // convert the dateTime into unixtimestamp and BN
    // convert Lamport into BN

    


    const program = await getProgram(wallet);

    const [createContestPDA] = await web3.PublicKey.findProgramAddress([Buffer.from("contest"), Buffer.from(title)], program.programId)
    const [contestVaultPDA] = await web3.PublicKey.findProgramAddress([Buffer.from("vault"), createContestPDA.toBuffer()], program.programId)
    
    const tx = await program
        .methods
        .createContest(title, new BN(end_time), new BN(entry_fee) )
        .accounts({
            payer: new PublicKey(wallet.publicKey),
            createContest: createContestPDA,
            contestVaultAccount: contestVaultPDA,
            systemProgram: web3.SystemProgram.programId
        })
        .signers([])
        .rpc()

    Response.json({
        success: true,
        tx
    })
    
}


export async function GET(){
    await prisma.contest.findMany({where: {}})
}