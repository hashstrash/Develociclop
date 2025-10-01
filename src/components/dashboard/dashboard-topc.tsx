import { useEffect, useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { connection, sendInstruction, readPda } from '@/lib/solanaHelper'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'


const TopCont = () => {
  return (
   
    <div className="grid grid-cols-1 h-10 bggrad  w-full rounded-md justify-items-center items-center text-6xl text-center">
      
      {/* <h1 className="flex-1">tokenpo</h1> */}
      {/* <img src="src/img/logobig.svg" alt="" className='w-150 ' /> */}
    </div>
  )
}

export default TopCont
