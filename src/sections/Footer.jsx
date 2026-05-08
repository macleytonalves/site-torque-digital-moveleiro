import { motion } from 'framer-motion'
import { Logo } from '../components/Logo'
import { siteConfig } from '../config/site'

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M16.04 4C9.42 4 4.04 9.28 4.04 15.78c0 2.08.56 4.11 1.62 5.89L4 28l6.5-1.62A12.3 12.3 0 0 0 16.04 27.6C22.66 27.6 28 22.32 28 15.78S22.66 4 16.04 4Z"
        fill="currentColor"
      />
      <path
        d="M22.75 19.23c-.3.82-1.48 1.5-2.16 1.6-.58.09-1.32.13-2.13-.13-.5-.16-1.14-.37-1.95-.72-3.43-1.47-5.66-4.84-5.83-5.07-.17-.23-1.4-1.84-1.4-3.5 0-1.67.88-2.49 1.2-2.83.3-.32.68-.4.91-.4h.66c.2 0 .5-.08.78.6.3.72 1 2.47 1.08 2.65.09.18.14.4.03.63-.1.23-.16.37-.33.57-.17.2-.35.44-.5.58-.17.17-.35.35-.15.7.2.34.9 1.45 1.92 2.35 1.32 1.15 2.43 1.5 2.78 1.68.35.17.56.14.77-.09.2-.23.88-1 1.12-1.35.23-.35.47-.3.8-.17.32.11 2.05.95 2.4 1.12.35.17.58.26.66.4.09.14.09.8-.21 1.62Z"
        fill="#071B33"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-torque-dark px-6 py-12 lg:px-10">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-torque-orange/10 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo />
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">
            {siteConfig.legalName} · CNPJ {siteConfig.cnpj}<br />
            {siteConfig.address}
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 text-sm text-white/65 md:items-end md:text-right">
          <motion.a
            href={siteConfig.whatsappUrl}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-torque-orange/40 bg-torque-orange px-5 py-3 font-black text-white shadow-glow transition hover:bg-torque-orange2"
          >
            <motion.span
              animate={{ scale: [1, 1.14, 1], rotate: [0, -6, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-torque-orange"
            >
              <WhatsAppIcon />
            </motion.span>
            <span>Quero agendar uma reunião</span>
          </motion.a>

          <motion.a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-5 py-3 font-bold text-white/82 transition hover:border-torque-orange/40 hover:bg-white/12 hover:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-torque-orange">
              <InstagramIcon />
            </span>
            <span>Instagram</span>
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
