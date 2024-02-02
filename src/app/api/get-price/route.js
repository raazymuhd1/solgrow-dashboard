import { NextRequest, NextResponse } from "next/server"
import { headers } from "@/utils/helper"
import axios from "axios"

const PAIR_ADDRESS = '2nugi2lr5fy5rnxyrk67emkua2wywoya1wmbczkrrf2y';

export async function GET(request, response) {

    try {
      const response = await axios.get(
        `https://api.dexscreener.com/latest/dex/pairs/solana/${PAIR_ADDRESS}`
      );
  
      const data = response.data;
      const pairs = data.pairs;
      const pair = pairs[0];
      const marketCap = pair.fdv;
      const priceUsd = pair.priceUsd;
  
      return NextResponse.json({ priceInUsd: priceUsd, marketCap }, { headers, status: 200 })

    } catch (error) {
      console.error('Error fetching DexScreener data:', error);
      return NextResponse.json({ errMsg: error }, { headers, status: 500 })
    }

}




    


    //  4CvBHXkcZHTsxoJSkjy47ebxtqviuHSVmfCCArekTXXa

