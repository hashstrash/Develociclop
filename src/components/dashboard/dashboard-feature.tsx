import { useEffect, useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { connection, sendInstruction, readPda } from '@/lib/solanaHelper'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
// import SidebarRight from '../chat/sidebar-right'
import { useToaster } from 'src/components/app-toaster'
import TopCont from './dashboard-topc'
import {MainSlider} from "./mainslider"

interface HistoryRecord {
  player: number
  program: number
  result: number
}

export default function DashboardFeature() {
  const wallet = useWallet()
  const [solBalance, setSolBalance] = useState<number>(0)
  const [credits, setCredits] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const [history, setHistory] = useState<HistoryRecord[]>([])
  const [adss, setAdss] = useState<string>()
  // Hook do Toaster
  const { showToast, toast } = useToaster()

  // Atualiza saldo SOL
  const fetchSolBalance = async () => {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey)
      setSolBalance(balance / LAMPORTS_PER_SOL)
    }
  }

  // Atualiza dados do PDA
  const fetchGameData = async () => {
    if (wallet.publicKey) {
      try {
        const data = await readPda(wallet.publicKey)
        setCredits(data.credits)
        setScore(data.score)
        setHistory(data.history)
        setAdss(data.adss)
      } catch (err) {
        console.error('Erro lendo PDA:', err)
      }
    }
  }

  useEffect(() => {
    if (wallet.connected) {
      fetchSolBalance()
      fetchGameData()
    }
  }, [wallet.connected])

  // Comprar créditos
  const handleBuyCredit = async () => {
    try {
      await sendInstruction(wallet, 0xff)
      await fetchSolBalance()
      await fetchGameData()

      // ✅ Sucesso
      showToast({
        type: 1,
        title: 'Sucesso',
        message: 'Créditos comprados com sucesso!',
      })
    } catch (err) {
      console.error(err)

      // ❌ Erro
      showToast({
        type: 2,
        title: 'Erro',
        message: 'Erro ao comprar créditos',
      })
    }
  }

  // Jogar
  const handlePlay = async (choice: number) => {
    try {
      await sendInstruction(wallet, choice)
      await fetchGameData()
    } catch (err: any) {
      console.error(err)
      if (err.message.includes('Wallet not connected')) {
        showToast({
          type: 2,
          title: 'Carteira',
          message: 'Conecte a carteira primeiro!',
        })
      } else if (err.message.includes('Custom(1)')) {
        showToast({
          type: 2,
          title: 'Créditos',
          message: 'Você está sem créditos!',
        })
      } else {
        showToast({
          type: 2,
          title: 'Erro',
          message: 'Erro ao jogar',
        })
      }
    }
  }

  const renderResult = (result: number) => {
    if (result === 0) return '❌ Derrota'
    if (result === 1) return '➖ Empate'
    if (result === 2) return '✅ Vitória'
    return '?'
  }

  return (
    <div>
      <div className="chat-header-cover bg-[#1b1b1b] border-b-2 border-b-zinc-800 custom-shadow-2 p-6 max-w-5xl mx-auto space-y-6">
        {/* Botão de comprar créditos */}
        

        {/* Status cards */}
        <div className="flex justify-center">
          <TopCont />
          
        </div>
<MainSlider />
        {wallet.connected && (
          <div className="space-y-8">
            <button
              onClick={handleBuyCredit}
              className="px-6 py-2 cpm text-white rounded-lg bgbtn transition">Buy 5 Credits (0.01 SOL)</button>
          

            {/* Jogadas============================================================================ */}
            <div className="text-center space-y-4">
              <h3 className="font-semibold text-gray-700">Escolha sua jogada:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 justify-center space-x-4">
                <button
                  onClick={() => handlePlay(0)}
                  className="
                  flex-1 
                  h-50
                  px-4 
                  py-2 
                  bg-yellow-300 
                  border-8 
                  border-white 
                  btnsdc 
                  rounded-lg 
                  overflow-hidden 
                  transition"
                >
                  <img className="relative w-100 -left-10" src="src/img/arms01.svg" alt="" />
                </button>
                <button
                  onClick={() => handlePlay(1)}
                  className="
                  flex-1
                  h-50 
                  px-4 
                  py-2 
                  border-8 
                  border-white 
                  btnsdc 
                  bg-blue-300 
                  overflow-hidden 
                  rounded-lg"
                >
                  <img className="relative w-100 -left-10" src="src/img/arms02.svg" alt="" />
                </button>
                <button
                  onClick={() => handlePlay(2)}
                  className="
                  px-4 
                  py-2 
                  border-8 
                  border-white 
                  btnsdc 
                  bg-fuchsia-300 
                  overflow-hidden
                  h-50
                  rounded-lg 
                  hover:bg-gray-300 
                  transition"
                >
                  <img className="relative w-100 -left-12" src="src/img/arms03.svg" alt="" />
                </button>
              </div>
            </div>
          {/* Jogadas============================================================================ */}
            {/* Histórico */}
              <div className="flex items-center space-y-3">
              <p className="flex-1 text-center font-bold">{solBalance.toFixed(4)} SOL</p>
              <p className="flex-1 text-center font-bold">Credits: {credits}</p>
              <p className="flex-1 text-center font-bold">Score {score}</p>
            </div>
            <div className="bg-[#222222] rounded-xl shadow p-4">
              <h3 className="font-semibold mb-2 text-gray-700 gen-chat">Histórico</h3>
              {history.length === 0 ? (
                <p className="text-gray-500 text-sm">Nenhuma partida registrada ainda.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full border-0 border-gray-200 text-sm">
                    <thead className="bg-[#1a1a1b]">
                      <tr>
                        <th className="border-b-1 px-3 py-2">#</th>
                        <th className="border-b-1 px-3 py-2">Você</th>
                        <th className="border-b-1 px-3 py-2">Programa</th>
                        <th className="border-b-1 px-3 py-2">Resultado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.map((h, i) => (
                        <tr key={i} className="text-center">
                          <td className="border-b-1 px-3 py-2">{i + 1}</td>
                          <td className="border-b-1 px-3 py-2">
                            {h.player === 0 ? '✊ Pedra' : h.player === 1 ? '🖐 Papel' : '✌ Tesoura'}
                          </td>
                          <td className="border-b-1 px-3 py-2">
                            {h.program === 0 ? '✊ Pedra' : h.program === 1 ? '🖐 Papel' : '✌ Tesoura'}
                          </td>
                          <td className="border-b-1 px-3 py-2">{renderResult(h.result)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* <SidebarRight /> */}

      {/* Toaster renderizado */}
      {toast}
    </div>
  )
}
