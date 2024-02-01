import { useEffect, useState } from "react"
import { connection, serverUrl, testWallet } from "@/utils/helper"


export const useHolding = async() => {
      // const [holding, setHolding] = useState({ balance: 0, associatedAccount: [] })
      const res = await fetch(`${serverUrl}/solana/holding?walletAddress=${testWallet}`)
      const data = await res.json();

      // useEffect(() => {
      //   const fetchTokenHolding = async() => {
      //      try {
      //        const res = await fetch(`${serverUrl}/solana/holding?walletAddress=${testWallet}`)
      //        const data = await res.json();
      //        console.log(data)
      //        setHolding(data)
      //      } catch(err) {
      //         console.log(err)
      //      }
      //   } 

      //   fetchTokenHolding()

      // }, [])

      return data
}