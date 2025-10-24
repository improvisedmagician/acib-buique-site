// Arquivo: components/navbar.js (Versão Simplificada e Corrigida)

class CustomNavbar extends HTMLElement {
    constructor() {
      super(); // Sempre chame super() primeiro no construtor
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.setupEventListeners();
      // Atraso pequeno para garantir que 'feather' esteja carregado
      // Em um projeto real, usaríamos Promises ou importações de módulo
      setTimeout(() => this.injectIcons(), 50);
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host { /* Estilos aplicados ao próprio custom-element */
            display: block; /* Garante que ele ocupe espaço */
            position: sticky;
            top: 0;
            z-index: 50;
          }
          nav {
            background: var(--navbar-bg, #ffffff);
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            color: var(--navbar-text, #4b5563);
          }
          /* Estilos Dark Mode - Aplicados quando o :host ou um ancestral tem a classe .dark */
          :host(.dark) nav, :host-context(.dark) nav {
             background: var(--navbar-bg-dark, #1a202c);
             box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
             color: var(--navbar-text-dark, #e2e8f0);
          }
  
          .logo {
            color: var(--logo-color, #1e40af);
            font-weight: bold;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
          }
           :host(.dark) .logo, :host-context(.dark) .logo {
            color: var(--logo-color-dark, white);
          }
          .logo-icon-placeholder svg {
              color: #dc2626; /* Cor específica do ícone do logo */
          }
  
          ul {
            display: flex;
            gap: 1.5rem;
            list-style: none;
            margin: 0;
            padding: 0;
            align-items: center;
          }
          li { display: flex; align-items: center; }
          a {
            color: inherit; /* Herda a cor do 'nav' */
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s;
            display: flex;
            align-items: center;
            gap: 0.25rem;
          }
          a:hover {
            color: #1e40af;
          }
           :host(.dark) a:hover, :host-context(.dark) a:hover {
            color: #60a5fa;
          }
          .active {
            color: #1e40af;
            font-weight: 600;
          }
           :host(.dark) .active, :host-context(.dark) .active {
            color: #60a5fa;
          }
  
          .mobile-menu-btn {
            display: none; /* Escondido por padrão */
            background: none;
            border: none;
            color: inherit; /* Herda a cor do 'nav' */
            cursor: pointer;
            padding: 0.5rem;
          }
  
          /* Botão Dark Mode */
          #dark-mode-toggle {
              background: none;
              border: none;
              cursor: pointer;
              padding: 0.5rem;
              border-radius: 9999px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: inherit; /* Herda cor do 'nav' */
          }
          #dark-mode-toggle:hover {
              background-color: rgba(0,0,0,0.1);
          }
          :host(.dark) #dark-mode-toggle:hover, :host-context(.dark) #dark-mode-toggle:hover {
              background-color: rgba(255,255,255,0.1);
          }
  
          /* Ícones SVG - Tamanho padrão */
          svg.feather {
              width: 1em; /* Tamanho relativo à fonte */
              height: 1em;
              stroke-width: 2;
              vertical-align: middle;
          }
           .logo-icon-placeholder svg.feather { /* Tamanho específico logo */
               width: 1.2em;
               height: 1.2em;
          }
  
  
          /* Estilos Mobile */
          @media (max-width: 768px) {
            nav { padding: 1rem; }
            ul#main-menu {
              display: none; /* Menu escondido */
              position: absolute;
              top: 100%; /* Abaixo da navbar */
              left: 0;
              right: 0;
              background: var(--navbar-bg, #ffffff);
               :host(.dark) &, :host-context(.dark) & { /* Fundo no dark mode */
                   background: var(--navbar-bg-dark, #1a202c);
               }
              flex-direction: column;
              padding: 1rem;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              gap: 1rem;
              align-items: flex-start;
            }
            ul#main-menu.open {
              display: flex; /* Mostra o menu */
            }
            .mobile-menu-btn {
              display: block; /* Mostra o botão hamburguer */
            }
          }
        </style>
  
        <nav>
          <a href="" class="logo">
            <span class="icon-placeholder logo-icon-placeholder" data-icon-name="link"></span>
            ACIB
          </a>
          <button class="mobile-menu-btn" aria-label="Abrir menu">
            <span class="icon-placeholder" data-icon-name="menu"></span>
          </button>
          <ul id="main-menu">
             <li><a href="index.html" class="active"><span class="icon-placeholder" data-icon-name="home"></span> Home</a></li>
            <li><a href="members.html"><span class="icon-placeholder" data-icon-name="users"></span> Associados</a></li>
            <li><a href="events.html"><span class="icon-placeholder" data-icon-name="calendar"></span> Eventos</a></li>
            <li><a href="talent.html"><span class="icon-placeholder" data-icon-name="briefcase"></span> Talentos</a></li>
            <li><a href="news.html"><span class="icon-placeholder" data-icon-name="file-text"></span> Notícias</a></li>
            <li><a href="about.html"><span class="icon-placeholder" data-icon-name="info"></span> Sobre</a></li>
            <li><a href="contact.html"><span class="icon-placeholder" data-icon-name="mail"></span> Contato</a></li>
            <li>
              <button id="dark-mode-toggle" aria-label="Alternar tema">
                <span class="icon-placeholder icon-moon"></span>
                <span class="icon-placeholder icon-sun"></span>
              </button>
            </li>
          </ul>
        </nav>
      `;
    }
  
    setupEventListeners() {
      const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
      const menu = this.shadowRoot.querySelector('#main-menu');
      const darkModeToggle = this.shadowRoot.querySelector('#dark-mode-toggle');
  
      // Toggle Mobile Menu
      mobileMenuBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
        const isOpen = menu.classList.contains('open');
        const iconName = isOpen ? 'x' : 'menu';
        mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
        // Atualiza o ícone do botão
        this.injectSingleIcon(mobileMenuBtn.querySelector('.icon-placeholder'), iconName);
      });
  
      // Toggle Dark Mode
      darkModeToggle.addEventListener('click', () => {
        // Chama a função GLOBAL definida em script.js
        if (typeof toggleDarkMode === 'function') {
          toggleDarkMode(); // Isso adiciona/remove a classe 'dark' no <html>
          this.updateDarkModeIconsVisibility(); // Atualiza a visibilidade SÓ dos ícones sun/moon
        } else {
          console.error('Função global toggleDarkMode não encontrada.');
        }
      });
  
      // Close mobile menu on outside click
      document.addEventListener('click', (event) => {
          // Se o clique foi fora do <custom-navbar> E o menu está aberto
          if (!this.contains(event.target) && menu.classList.contains('open')) {
              menu.classList.remove('open');
              mobileMenuBtn.setAttribute('aria-label', 'Abrir menu');
              this.injectSingleIcon(mobileMenuBtn.querySelector('.icon-placeholder'), 'menu');
          }
      }, true); // Use capturing phase
    }
  
    // Injeta TODOS os ícones Feather nos placeholders
    injectIcons() {
      if (typeof feather === 'undefined') {
        console.warn('Feather Icons library not loaded yet, retrying...');
        setTimeout(() => this.injectIcons(), 100); // Tenta novamente
        return;
      }
  
      this.shadowRoot.querySelectorAll('.icon-placeholder').forEach(placeholder => {
          let iconName = placeholder.dataset.iconName;
  
          // Trata os ícones sun/moon separadamente
          if (placeholder.classList.contains('icon-moon')) iconName = 'moon';
          if (placeholder.classList.contains('icon-sun')) iconName = 'sun';
  
          if (iconName) {
              this.injectSingleIcon(placeholder, iconName);
          }
      });
  
      this.updateDarkModeIconsVisibility(); // Garante estado inicial correto
    }
  
    // Injeta UM ícone Feather em um placeholder específico
    injectSingleIcon(placeholderElement, iconName) {
       if (!feather || !feather.icons[iconName] || !placeholderElement) return;
  
       const svgString = feather.icons[iconName].toSvg({
           'class': 'feather feather-' + iconName, // Adiciona classes úteis
           'stroke': 'currentColor', // Garante que herde a cor do texto
           'fill': 'none',
           'stroke-width': 2,
           'stroke-linecap': 'round',
           'stroke-linejoin': 'round'
       });
       placeholderElement.innerHTML = svgString; // Substitui o conteúdo do span
    }
  
    // Controla qual ícone (sol ou lua) está visível
    updateDarkModeIconsVisibility() {
        // Verifica a classe no elemento <html> GLOBALMENTE
        const isDark = document.documentElement.classList.contains('dark');
        const moonPlaceholder = this.shadowRoot.querySelector('.icon-moon');
        const sunPlaceholder = this.shadowRoot.querySelector('.icon-sun');
  
        if (moonPlaceholder) moonPlaceholder.style.display = isDark ? 'none' : 'inline-block';
        if (sunPlaceholder) sunPlaceholder.style.display = isDark ? 'inline-block' : 'none';
    }
  }
  
  customElements.define('custom-navbar', CustomNavbar);