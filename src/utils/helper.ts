// import idl from "../idl/solana_hello_world.json";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

export const serverUrl = "http://localhost:4000/api"
export const serverUrl2 = "/api"
export const testWallet = "4CvBHXkcZHTsxoJSkjy47ebxtqviuHSVmfCCArekTXXa"

/* Constants for RPC Connection the Solana Blockchain */
export const commitmentLevel = "processed";
export const endpoint =
  process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL || clusterApiUrl("devnet");
export const connection = new Connection(endpoint, commitmentLevel);

export const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

/* Constants for the Deployed "Hello World" Program */
// export const reflectdprogramId = new PublicKey(idl.metadata.address);
// export const reflectprogramInterface = JSON.parse(JSON.stringify(idl));
