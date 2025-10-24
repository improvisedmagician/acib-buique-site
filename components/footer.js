// Arquivo: components/footer.js (Versão Simplificada e Corrigida)

class CustomFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    // Atraso pequeno para garantir que 'feather' esteja carregado
    setTimeout(() => this.injectIcons(), 50);
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
           display: block; /* Garante que ocupe espaço */
           margin-top: auto; /* Empurra para o final do body flex container */
        }
        footer {
          background: var(--footer-bg, #f3f4f6);
          color: var(--footer-text, #4b5563);
          padding: 4rem 2rem 2rem;
        }
         :host(.dark) footer, :host-context(.dark) footer {
          background: var(--footer-bg-dark, #1f2937); /* Um cinza escuro um pouco diferente */
          color: var(--footer-text-dark, #e5e7eb);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .footer-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: var(--footer-heading, #1e40af);
        }
         :host(.dark) .footer-section h3, :host-context(.dark) .footer-section h3 {
          color: var(--footer-heading-dark, #60a5fa);
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-section li {
          margin-bottom: 0.75rem;
        }
        .footer-section p {
            font-size: 0.875rem; /* Tamanho texto padrão */
            line-height: 1.5;
        }
        .footer-section a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
        }
        .footer-section a:hover {
          color: #1e40af;
        }
         :host(.dark) .footer-section a:hover, :host-context(.dark) .footer-section a:hover {
          color: #60a5fa;
        }

        /* Ícones SVG */
        svg.feather {
            width: 1em; /* Tamanho relativo à fonte do link/botão */
            height: 1em;
            stroke-width: 2;
            vertical-align: middle; /* Alinha melhor com texto */
        }
        .social-links svg.feather { /* Tamanho específico para ícones sociais */
            width: 18px;
            height: 18px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          display: flex; /* Já era flex, mantido */
          align-items: center;
          justify-content: center;
          width: 2.5rem; /* 40px */
          height: 2.5rem; /* 40px */
          border-radius: 50%;
          background: rgba(30, 64, 175, 0.1);
          transition: background 0.2s;
          color: #1e40af; /* Cor do ícone */
        }
         :host(.dark) .social-links a, :host-context(.dark) .social-links a {
          background: rgba(96, 165, 250, 0.1);
          color: #60a5fa; /* Cor do ícone no dark */
        }
        .social-links a:hover {
          background: rgba(30, 64, 175, 0.2);
        }
         :host(.dark) .social-links a:hover, :host-context(.dark) .social-links a:hover {
          background: rgba(96, 165, 250, 0.2);
        }
        .copyright {
          text-align: center;
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          color: var(--copyright-text, #6b7280);
          font-size: 0.875rem;
        }
         :host(.dark) .copyright, :host-context(.dark) .copyright {
          border-top-color: rgba(255, 255, 255, 0.1);
          color: var(--copyright-text-dark, #9ca3af);
        }
        @media (max-width: 640px) {
          .footer-container {
            grid-template-columns: 1fr; /* Coluna única em telas pequenas */
          }
        }
      </style>

      <footer>
        <div class="footer-container">
          <div class="footer-section">
            <h3>ACIB</h3>
            <p>Fortalecendo o comércio local através de conexões e oportunidades.</p>
            <div class="social-links">
              <a href="#" aria-label="Facebook"><span class="icon-placeholder" data-icon-name="facebook"></span></a>
              <a href="#" aria-label="Instagram"><span class="icon-placeholder" data-icon-name="instagram"></span></a>
              <a href="#" aria-label="LinkedIn"><span class="icon-placeholder" data-icon-name="linkedin"></span></a>
              <a href="#" aria-label="Twitter"><span class="icon-placeholder" data-icon-name="twitter"></span></a>
            </div>
          </div>
          <div class="footer-section">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href=index.html""><span class="icon-placeholder" data-icon-name="chevron-right"></span> Home</a></li>
              <li><a href="members.html"><span class="icon-placeholder" data-icon-name="chevron-right"></span> Associados</a></li>
              <li><a href="events.html"><span class="icon-placeholder" data-icon-name="chevron-right"></span> Eventos</a></li>
              <li><a href="talent.html"><span class="icon-placeholder" data-icon-name="chevron-right"></span> Talentos</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Informações</h3>
            <ul>
              <li><a href="about.html"><span class="icon-placeholder" data-icon-name="chevron-right"></span> Sobre Nós</a></li>
              <li><a href="news.html"><span class="icon-placeholder" data-icon-name="chevron-right"></span> Notícias</a></li>
              <li><a href="contact.html"><span class="icon-placeholder" data-icon-name="chevron-right"></span> Contato</a></li>
              <li><a href="privacy.html"><span class="icon-placeholder" data-icon-name="chevron-right"></span> Privacidade</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Contato</h3>
            <ul>
              <li><a href="mailto:contato@acib.org"><span class="icon-placeholder" data-icon-name="mail"></span> contato@acib.org</a></li>
              <li><a href="tel:+551133334444"><span class="icon-placeholder" data-icon-name="phone"></span> (11) 3333-4444</a></li>
              <li><a href="#"><span class="icon-placeholder" data-icon-name="map-pin"></span> Rua Comercial, 123 - Centro</a></li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; ${new Date().getFullYear()} ACIB | BUÍQUE. Todos os direitos reservados.</p>
        </div>
      </footer>
    `;
  }

  // Injeta TODOS os ícones Feather nos placeholders
  injectIcons() {
    if (typeof feather === 'undefined') {
      console.warn('Feather Icons library not loaded yet for footer, retrying...');
      setTimeout(() => this.injectIcons(), 100); // Tenta novamente
      return;
    }

    this.shadowRoot.querySelectorAll('.icon-placeholder').forEach(placeholder => {
        const iconName = placeholder.dataset.iconName;
        if (iconName) {
            this.injectSingleIcon(placeholder, iconName);
        }
    });
  }

  // Injeta UM ícone Feather em um placeholder específico
  injectSingleIcon(placeholderElement, iconName) {
     if (!feather || !feather.icons[iconName] || !placeholderElement) return;

     const svgString = feather.icons[iconName].toSvg({
         'class': 'feather feather-' + iconName, // Adiciona classes úteis
         'stroke': 'currentColor', // Garante que herde a cor
         'fill': 'none',
         'stroke-width': 2,
         'stroke-linecap': 'round',
         'stroke-linejoin': 'round'
     });
     placeholderElement.innerHTML = svgString; // Substitui o conteúdo do span
  }
}

customElements.define('custom-footer', CustomFooter);