import { motion } from 'framer-motion'

const decisions = [
  {
    title: 'Entrou',
    text: 'O contato chegou pela campanha.',
    signal: 'Lead bruto'
  },
  {
    title: 'Decidiu responder',
    text: 'Mostrou abertura mínima para conversa.',
    signal: 'Primeiro sinal'
  },
  {
    title: 'Revelou contexto',
    text: 'Informou momento, ambiente, imóvel ou intenção.',
    signal: 'Contexto real'
  },
  {
    title: 'Investiu tempo',
    text: 'Aceitou conversar, enviar medidas ou agendar.',
    signal: 'Compromisso'
  },
  {
    title: 'Comparou',
    text: 'Entrou em fase ativa de escolha.',
    signal: 'Decisão próxima'
  },
  {
    title: 'Fechou',
    text: 'Virou contrato na mão do seu time.',
    signal: 'Venda'
  }
]

export function Method() {
  return (
    <section id="metodo" className="relative overflow-hidden bg-torque-dark px-6 py-28 lg:px-10">
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-torque-orange/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-torque-orange">Método Torque</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
            A Torque não mede só tarefas. Mede decisões.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-torque-slate">
            No mercado de planejados, o funil não anda porque uma tarefa foi feita. O funil anda quando o cliente assume uma nova decisão.
          </p>
        </div>

        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-10 right-10 top-[82px] h-[2px] bg-gradient-to-r from-torque-orange via-white/35 to-torque-orange" />
          <motion.div
            className="absolute left-10 top-[78px] h-[10px] w-[10px] rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.9)]"
            animate={{ x: [0, 1040, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="grid grid-cols-6 gap-4">
            {decisions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative"
              >
                <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-3xl border border-torque-orange/50 bg-torque-orange text-2xl font-black text-white shadow-glow">
                  {index + 1}
                </div>
                <div className="glass-card min-h-[210px] rounded-[1.6rem] p-5">
                  <p className="mb-3 inline-flex rounded-full bg-white/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-torque-orange2">
                    {item.signal}
                  </p>
                  <h3 className="text-xl font-black leading-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-torque-slate">{item.text}</p>
                </div>
                {index < decisions.length - 1 && (
                  <div className="absolute right-[-21px] top-[70px] z-10 text-3xl font-black text-torque-orange">›</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative mt-14 lg:hidden">
          <div className="absolute bottom-8 left-7 top-8 w-[2px] bg-gradient-to-b from-torque-orange via-white/30 to-torque-orange" />
          <div className="space-y-5">
            {decisions.map((item, index) => (
              <div key={item.title} className="relative flex gap-5">
                <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-torque-orange text-lg font-black text-white shadow-glow">
                  {index + 1}
                </div>
                <div className="glass-card flex-1 rounded-3xl p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-torque-orange2">{item.signal}</p>
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-torque-slate">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-torque-orange/30 bg-torque-orange/10 p-8">
            <h3 className="text-2xl font-black tracking-[-0.03em] text-white">Wrong vs Right</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/8 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-torque-orange2">Errado — tarefas</p>
                <p className="mt-3 text-sm leading-6 text-torque-slate">Enviei projeto. Fiz reunião. Mandei follow-up.</p>
                <p className="mt-4 text-xs font-bold text-white/55">Isso é movimento.</p>
              </div>
              <div className="rounded-2xl bg-white/8 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-torque-orange2">Certo — decisões</p>
                <p className="mt-3 text-sm leading-6 text-torque-slate">Cliente decidiu investir tempo. Cliente decidiu comparar.</p>
                <p className="mt-4 text-xs font-bold text-white/55">Isso é avanço.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-lg leading-8 text-torque-slate">
            <b className="text-white">Perguntas de proxy, sem revelar a inteligência proprietária:</b> usamos sinais de intenção, maturidade e potencial de compra para entender quem está só pesquisando, quem merece prioridade e onde o atendimento deve concentrar energia.
          </div>
        </div>
      </div>
    </section>
  )
}
