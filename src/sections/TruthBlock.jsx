import { motion } from 'framer-motion'

export function TruthBlock() {
  return (
    <section className="relative overflow-hidden bg-[#061424] px-6 py-24 lg:px-10">
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-torque-orange/10 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-torque-blue/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-5 inline-flex rounded-full border border-torque-orange/30 bg-torque-orange/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-torque-orange2">
            A verdade que a agência comum não te conta
          </p>
          <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
            Não existe lead qualificado. <span className="text-torque-orange">Existe processo que revela intenção.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-torque-slate">
            Quem investe alto em móveis planejados não decide no impulso. Pesquisa, compara, conversa com a família, mede confiança e só avança quando o processo ajuda essa decisão acontecer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="glass-card rounded-[2rem] p-6 lg:p-8"
        >
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/6 p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-torque-orange2">O erro comum</p>
              <p className="mt-3 text-xl font-black text-white">Tratar todo cadastro como oportunidade.</p>
              <p className="mt-3 text-sm leading-6 text-torque-slate">Nome e telefone não dizem se o cliente está pronto, curioso, comparando ou apenas pesquisando preço.</p>
            </div>
            <div className="rounded-3xl border border-torque-orange/25 bg-torque-orange/10 p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-torque-orange2">O método Torque</p>
              <p className="mt-3 text-xl font-black text-white">Usar perguntas de proxy para ler sinais de compra.</p>
              <p className="mt-3 text-sm leading-6 text-torque-slate">Sem revelar a inteligência proprietária, identificamos sinais de intenção, maturidade e potencial para orientar prioridade comercial.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/6 p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-torque-orange2">O ganho real</p>
              <p className="mt-3 text-xl font-black text-white">Seu time atende com mais contexto.</p>
              <p className="mt-3 text-sm leading-6 text-torque-slate">A loja continua fechando na mesa. A Torque organiza o antes da venda para reduzir achismo e aumentar clareza.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
