import { motion } from 'framer-motion'

const decisions = [
  { title: 'Entrou', text: 'O contato chegou pela campanha.', signal: 'Lead bruto', x: '7%', y: '78%' },
  { title: 'Respondeu', text: 'Mostrou abertura real para conversa.', signal: 'Primeiro sinal', x: '23%', y: '64%' },
  { title: 'Revelou contexto', text: 'Informou imóvel, ambiente, momento ou intenção.', signal: 'Contexto real', x: '40%', y: '51%' },
  { title: 'Investiu tempo', text: 'Aceitou conversar, enviar medidas ou agendar.', signal: 'Compromisso', x: '58%', y: '36%' },
  { title: 'Comparou', text: 'Entrou em fase ativa de escolha.', signal: 'Decisão próxima', x: '75%', y: '22%' },
  { title: 'Fechou', text: 'Virou contrato na mão do seu time.', signal: 'Venda', x: '91%', y: '10%' }
]

export function Method() {
  return (
    <section id="metodo" className="relative overflow-hidden bg-torque-dark px-6 py-28 lg:px-10">
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-torque-orange/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-torque-navy/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-torque-orange">Método Torque</p>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight tracking-[-0.05em] text-white md:text-6xl lg:text-7xl">
              A Torque não mede só tarefas. Mede decisões.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-torque-slate">
            No mercado de planejados, a venda não sobe porque alguém cumpriu uma tarefa. Ela sobe quando o cliente assume uma nova decisão — e cada decisão precisa ser lida, priorizada e conduzida.
          </p>
        </div>

        <div className="relative mt-20 hidden min-h-[560px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-white/7 to-white/[0.025] p-10 shadow-card lg:block">
          <div className="absolute inset-0 blueprint-lines opacity-70" />
          <div className="absolute bottom-0 left-0 right-0 h-[240px] bg-gradient-to-t from-torque-navy/70 to-transparent" />

          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 560" fill="none" preserveAspectRatio="none">
            <motion.path
              d="M70 430 C190 390 230 335 330 325 C450 312 480 250 590 238 C720 224 740 150 870 140 C990 130 1020 78 1130 65"
              stroke="rgba(255,106,0,0.95)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="14 16"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.7, ease: 'easeInOut' }}
            />
            <motion.path
              d="M70 455 L260 375 L410 394 L620 270 L820 300 L1130 85 L1130 560 L70 560 Z"
              fill="rgba(255,255,255,0.035)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
          </svg>

          <motion.div
            className="absolute h-5 w-5 rounded-full bg-white shadow-[0_0_28px_rgba(255,255,255,0.95)]"
            style={{ left: '5.5%', top: '76%' }}
            animate={{
              left: ['5.5%', '21.5%', '38.5%', '56.5%', '73.5%', '89.5%', '5.5%'],
              top: ['76%', '62%', '49%', '34%', '20%', '8%', '76%']
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />

          {decisions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 26, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.09 }}
              className="absolute w-[184px]"
              style={{ left: item.x, top: item.y, transform: 'translate(-50%, -50%)' }}
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-torque-orange/50 bg-torque-orange text-xl font-black text-white shadow-glow">
                {index + 1}
              </div>
              <div className="glass-card rounded-[1.45rem] p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-torque-orange2">{item.signal}</p>
                <h3 className="mt-3 text-lg font-black leading-tight text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-torque-slate">{item.text}</p>
              </div>
            </motion.div>
          ))}

          <div className="absolute bottom-8 left-10 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white/70">
            A subida não é de tarefas. É de decisões do cliente.
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
