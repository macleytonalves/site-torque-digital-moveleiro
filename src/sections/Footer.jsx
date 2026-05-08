import { Logo } from '../components/Logo'
import { siteConfig } from '../config/site'

export function Footer() {
  return (
    <footer className="bg-torque-dark px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo />
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">
            {siteConfig.legalName} · CNPJ {siteConfig.cnpj}<br />
            {siteConfig.address}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-white/65 md:text-right">
          <a className="hover:text-white" href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a className="hover:text-white" href={siteConfig.whatsappUrl}>WhatsApp: 91 98407-0470</a>
        </div>
      </div>
    </footer>
  )
}
