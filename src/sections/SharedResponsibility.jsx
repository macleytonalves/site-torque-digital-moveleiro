import { Button } from '../components/Button'
import { siteConfig } from '../config/site'

const left = ['Foca em lead', 'Mede formulário', 'Entrega campanha', 'Olha sua loja de fora']
const right = ['Foca em processo', 'Mede avanço comercial', 'Organiza captação + CRM + atendimento', 'Opera a mesma guerra do lojista']

export function SharedResponsibility() {
  return (
    <section className="bg-torque-cream px-6 py-24 text-torque-navy lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-torque-orange">Responsabilidade compartilhada</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em] md:text-6xl">
            A Torque não vende por você. Trabalha para vender junto com você.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Mantenha o que sua loja já faz de melhor: sentar com o cliente, apresentar projeto, construir confiança, negociar e fechar. A Torque cuida do que vem antes: atrair, filtrar, organizar e mostrar onde a oportunidade está avançando ou travando.
          </p>
          <Button href={siteConfig.whatsappUrl} className="mt-8">Solicitar análise da operação</Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-6 shadow-card">
            <h3 className="text-xl font-black">Agência comum</h3>
            <div className="mt-5 space-y-3">
              {left.map((item) => <p key={item} className="rounded-2xl bg-slate-100 p-3 text-sm font-semibold text-slate-600">{item}</p>)}
            </div>
          </div>
          <div className="rounded-[2rem] bg-torque-navy p-6 text-white shadow-card">
            <h3 className="text-xl font-black">Torque Digital</h3>
            <div className="mt-5 space-y-3">
              {right.map((item) => <p key={item} className="rounded-2xl bg-white/10 p-3 text-sm font-semibold text-white/84">{item}</p>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
