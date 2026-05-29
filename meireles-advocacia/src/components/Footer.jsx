const servicos = [
  'Rescisão Contratual', 'Assédio e Dano Moral', 'Horas Extras e Adicionais',
  'Acidente de Trabalho', 'Estabilidade no Emprego', 'Revisão de FGTS e INSS',
]

export default function Footer() {
  return (
    <footer className="noise-bg" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--gold-10)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 flex items-center justify-center"
                style={{ border: '1px solid var(--gold-40)' }}>
                <span className="font-display text-sm font-semibold" style={{ color: 'var(--gold)' }}>M&A</span>
              </div>
              <div>
                <div className="font-display text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  Meireles & Associados
                </div>
                <div className="font-body text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--text-secondary)' }}>
                  Advogados
                </div>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed mb-6 max-w-xs" style={{ color: 'var(--text-secondary)' }}>
              Especialistas em direito trabalhista em Porto Alegre há mais de 12 anos. Defendendo quem mais precisa com rigor e humanidade.
            </p>
            <div className="space-y-2">
              {[
                { icon: '📍', text: 'Av. Borges de Medeiros, 1501 — Sala 1204, Centro Histórico, Porto Alegre/RS' },
                { icon: '📱', text: '(51) 99999-0000', href: 'https://wa.me/5551999990000' },
                { icon: '✉',  text: 'contato@meirelesesociados.com.br', href: 'mailto:contato@meirelesesociados.com.br' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs" style={{ color: 'var(--gold)' }}>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} className="font-body text-xs transition-colors duration-200"
                      style={{ color: 'var(--text-secondary)' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >{item.text}</a>
                  ) : (
                    <span className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--text-primary)' }}>
              Navegação
            </h4>
            <ul className="space-y-3">
              {['Início', 'Sobre', 'Serviços', 'Resultados', 'FAQ', 'Contato'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`}
                    className="font-body text-sm transition-colors duration-200"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--text-primary)' }}>
              Áreas de Atuação
            </h4>
            <ul className="space-y-3">
              {servicos.map(s => (
                <li key={s}>
                  <span className="font-body text-sm" style={{ color: 'var(--text-secondary)' }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8" style={{ borderTop: '1px solid var(--gold-10)' }}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="font-body text-xs" style={{ color: 'var(--text-secondary)' }}>
                © 2025 Meireles & Associados. Todos os direitos reservados.
              </p>
              <p className="font-body text-xs" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>
                OAB/RS 45.231 · Este site tem caráter exclusivamente informativo. Não constitui consulta jurídica.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2" style={{ border: '1px solid var(--gold-40)' }} />
              <span className="font-body text-xs" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>
                Porto Alegre, RS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
