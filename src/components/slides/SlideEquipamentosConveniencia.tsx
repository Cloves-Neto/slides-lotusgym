import React from 'react';
import { GlassWater, Armchair, DollarSign, Wrench, Building2, CheckCircle2, ShoppingBag } from 'lucide-react';

export const SlideEquipamentosConveniencia: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-10 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <ShoppingBag className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 12 • EQUIPAMENTOS & MONETIZAÇÃO DE CONVENIÊNCIA</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-yellow-400 uppercase tracking-tight">
          Refil de Isotônico & Cadeiras de Massagem
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Análise de viabilidade financeira, custos de aquisição, locação em SBC (São Bernardo do Campo) e manutenção.
        </p>
      </div>

      {/* Main Grid: 2 Heavy Equipment Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-auto">
        {/* Machine 1: Refil de Isotônico */}
        <div className="p-5 bg-zinc-900 border-2 border-yellow-400 flex flex-col justify-between space-y-4 relative">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[10px] font-mono font-bold bg-yellow-400 text-black px-2 py-0.5 uppercase">
                EQUIPAMENTO 01
              </span>
              <GlassWater className="w-5 h-5 text-yellow-400" />
            </div>

            <h3 className="text-lg font-black text-yellow-400 uppercase tracking-wide">
              Máquina Automática de Refil de Isotônico
            </h3>

            <p className="text-xs text-zinc-300 leading-relaxed">
              Dispenser automático com tela touch/PIX para liberação de isotônicos, BCAAs e bebidas energéticas geladas antes e depois do treino.
            </p>

            {/* Financial Details Grid */}
            <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-xs">
              <div className="p-2.5 bg-black border border-zinc-800">
                <span className="text-[9px] text-zinc-400 block uppercase">VALOR DE COMPRA</span>
                <span className="text-sm font-bold text-white block mt-0.5">R$ 18k - 25k</span>
                <span className="text-[9px] text-zinc-500">por unidade</span>
              </div>

              <div className="p-2.5 bg-black border border-yellow-500/50">
                <span className="text-[9px] text-yellow-400 block uppercase font-bold">ALUGUEL EM SBC</span>
                <span className="text-sm font-bold text-yellow-400 block mt-0.5">R$ 650 - 900</span>
                <span className="text-[9px] text-zinc-400">mensal / máquina</span>
              </div>

              <div className="p-2.5 bg-black border border-zinc-800">
                <span className="text-[9px] text-zinc-400 block uppercase">CUSTO MANUTENÇÃO</span>
                <span className="text-sm font-bold text-white block mt-0.5">R$ 150 - 250</span>
                <span className="text-[9px] text-zinc-500">mês (ou incluso)</span>
              </div>
            </div>

            <div className="p-3 bg-zinc-950 border-l-2 border-yellow-400 text-xs space-y-1">
              <span className="font-bold text-white uppercase text-[11px] block">Modelo de Monetização Sugerido:</span>
              <ul className="text-zinc-300 space-y-0.5 text-[11px]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                  <span><strong>Plano Refil Pass:</strong> R$ 29,90/mês para uso ilimitado (Atrai +300 alunos/mês = R$ 8.970/mês).</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                  <span><strong>Dose Avulsa no PIX:</strong> R$ 5,00 por refil de 500ml.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono text-yellow-400">
            <span>• RECOMENDAÇÃO SBC: LOCAÇÃO INICIAL COM MANUTENÇÃO INCLUSA</span>
            <Building2 className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Machine 2: Cadeira de Massagem */}
        <div className="p-5 bg-zinc-900 border-2 border-yellow-400 flex flex-col justify-between space-y-4 relative">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[10px] font-mono font-bold bg-yellow-400 text-black px-2 py-0.5 uppercase">
                EQUIPAMENTO 02
              </span>
              <Armchair className="w-5 h-5 text-yellow-400" />
            </div>

            <h3 className="text-lg font-black text-yellow-400 uppercase tracking-wide">
              Cadeira de Massagem Profissional (Vending)
            </h3>

            <p className="text-xs text-zinc-300 leading-relaxed">
              Cadeira de massagem corporal 3D/4D para relaxamento miofascial e recuperação muscular pós-treino, com acionamento por fichas ou QR Code.
            </p>

            {/* Financial Details Grid */}
            <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-xs">
              <div className="p-2.5 bg-black border border-zinc-800">
                <span className="text-[9px] text-zinc-400 block uppercase">VALOR DE COMPRA</span>
                <span className="text-sm font-bold text-white block mt-0.5">R$ 12k - 18k</span>
                <span className="text-[9px] text-zinc-500">por cadeira</span>
              </div>

              <div className="p-2.5 bg-black border border-yellow-500/50">
                <span className="text-[9px] text-yellow-400 block uppercase font-bold">ALUGUEL EM SBC</span>
                <span className="text-sm font-bold text-yellow-400 block mt-0.5">R$ 450 - 700</span>
                <span className="text-[9px] text-zinc-400">mês (ou comodato 50/50)</span>
              </div>

              <div className="p-2.5 bg-black border border-zinc-800">
                <span className="text-[9px] text-zinc-400 block uppercase">CUSTO MANUTENÇÃO</span>
                <span className="text-sm font-bold text-white block mt-0.5">R$ 120 - 200</span>
                <span className="text-[9px] text-zinc-500">mês/unidade</span>
              </div>
            </div>

            <div className="p-3 bg-zinc-950 border-l-2 border-yellow-400 text-xs space-y-1">
              <span className="font-bold text-white uppercase text-[11px] block">Modelo de Monetização Sugerido:</span>
              <ul className="text-zinc-300 space-y-0.5 text-[11px]">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                  <span><strong>Sessão de 10 min no PIX:</strong> R$ 10,00 por sessão (Média de 20 usos/dia = R$ 6.000/mês).</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                  <span><strong>Gatilho de Matrícula:</strong> Cortesia de 1 sessão/semana para membros VIP.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono text-yellow-400">
            <span>• RECOMENDAÇÃO SBC: COMODATO ZERO CUSTO OU LOCAÇÃO FIXA</span>
            <Wrench className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Summary Callout Banner */}
      <div className="p-3.5 bg-zinc-900 border-l-4 border-yellow-400 border-t border-r border-b border-zinc-800 flex items-center justify-between text-xs font-mono">
        <span className="text-white font-bold uppercase">
          RESULTADO FINANCEIRO: A soma de Refil + Massagem gera receita recorrente de R$ 12k a R$ 15k/mês cobrindo os custos fixos de locação.
        </span>
        <span className="text-yellow-400 font-bold hidden sm:inline">
          RETORNO RÁPIDO & DADOS SBC
        </span>
      </div>
    </div>
  );
};
