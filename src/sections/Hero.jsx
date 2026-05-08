import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { siteConfig } from '../config/site'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-torque-dark blueprint-grid">
      <div className="absolute inset-0 bg-radialTorque" />
      <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-torque-orange/20 blur-3xl" />
      <div className="absolute left-8 top-28 hidden opacity-20 lg:block">
        <svg width="420" height="420" viewBox="0 0 420 420" fill="none" className="chalk-line">
          <path d="M60 120H360L245 330H150L60 120Z" stroke="#F5F0E8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M83 150L330 145L230 215L83 150Z" stroke="#F5F0E8" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M120 225L280 210L210 278L120 225Z" stroke="#F5F0E8" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="130" cy="62" r="22" stroke="#F5F0E8" strokeWidth="8" />
          <circle cx="215" cy="52" r="18" stroke="#F5F0E8" strokeWidth="8" />
          <circle cx="285" cy="78" r="14" stroke="#F5F0E8" strokeWidth="8" />
        </svg>
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Logo />
        <Button href={siteConfig.whatsappUrl} className="hidden sm:inline-flex">Quero agendar uma reunião</Button>
      </header>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-104px)] max-w-7xl items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <p className="mb-5 inline-flex rounded-full border border-torque-orange/35 bg-torque-orange/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-torque-orange2">
            Growth para lojas de móveis planejados
          </p>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
            Pare de Pagar por Leads. <span className="text-torque-orange">Comece a Pagar por Vendas.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-torque-slate md:text-xl">
            A Torque estrutura captação, perguntas de proxy, qualificação, CRM e leitura comercial para lojas de planejados que precisam parar de tratar lead como formulário solto.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={siteConfig.whatsappUrl}>Quero agendar uma reunião</Button>
            <Button href="#metodo" variant="secondary">Entender o método</Button>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-6 text-white/54">
            A Torque organiza o antes da venda. Sua equipe continua conduzindo atendimento, projeto, negociação e fechamento.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="glass-card relative mx-auto w-full max-w-md rounded-[2rem] p-5">
          <div className="rounded-[1.6rem] border border-white/10 bg-[#081A2D] p-4">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-torque-orange" />
              <div className="text-sm font-bold text-white">Relatório Diário — Loja de Planejados</div>
            </div>
            <div className="space-y-4 rounded-3xl bg-white p-5 text-torque-navy">
              <div className="text-lg font-black">📊 Relatório Diário</div>
              <div className="border-y border-slate-200 py-3 text-sm leading-7">
                <div>💸 Investido: <b>R$ 126,40</b></div>
                <div>👥 Leads gerados: <b>10</b></div>
                <div>💡 Custo por lead: <b>R$ 12,64</b></div>
                <div>📈 Taxa média de clique: <b>3,18%</b></div>
              </div>
              <div className="grid gap-3 text-sm">
                <div className="rounded-2xl bg-orange-50 p-3">
                  <b>Campanha Apartamentos 3 Quartos</b><br />6 leads | CPL R$ 8,90 ✅
                </div>
                <div className="rounded-2xl bg-slate-100 p-3">
                  <b>Campanha Cozinhas Planejadas</b><br />4 leads | CPL R$ 18,25 ⚠️
                </div>
              </div>
              <div className="rounded-2xl bg-torque-navy p-4 text-sm leading-6 text-white">
                <b>Leitura da Torque:</b><br />Manter verba em apartamentos e reforçar abordagem nos leads qualificados.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
