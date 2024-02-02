import { NextRequest, NextResponse } from "next/server"
import Redis from 'ioredis';
import { headers } from "@/utils/helper"

const redis_client = new Redis({
  host: process.env.REDIS_DB_HOST,
  password: process.env.REDIS_DB_PASSWORD,
  port: process.env.REDIS_DB_PORT,
  db: 0 
});

redis_client.on('error', function (err) {
  console.error('Redis error:', err);
});

export async function GET(request, response) {
    const searchParams = request.nextUrl.searchParams
    const walletAddress = searchParams.get("walletAddress");

   try{
    const val = await redis_client.get(walletAddress);
    console.log('val', val);
   
    return NextResponse.json({ rewards: val }, { headers, status: 200 })

  } catch(error){
    console.error(error);
     return NextResponse.json({ rewards: "0" }, { headers, status: 401 })
  }

}




    


    //  4CvBHXkcZHTsxoJSkjy47ebxtqviuHSVmfCCArekTXXa

