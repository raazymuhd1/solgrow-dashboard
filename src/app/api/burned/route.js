import { NextRequest, NextResponse } from "next/server"
import { TOKEN_2022_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { connection } from "@/utils/helper"

const DECIMALS = 9;
const TOKEN_ADDRESS = 'ADZaQNyQfU3uPDkrqPkxuG6GzDBEYQ3gMXFXTNSqXr1G';
const PAIR_ADDRESS = '2nugi2lr5fy5rnxyrk67emkua2wywoya1wmbczkrrf2y';

const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }

export async function GET(request, response) {

    
    return NextResponse.json({ msg: "ok" }, { headers, status: 200 })

}




    


    //  4CvBHXkcZHTsxoJSkjy47ebxtqviuHSVmfCCArekTXXa

