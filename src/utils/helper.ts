// import idl from "../idl/solana_hello_world.json";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

export const serverUrl = "http://localhost:4000/api"
export const testWallet = "4CvBHXkcZHTsxoJSkjy47ebxtqviuHSVmfCCArekTXXa"

/* Constants for RPC Connection the Solana Blockchain */
export const commitmentLevel = "processed";
export const endpoint =
  process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL || clusterApiUrl("devnet");
export const connection = new Connection(endpoint, commitmentLevel);

/* Constants for the Deployed "Hello World" Program */
// export const reflectdprogramId = new PublicKey(idl.metadata.address);
// export const reflectprogramInterface = JSON.parse(JSON.stringify(idl));
