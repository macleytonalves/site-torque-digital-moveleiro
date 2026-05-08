const decisions = [
  ['Entrou', 'O contato chegou pela campanha.'],
  ['Decidiu responder', 'Mostrou abertura mínima para conversa.'],
  ['Revelou contexto', 'Informou momento, ambiente, imóvel ou intenção.'],
  ['Investiu tempo', 'Aceitou conversar, enviar medidas ou agendar.'],
  ['Comparou', 'Entrou em fase ativa de escolha.'],
  ['Fechou', 'Virou contrato na mão do seu time.']
]

export function Method() {
  return (
    <section id="metodo" className="bg-torque-dark px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-torque-orange">Método Torque</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-6xl">
            A Torque não mede só tarefas. Mede decisões.
          </h2>
          <p className="mt-6 text-lg leading-8 text-torque-slate">
            No mercado de planejados, o funil não anda porque uma tarefa foi feita. O funil anda quando o cliente assume uma nova decisão.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {decisions.map(([title, text], index) => (
            <div key={title} className="glass-card rounded-3xl p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-torque-orange text-lg font-black text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-torque-slate">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-lg leading-8 text-torque-slate">
          <b className="text-white">Perguntas de proxy, sem revelar a inteligência proprietária:</b> usamos sinais de intenção, maturidade e potencial de compra para entender quem está só pesquisando, quem merece prioridade e onde o atendimento deve concentrar energia.
        </div>
      </div>
    </section>
  )
}
