import React from 'react';
import { DollarSign, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

export const SlideROIProjeto: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-12 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <DollarSign className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 21 • ANÁLISE DE VIABILIDADE FINANCEIRA</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-yellow-400 uppercase tracking-tight">
          ROI do Projeto: Investimento vs. Retorno
        </h2>
        <p className="text-xs md:text-sm text-zinc-300 mt-1 font-light">
          Demonstrativo de que o custo da tecnologia é integralmente absorvido pelo ganho imediato de vendas e retenção.
        </p>
      </div>

      {/* Comparative Investment Table */}
      <div className="my-auto border-2 border-yellow-400 bg-zinc-900 overflow-hidden">
        <div className="bg-yellow-400 text-black px-4 py-2 font-mono text-xs font-extrabold grid grid-cols-12 uppercase tracking-wider">
          <div className="col-span-4">COMPONENTE DE INVESTIMENTO</div>
          <div className="col-span-3">CUSTO ESTIMADO</div>
          <div className="col-span-3">RETORNO FINANCEIRO DIRETO</div>
          <div className="col-span-2 text-right">PAYBACK</div>
        </div>

        <div className="divide-y divide-zinc-800 text-xs font-mono">
          <div className="px-4 py-3 grid grid-cols-12 items-center">
            <div className="col-span-4 font-bold text-white">01. Setup do Site + Landing Pages + CRM</div>
            <div className="col-span-3 text-zinc-300">R$ 12.500 (Único)</div>
            <div className="col-span-3 text-yellow-400 font-bold">+50 matrículas no Mês 1 (R$ 7.000/mês)</div>
            <div className="col-span-2 text-right text-emerald-400 font-bold">~45 Dias</div>
          </div>

          <div className="px-4 py-3 grid grid-cols-12 items-center">
            <div className="col-span-4 font-bold text-white">02. Software SaaS (CRM + IA + BI Dashboards)</div>
            <div className="col-span-3 text-zinc-300">R$ 1.850 / mês</div>
            <div className="col-span-3 text-yellow-400 font-bold">Resgate de 15 alunos/mês (R$ 2.100/mês)</div>
            <div className="col-span-2 text-right text-emerald-400 font-bold">Mês 1</div>
          </div>

          <div className="px-4 py-3 grid grid-cols-12 items-center">
            <div className="col-span-4 font-bold text-white">03. Verba de Tráfego Pago (Meta/Google Ads)</div>
            <div className="col-span-3 text-zinc-300">R$ 2.000 / mês</div>
            <div className="col-span-3 text-yellow-400 font-bold">Geração de 350-450 leads qualificados</div>
            <div className="col-span-2 text-right text-emerald-400 font-bold">Imediato</div>
          </div>

          <div className="px-4 py-3 grid grid-cols-12 items-center bg-yellow-400/10">
            <div className="col-span-4 font-black text-yellow-400">TOTAL INVESTIMENTO / MÊS</div>
            <div className="col-span-3 font-black text-white">~R$ 3.850 / mês</div>
            <div className="col-span-3 font-black text-emerald-400">+R$ 28.000 a R$ 45.000/mês de retorno</div>
            <div className="col-span-2 text-right text-yellow-400 font-black">ROI 8.5x</div>
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="p-4 bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
          <ShieldCheck className="w-4 h-4 text-yellow-400 shrink-0" />
          <span>CONCLUSÃO FINACEIRA: O projeto se autofinancia a partir do segundo mês de operação.</span>
        </div>
        <div className="px-3 py-1 bg-yellow-400 text-black text-xs font-mono font-bold shrink-0">
          PAYBACK GLOBAL: &lt; 60 DIAS
        </div>
      </div>
    </div>
  );
};
