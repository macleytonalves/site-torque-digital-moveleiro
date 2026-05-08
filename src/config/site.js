export const siteConfig = {
  name: 'Torque Digital',
  legalName: 'Torque Marketing e Gestão LTDA',
  cnpj: '59.582.047/0001-53',
  instagram: 'https://www.instagram.com/torquedigitalmkt/',
  address: 'Rua Boaventura da Silva, 771 — Nazaré, Belém-PA',
  whatsappNumber: '5591984070470',
  whatsappMessage: 'Quero agendar uma reunião!',
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`
  },
  seo: {
    title: 'Torque Digital | Pare de Pagar por Leads',
    description:
      'A Torque Digital estrutura captação, qualificação, CRM e processo comercial para lojas de móveis planejados. Pare de pagar por leads. Comece a pagar por vendas.'
  }
}
