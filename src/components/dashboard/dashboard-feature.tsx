
import { WavyBackground } from "../ui/wavy-background";
import {BtnBuy} from "./btnbuy";
// import Game from './game';
import React, { useEffect, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { connection, sendInstruction, readPda } from "@/lib/solanaHelper";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

interface HistoryRecord {
  player: number;
  program: number;
  result: number;
}

export default function DashboardFeature() {
  const wallet = useWallet();
  const [solBalance, setSolBalance] = useState<number>(0);
  const [credits, setCredits] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [history, setHistory] = useState<HistoryRecord[]>([]);

  // Atualiza saldo SOL
  const fetchSolBalance = async () => {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);
      setSolBalance(balance / LAMPORTS_PER_SOL);
    }
  };

  // Atualiza dados do PDA
  const fetchGameData = async () => {
    if (wallet.publicKey) {
      try {
        const data = await readPda(wallet.publicKey);
        setCredits(data.credits);
        setScore(data.score);
        setHistory(data.history);
      } catch (err) {
        console.error("Erro lendo PDA:", err);
      }
    }
  };

  useEffect(() => {
    if (wallet.connected) {
      fetchSolBalance();
      fetchGameData();
    }
  }, [wallet.connected]);

  const handleBuyCredit = async () => {
    try {
      await sendInstruction(wallet, 0xff);
      await fetchSolBalance();
      await fetchGameData();
      alert("Créditos comprados!");
    } catch (err) {
      console.error(err);
      alert("Erro ao comprar créditos");
    }
  };

  const handlePlay = async (choice: number) => {
    try {
      await sendInstruction(wallet, choice);
      await fetchGameData();
    } catch (err: any) {
      console.error(err);
      if (err.message.includes("Wallet not connected")) alert("Conecte a carteira primeiro!");
      else if (err.message.includes("Custom(1)")) alert("Sem créditos!");
      else alert("Erro ao jogar");
    }
  };

  const renderResult = (result: number) => {
    if (result === 0) return "❌ Derrota";
    if (result === 1) return "➖ Empate";
    if (result === 2) return "✅ Vitória";
    return "?";
  };

  return (
          <WavyBackground className="max-w-4xl mx-auto pb-40">
             <BtnBuy />
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col items-center space-y-3">
        <h1 className="text-3xl font-bold text-center text-indigo-600">🎮 Jokenpo na Solana</h1>
        <WalletMultiButton />
      </div>

      {/* Status cards */}
      {wallet.connected && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <p className="font-semibold text-gray-600">Saldo SOL</p>
              <p className="text-lg font-bold">{solBalance.toFixed(4)} SOL</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <p className="font-semibold text-gray-600">Créditos</p>
              <p className="text-lg font-bold">{credits}</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow text-center">
              <p className="font-semibold text-gray-600">Score</p>
              <p className="text-lg font-bold">{score}</p>
            </div>
          </div>

          {/* Comprar créditos */}
          <div className="flex justify-center">
            <button
              onClick={handleBuyCredit}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow"
            >
              Comprar Créditos (0.01 SOL)
            </button>
          </div>

          {/* Jogadas */}
          <div className="text-center space-y-4">
            <h3 className="font-semibold text-gray-700">Escolha sua jogada:</h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handlePlay(0)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              >
                ✊ Pedra
              </button>
              <button
                onClick={() => handlePlay(1)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              >
                🖐 Papel
              </button>
              <button
                onClick={() => handlePlay(2)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              >
                ✌ Tesoura
              </button>
            </div>
          </div>

          {/* Histórico */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-2 text-gray-700">Histórico</h3>
            {history.length === 0 ? (
              <p className="text-gray-500 text-sm">Nenhuma partida registrada ainda.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-3 py-2">#</th>
                      <th className="border px-3 py-2">Você</th>
                      <th className="border px-3 py-2">Programa</th>
                      <th className="border px-3 py-2">Resultado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((h, i) => (
                      <tr key={i} className="text-center">
                        <td className="border px-3 py-2">{i + 1}</td>
                        <td className="border px-3 py-2">
                          {h.player === 0 ? "✊ Pedra" : h.player === 1 ? "🖐 Papel" : "✌ Tesoura"}
                        </td>
                        <td className="border px-3 py-2">
                          {h.program === 0 ? "✊ Pedra" : h.program === 1 ? "🖐 Papel" : "✌ Tesoura"}
                        </td>
                        <td className="border px-3 py-2">{renderResult(h.result)}</td>
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
    </WavyBackground>
  );
}