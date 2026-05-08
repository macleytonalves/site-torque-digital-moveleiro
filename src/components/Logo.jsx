export function Logo({ variant = 'light', className = '' }) {
  const textColor = variant === 'dark' ? '#071B33' : '#F5F0E8'

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="Torque Digital">
      <svg width="42" height="42" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <circle cx="70" cy="48" r="18" fill="#FF6A00" />
        <circle cx="123" cy="37" r="15" fill="#FF7A00" />
        <circle cx="166" cy="62" r="13" fill="#FF8A1E" />
        <circle cx="199" cy="89" r="10" fill="#FF6A00" />
        <path d="M24 95H224L157 225L24 95Z" fill="#FF6A00" />
        <path d="M44 111L204 103L145 152L44 111Z" fill="#FF8A1E" />
        <path d="M61 139L181 128L128 180L61 139Z" fill="#E95700" />
        <path d="M93 178L151 161L129 222L93 178Z" fill="#FF7A00" />
        <path d="M40 108L207 102" stroke="#071B33" strokeWidth="10" strokeLinecap="round" />
        <path d="M66 137L179 126" stroke="#071B33" strokeWidth="10" strokeLinecap="round" />
        <path d="M96 177L151 160" stroke="#071B33" strokeWidth="10" strokeLinecap="round" />
      </svg>
      <div className="leading-none">
        <div className="text-xl font-black tracking-tight" style={{ color: textColor }}>TORQUE</div>
        <div className="text-[10px] font-semibold tracking-[0.38em]" style={{ color: textColor, opacity: 0.78 }}>DIGITAL</div>
      </div>
    </div>
  )
}
