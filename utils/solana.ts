import * as anchor from "@coral-xyz/anchor"
import { Idl } from "@coral-xyz/anchor"
import idl from "./idl/noyeah.json";
import { Connection, PublicKey } from "@solana/web3.js";
import { NoyeahC } from "@/types/noyeah_ctype";

export const programId = new PublicKey("2S2ztAYPLzQN3McM2jJqNhoycahBMpyEc1tvNLBdR2qv");

const connection = new Connection("https://api.devnet.solana.com", 'confirmed');

export default async function getProgram(wallet: anchor.Wallet){
    const provider = new anchor.AnchorProvider(connection, wallet, {preflightCommitment: "confirmed"} )
    anchor.setProvider(provider);
    return new anchor.Program(idl as unknown as NoyeahC, provider);
}



