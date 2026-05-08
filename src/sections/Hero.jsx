import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { siteConfig } from '../config/site'

function FloatingMetric({ className, label, value, tone = 'orange' }) {
  const toneClass = tone === 'orange' ? 'text-torque-orange2' : 'text-white'

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className={`glass-card rounded-2xl px-4 py-3 ${className}`}
    >
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">{label}</p>
      <p className={`mt-1 font-display text-xl font-black ${toneClass}`}>{value}</p>
    </motion.div>
  )
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      <div className="absolute -inset-8 rounded-[3rem] bg-torque-orange/20 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 34, rotate: 3 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="relative rounded-[3.1rem] border border-white/20 bg-[#0A0E13] p-3 shadow-phone"
      >
        <div className="rounded-[2.55rem] border border-white/10 bg-[#F3F6F8] p-3 text-torque-navy">
          <div className="mx-auto mb-3 h-5 w-24 rounded-full bg-[#0A0E13]" />
          <div className="rounded-[2rem] bg-[#E9EEF2] p-3">
            <div className="mb-4 flex items-center gap-3 border-b border-slate-300/70 pb-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-torque-orange text-lg font-black text-white">T</div>
              <div>
                <p className="text-sm font-black leading-tight">Torque Digital</p>
                <p className="text-[11px] font-semibold text-slate-500">relatório diário entregue agora</p>
              </div>
            </div>

            <div className="rounded-[1.45rem] bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.12)]">
              <p className="font-display text-lg font-black leading-tight text-torque-navy">📊 Relatório Diário</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">Loja de Planejados · Hoje</p>

              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-2xl bg-slate-100 p-3">
                  <p className="text-slate-500">Investido</p>
                  <p className="mt-1 font-black">R$ 126,40</p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-3">
                  <p className="text-slate-500">Leads</p>
                  <p className="mt-1 font-black">10</p>
                </div>
                <div className="rounded-2xl bg-orange-50 p-3">
                  <p className="text-slate-500">CPL médio</p>
                  <p className="mt-1 font-black text-torque-orange">R$ 12,64</p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-3">
                  <p className="text-slate-500">CTR</p>
                  <p className="mt-1 font-black">3,18%</p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-xs">
                <div className="rounded-2xl border border-orange-100 bg-orange-50 p-3">
                  <p className="font-black">Apartamentos 3 Quartos</p>
                  <p className="mt-1 text-slate-600">6 leads · CPL R$ 8,90 ✅</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <p className="font-black">Cozinhas Planejadas</p>
                  <p className="mt-1 text-slate-600">4 leads · CPL R$ 18,25 ⚠️</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-torque-navy p-3 text-xs leading-5 text-white">
                <b>Leitura da Torque:</b> manter verba em apartamentos e reforçar abordagem nos qualificados.
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <FloatingMetric className="absolute -left-8 top-20 hidden lg:block" label="CPL vencedor" value="R$ 8,90" />
      <FloatingMetric className="absolute -right-10 bottom-24 hidden lg:block" label="Agendamentos" value="2" tone="white" />
    </div>
  )
}

export function Hero() {
  const { scrollYProgress } = useScroll()
  const chalkY = useTransform(scrollYProgress, [0, 0.45], [0, 90])
  const gridY = useTransform(scrollYProgress, [0, 0.45], [0, -60])

  return (
    <section className="noise-mask relative min-h-screen overflow-hidden bg-torque-dark blueprint-grid">
      <motion.div style={{ y: gridY }} className="absolute inset-0 bg-radialTorque" />
      <div className="absolute inset-0 blueprint-lines opacity-80" />
      <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-torque-orange/24 blur-3xl" />
      <div className="absolute -left-32 bottom-10 h-[30rem] w-[30rem] rounded-full bg-torque-navy/70 blur-3xl" />

      <motion.div style={{ y: chalkY }} className="absolute left-8 top-28 hidden opacity-20 lg:block">
        <svg width="520" height="520" viewBox="0 0 420 420" fill="none" className="chalk-line">
          <path d="M60 120H360L245 330H150L60 120Z" stroke="#F8FBFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M83 150L330 145L230 215L83 150Z" stroke="#F8FBFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M120 225L280 210L210 278L120 225Z" stroke="#F8FBFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="130" cy="62" r="22" stroke="#F8FBFF" strokeWidth="8" />
          <circle cx="215" cy="52" r="18" stroke="#F8FBFF" strokeWidth="8" />
          <circle cx="285" cy="78" r="14" stroke="#F8FBFF" strokeWidth="8" />
        </svg>
      </motion.div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Logo />
        <Button href={siteConfig.whatsappUrl} className="hidden sm:inline-flex">Quero agendar uma reunião</Button>
      </header>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-104px)] max-w-7xl items-center gap-14 px-6 pb-20 pt-8 lg:grid-cols-[1.06fr_0.94fr] lg:px-10">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <p className="mb-5 inline-flex rounded-full border border-torque-orange/35 bg-torque-orange/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-torque-orange2">
            Growth para lojas de móveis planejados
          </p>
          <h1 className="font-display max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.075em] text-white md:text-7xl lg:text-8xl">
            Pare de Pagar por Leads. <span className="text-torque-orange">Comece a Pagar por Vendas.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-torque-slate md:text-xl">
            A Torque estrutura o antes da venda: captação, perguntas de proxy, CRM e leitura comercial para o dono saber o que entrou, o que avançou e onde agir.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={siteConfig.whatsappUrl}>Quero agendar uma reunião</Button>
            <Button href="#metodo" variant="secondary">Entender o método</Button>
          </div>
          <div className="mt-8 grid max-w-2xl gap-3 text-sm text-white/58 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Sem promessa milagrosa.</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Sem lead tratado como sorte.</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Com skin in the game.</div>
          </div>
        </motion.div>

        <PhoneMockup />
      </div>
    </section>
  )
}
