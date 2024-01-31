// import idl from "../idl/solana_hello_world.json";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

/* Constants for RPC Connection the Solana Blockchain */
export const commitmentLevel = "processed";
export const endpoint =
  process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL || clusterApiUrl("devnet");
export const connection = new Connection(endpoint, commitmentLevel);

/* Constants for the Deployed "Hello World" Program */
// export const reflectdprogramId = new PublicKey(idl.metadata.address);
// export const reflectprogramInterface = JSON.parse(JSON.stringify(idl));


export const getProgramId = async() => {
    const pubKey = new PublicKey("4CvBHXkcZHTsxoJSkjy47ebxtqviuHSVmfCCArekTXXa")
    const idl = await connection.getProgramAccounts(pubKey, { commitment: "recent" })
    console.log(idl)
}