import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { siteConfig } from '../config/site'

const steps = [
  {
    number: '01',
    title: 'Setup inicial da operação',
    description:
      'Planejamento de campanha, estrutura de captação, perguntas de proxy, organização do CRM e leitura inicial do funil.',
    highlight: 'R$ 4.500 em até 3x',
    note: 'ou R$ 3.900 à vista'
  },
  {
    number: '02',
    title: 'Investimento em mídia',
    description:
      'A verba de mídia é separada e vai direto para a conta de anúncios da sua operação. Recomendamos volume mínimo para gerar leitura consistente.',
    highlight: 'A partir de R$ 2.000/mês',
    note: 'em Meta Ads'
  },
  {
    number: '03',
    title: 'Comissão sobre venda fechada',
    description:
      'Depois do setup, não existe mensalidade fixa para a Torque. Nosso ganho acontece quando a venda acontece.',
    highlight: '3% sobre venda fechada',
    note: 'originada pela operação estruturada'
  }
]

export function PartnershipModel() {
  return (
    <section id="modelo" className="relative overflow-hidden bg-torque-dark px-6 py-28 lg:px-10">
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-torque-orange/10 blur-3xl" />
      <div className="absolute -right-32 bottom-16 h-96 w-96 rounded-full bg-torque-blue/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-torque-orange">Modelo de parceria</p>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
              Sem mensalidade. Com skin in the game.
            </h2>
          </div>
          <div className="max-w-2xl text-lg leading-8 text-torque-slate">
            <p>
              Antes de colocar qualquer campanha no ar, fazemos o planejamento, o setup da captação, a estrutura de CRM e a leitura inicial da operação.
            </p>
            <p className="mt-5 text-white/86">
              Depois disso, a Torque não cobra mensalidade fixa. Nosso modelo é simples: a gente ganha quando a venda acontece.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-card relative overflow-hidden rounded-[2rem] p-7"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-torque-orange/10 blur-2xl" />
              <p className="font-display text-5xl font-black text-white/10">{step.number}</p>
              <h3 className="mt-8 text-2xl font-black tracking-[-0.03em] text-white">{step.title}</h3>
              <p className="mt-4 min-h-[96px] text-sm leading-6 text-torque-slate">{step.description}</p>
              <div className="mt-7 rounded-3xl border border-torque-orange/25 bg-torque-orange/10 p-5">
                <p className="font-display text-2xl font-black tracking-[-0.04em] text-torque-orange2">{step.highlight}</p>
                <p className="mt-1 text-sm font-semibold text-white/62">{step.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.74fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-lg leading-8 text-torque-slate">
            <b className="text-white">Regra de clareza:</b> a comissão incide sobre vendas fechadas provenientes dos leads captados, registrados e acompanhados dentro da operação estruturada pela Torque, conforme critérios alinhados em contrato.
          </div>
          <div className="rounded-[2rem] border border-torque-orange/30 bg-torque-orange/10 p-8">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-torque-orange2">Resumo</p>
            <p className="mt-4 text-2xl font-black leading-snug text-white">
              Você investe em mídia. A Torque estrutura o processo. Sua equipe conduz a venda. Quando vende, crescemos juntos.
            </p>
            <Button href={siteConfig.whatsappUrl} className="mt-8">Quero agendar uma reunião</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
