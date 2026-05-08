import { trackEvent } from '../config/tracking'

export function Button({ href, children, variant = 'primary', eventName = 'cta_click', className = '' }) {
  const styles = {
    primary:
      'bg-torque-orange text-white hover:bg-torque-orange2 shadow-glow border border-torque-orange/60',
    secondary:
      'bg-white/8 text-torque-cream hover:bg-white/12 border border-white/15',
    ghost: 'text-torque-cream hover:text-white border border-transparent'
  }

  return (
    <a
      href={href}
      onClick={() => trackEvent(eventName, { label: typeof children === 'string' ? children : 'cta' })}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
