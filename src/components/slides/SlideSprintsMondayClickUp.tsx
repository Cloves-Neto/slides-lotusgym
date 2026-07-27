import React from 'react';
import { Kanban, CheckCircle, Clock, AlertCircle, User, Tag, Calendar } from 'lucide-react';

export const SlideSprintsMondayClickUp: React.FC = () => {
  const sprintTasks = [
    {
      task: 'Cotação & Contrato Refil Isotônico em SBC',
      responsible: 'Gestão / Compras',
      sprint: 'Sprint 1 (Agosto)',
      priority: 'Alta',
      status: 'Concluído',
      category: 'Equipamentos',
      statusColor: 'bg-emerald-500 text-black font-bold'
    },
    {
      task: 'Acordo Locação/Comodato Cadeira Massagem',
      responsible: 'Gestão / Compras',
      sprint: 'Sprint 1 (Agosto)',
      priority: 'Alta',
      status: 'Em Andamento',
      category: 'Equipamentos',
      statusColor: 'bg-amber-400 text-black font-bold'
    },
    {
      task: 'Treinamento Ativo de Balcão (Doses Diárias)',
      responsible: 'Joceli / Recepção',
      sprint: 'Sprint 2 (Setembro)',
      priority: 'Urgente',
      status: 'Pronto p/ Iniciar',
      category: 'Comercial Joceli',
      statusColor: 'bg-blue-500 text-white font-bold'
    },
    {
      task: 'Instalação Física e Ativação no Balcão',
      responsible: 'Manutenção / TI',
      sprint: 'Sprint 2 (Setembro)',
      priority: 'Alta',
      status: 'Pronto p/ Iniciar',
      category: 'Operação',
      statusColor: 'bg-blue-500 text-white font-bold'
    },
    {
      task: 'Promoção em Eventos Internos & Corridas',
      responsible: 'Jéssica / Mkt',
      sprint: 'Sprint 3 (Outubro)',
      priority: 'Média',
      status: 'A Agendar',
      category: 'Ações Jéssica',
      statusColor: 'bg-zinc-700 text-zinc-300'
    },
    {
      task: 'Lançamento Linha Fitness (Roupas & Acessórios)',
      responsible: 'Jéssica / Compras',
      sprint: 'Sprint 3 (Outubro)',
      priority: 'Média',
      status: 'A Agendar',
      category: 'Ações Jéssica',
      statusColor: 'bg-zinc-700 text-zinc-300'
    },
    {
      task: 'Estruturação Espaço Cafeteria & Chás',
      responsible: 'Joceli / Operações',
      sprint: 'Sprint 4 (Novembro)',
      priority: 'Média',
      status: 'A Agendar',
      category: 'Comercial Joceli',
      statusColor: 'bg-zinc-700 text-zinc-300'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-10 bg-black text-white select-none overflow-hidden border border-zinc-800">
      {/* Title Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest mb-1">
          <Kanban className="w-4 h-4 text-yellow-400" />
          <span>SLIDE 21 • PLANO ESTRATÉGICO DE SPRINTS (MONDAY.COM / CLICKUP)</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h2 className="text-2xl md:text-3xl font-black text-yellow-400 uppercase tracking-tight">
            Quadro de Governança & Gestão de Sprints
          </h2>
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-3 py-1 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-200 font-bold uppercase">BOARD MONDAY / CLICKUP SPRINT SYNC</span>
          </div>
        </div>
        <p className="text-xs text-zinc-300 mt-1 font-light">
          Acompanhamento semanal de tarefas, entregáveis, responsáveis e níveis de prioridade do projeto LotusGym.
        </p>
      </div>

      {/* Simulated Monday/ClickUp Board Container */}
      <div className="bg-zinc-950 border-2 border-yellow-400 p-4 my-auto overflow-x-auto">
        <div className="min-w-[700px]">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 text-[10px] font-mono font-bold text-zinc-400 bg-zinc-900 p-2.5 border-b border-zinc-800 uppercase">
            <div className="col-span-4 flex items-center gap-1.5">
              <Kanban className="w-3.5 h-3.5 text-yellow-400" />
              <span>TAREFA ESTRATÉGICA</span>
            </div>
            <div className="col-span-2 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-zinc-400" />
              <span>RESPONSÁVEL</span>
            </div>
            <div className="col-span-2 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-zinc-400" />
              <span>SPRINT</span>
            </div>
            <div className="col-span-2 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-zinc-400" />
              <span>PRIORIDADE</span>
            </div>
            <div className="col-span-2 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-zinc-400" />
              <span>STATUS</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-zinc-800 text-xs font-mono">
            {sprintTasks.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-2 p-2.5 items-center hover:bg-zinc-900/60 transition-colors">
                <div className="col-span-4 font-bold text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 shrink-0" />
                  <span className="truncate">{item.task}</span>
                </div>

                <div className="col-span-2 text-zinc-300 text-[11px] truncate">
                  {item.responsible}
                </div>

                <div className="col-span-2 text-yellow-400 font-bold text-[11px]">
                  {item.sprint}
                </div>

                <div className="col-span-2">
                  <span className={`text-[10px] px-2 py-0.5 uppercase ${
                    item.priority === 'Urgente' ? 'bg-red-950 text-red-400 border border-red-700 font-bold' :
                    item.priority === 'Alta' ? 'bg-yellow-950 text-yellow-400 border border-yellow-700 font-bold' :
                    'bg-zinc-900 text-zinc-400 border border-zinc-800'
                  }`}>
                    {item.priority}
                  </span>
                </div>

                <div className="col-span-2">
                  <span className={`text-[10px] px-2 py-1 uppercase tracking-wider block text-center ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Callout */}
      <div className="p-3.5 bg-zinc-900 border-l-4 border-yellow-400 border-t border-r border-b border-zinc-800 flex items-center justify-between text-xs font-mono">
        <span className="text-white font-bold uppercase">
          CONTROLE TOTAL: Reuniões de alinhamento de 15 minutos às segundas-feiras via quadro Monday / ClickUp.
        </span>
        <span className="text-yellow-400 font-bold hidden sm:inline">
          SPRINTS SEMANAIS
        </span>
      </div>
    </div>
  );
};
