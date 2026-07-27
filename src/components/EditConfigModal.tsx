import React, { useState } from 'react';
import { X, Save, RotateCcw, UserCheck, BarChart3 } from 'lucide-react';
import { PresenterConfig, GymMetrics } from '../types';

interface EditConfigModalProps {
  presenterConfig: PresenterConfig;
  gymMetrics: GymMetrics;
  onSaveConfig: (newConfig: PresenterConfig, newMetrics: GymMetrics) => void;
  onClose: () => void;
  isDarkMode: boolean;
}

export const EditConfigModal: React.FC<EditConfigModalProps> = ({
  presenterConfig,
  gymMetrics,
  onSaveConfig,
  onClose,
  isDarkMode
}) => {
  const [config, setConfig] = useState<PresenterConfig>({ ...presenterConfig });
  const [metrics, setMetrics] = useState<GymMetrics>({ ...gymMetrics });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(config, metrics);
    onClose();
  };

  const handleReset = () => {
    setConfig({
      presenterName: 'Cloves Neto',
      presenterTitle: 'CONSULTOR LOTUSGYM',
      year: '2024',
      contactEmail: 'clovesneto@lotusgym.com.br',
      contactPhone: '11967338685'
    });
    setMetrics({
      activeMembers: 5404,
      monthlyChurn: 0,
      avgTicket: 0,
      monthlyLeads: 0,
      conversionRate: 0,
      npsScore: 0,
      unpaidRate: 0
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="w-full max-w-2xl border border-[#333333] shadow-2xl bg-[#000000] text-white">
        {/* Header */}
        <div className="p-4 border-b border-[#333333] bg-[#111111] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-[#FFD700]" />
            <h2 className="text-xs font-bold text-white tracking-widest uppercase">
              CONFIGURAR DADOS DA APRESENTAÇÃO & NÚMEROS DA LOTUSGYM
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-[#000000] hover:bg-[#222222] text-zinc-400 hover:text-white border border-[#333333] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-6 bg-[#000000]">
          {/* Presenter Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FFD700] uppercase">
              <UserCheck className="w-4 h-4" />
              <span>1. Informações do Apresentador / Consultor</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-zinc-400 font-mono mb-1 uppercase">Nome Completo</label>
                <input
                  type="text"
                  value={config.presenterName}
                  onChange={(e) => setConfig({ ...config, presenterName: e.target.value })}
                  className="w-full bg-[#111111] border border-[#333333] px-3 py-1.5 text-white font-medium focus:border-[#FFD700] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-mono mb-1 uppercase">Cargo / Especialidade</label>
                <input
                  type="text"
                  value={config.presenterTitle}
                  onChange={(e) => setConfig({ ...config, presenterTitle: e.target.value })}
                  className="w-full bg-[#111111] border border-[#333333] px-3 py-1.5 text-white font-medium focus:border-[#FFD700] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-mono mb-1 uppercase">E-mail de Contato</label>
                <input
                  type="email"
                  value={config.contactEmail}
                  onChange={(e) => setConfig({ ...config, contactEmail: e.target.value })}
                  className="w-full bg-[#111111] border border-[#333333] px-3 py-1.5 text-white font-medium focus:border-[#FFD700] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-mono mb-1 uppercase">Telefone / WhatsApp</label>
                <input
                  type="text"
                  value={config.contactPhone}
                  onChange={(e) => setConfig({ ...config, contactPhone: e.target.value })}
                  className="w-full bg-[#111111] border border-[#333333] px-3 py-1.5 text-white font-medium focus:border-[#FFD700] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Baseline Gym Metrics */}
          <div className="space-y-3 pt-4 border-t border-[#333333]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FFD700] uppercase">
              <BarChart3 className="w-4 h-4" />
              <span>2. Números Atuais da Operação LotusGym (Diagnóstico)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block text-zinc-400 font-mono mb-1 uppercase">Alunos Ativos</label>
                <input
                  type="number"
                  value={metrics.activeMembers}
                  onChange={(e) => setMetrics({ ...metrics, activeMembers: Number(e.target.value) })}
                  className="w-full bg-[#111111] border border-[#333333] px-3 py-1.5 text-white font-mono focus:border-[#FFD700] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-mono mb-1 uppercase">Ticket Médio (R$)</label>
                <input
                  type="number"
                  step="0.10"
                  value={metrics.avgTicket}
                  onChange={(e) => setMetrics({ ...metrics, avgTicket: Number(e.target.value) })}
                  className="w-full bg-[#111111] border border-[#333333] px-3 py-1.5 text-white font-mono focus:border-[#FFD700] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-mono mb-1 uppercase">Churn Mensal (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={metrics.monthlyChurn}
                  onChange={(e) => setMetrics({ ...metrics, monthlyChurn: Number(e.target.value) })}
                  className="w-full bg-[#111111] border border-[#333333] px-3 py-1.5 text-white font-mono focus:border-[#FFD700] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-mono mb-1 uppercase">Leads Mês</label>
                <input
                  type="number"
                  value={metrics.monthlyLeads}
                  onChange={(e) => setMetrics({ ...metrics, monthlyLeads: Number(e.target.value) })}
                  className="w-full bg-[#111111] border border-[#333333] px-3 py-1.5 text-white font-mono focus:border-[#FFD700] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-mono mb-1 uppercase">Conversão Vendas (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={metrics.conversionRate}
                  onChange={(e) => setMetrics({ ...metrics, conversionRate: Number(e.target.value) })}
                  className="w-full bg-[#111111] border border-[#333333] px-3 py-1.5 text-white font-mono focus:border-[#FFD700] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-mono mb-1 uppercase">Inadimplência (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={metrics.unpaidRate}
                  onChange={(e) => setMetrics({ ...metrics, unpaidRate: Number(e.target.value) })}
                  className="w-full bg-[#111111] border border-[#333333] px-3 py-1.5 text-white font-mono focus:border-[#FFD700] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-[#333333] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 bg-[#111111] hover:bg-[#222222] text-zinc-300 text-xs font-mono flex items-center gap-1.5 border border-[#333333] cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restaurar Padrão
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-[#111111] hover:bg-[#222222] text-zinc-300 text-xs font-bold border border-[#333333] cursor-pointer uppercase"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#FFD700] hover:bg-[#ffe033] text-black text-xs font-bold flex items-center gap-1.5 border border-[#FFD700] cursor-pointer uppercase"
              >
                <Save className="w-4 h-4" />
                Salvar Alterações
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
