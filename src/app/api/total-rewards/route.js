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
    
    try{
        const val = await redis_client.get('totalBalance');
        console.log('val', val);

        return NextResponse.json({ totalRewards: val }, { headers, status: 200 })

  } catch(error){
        console.error(error);
         return NextResponse.json({ error: error }, { headers, status: 500 })
  }

}




    


    //  4CvBHXkcZHTsxoJSkjy47ebxtqviuHSVmfCCArekTXXa

