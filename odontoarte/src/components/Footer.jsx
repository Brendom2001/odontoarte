/* Rodapé — linha superior rosa, logo, links, redes sociais, copyright em DM Mono */

function ToothIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <path
        d="M9.5 4C7.5 4 5 5.5 4.5 8C4 10.5 5 12 5 14C5 16 4 18 4 20C4 22 5.5 24 7 24C8.5 24 9 22 10 20C11 22 11.5 24 14 24C16.5 24 17 22 18 20C19 22 19.5 24 21 24C22.5 24 24 22 24 20C24 18 23 16 23 14C23 12 24 10.5 23.5 8C23 5.5 20.5 4 18.5 4C17 4 15.5 5 14 5C12.5 5 11 4 9.5 4Z"
        fill="#E8437A"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Procedimentos', href: '#procedimentos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer className="bg-texto text-white">
      {/* Linha rosa superior */}
      <div className="h-0.5 bg-rosa" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14">
        <div className="flex flex-col md:flex-row gap-10 justify-between">

          {/* Logo + tagline */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <ToothIcon />
              <span className="font-playfair font-bold text-xl text-white">Odontoarte</span>
            </div>
            <p className="font-jakarta font-light text-white/50 text-sm leading-relaxed">
              Cuidando de gente desde 2014
            </p>
            <p className="font-jakarta font-light text-white/40 text-sm mt-2 leading-relaxed">
              R. Afonso Pena, 49 – Centro<br />
              Sapiranga – RS · (51) 99926-6392
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-white/30 mb-4">
              Navegação
            </p>
            <ul className="flex flex-col gap-2.5 list-none">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-jakarta text-sm text-white/60 hover:text-rosa transition-colors no-underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-white/30 mb-4">
              Redes Sociais
            </p>
            <a
              href="https://www.instagram.com/odontoarte.rs/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white/60 hover:text-rosa transition-colors no-underline group"
            >
              <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-rosa transition-colors">
                <InstagramIcon />
              </span>
              <span className="font-jakarta text-sm">@odontoarte.rs</span>
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p className="font-mono text-xs text-white/25">
            © {new Date().getFullYear()} Odontoarte Clínica Odontológica. Todos os direitos reservados.
          </p>
          <p className="font-mono text-xs text-white/20">
            Sapiranga – RS · CNPJ em formação
          </p>
        </div>
      </div>
    </footer>
  )
}
