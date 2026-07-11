import { siteConfig, categories, docs, getDocBySlug, docsByCategory } from './docs.js';

const app = document.querySelector('#app');
const state = {
  theme: localStorage.getItem('ytconv-docs-theme') || 'auto',
  sidebarOpen: false,
  searchOpen: false,
  query: ''
};

const icons = {
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
  monitor: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-9 9"/><path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
  copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
  spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7-4.7-1.8 4.7-1.8L12 3Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7V5Z"/></svg>',
  sliders: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h7M15 18h5"/><circle cx="16" cy="6" r="2"/><circle cx="8" cy="12" r="2"/><circle cx="13" cy="18" r="2"/></svg>',
  layers: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
  life: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="m5.6 5.6 4.3 4.3M14.1 14.1l4.3 4.3M18.4 5.6l-4.3 4.3M9.9 14.1l-4.3 4.3"/></svg>',
  info: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></svg>',
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></svg>'
};

function icon(name, className = '') {
  return `<span class="icon ${className}">${icons[name] || icons.info}</span>`;
}

function setTheme(theme) {
  state.theme = theme;
  localStorage.setItem('ytconv-docs-theme', theme);
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme === 'auto' ? 'light dark' : theme;
}

function currentSlug() {
  return decodeURIComponent(window.location.pathname).replace(/^\/+|\/+$/g, '');
}

function docText(doc) {
  const container = document.createElement('div');
  container.innerHTML = `${doc.title} ${doc.description} ${doc.sections.map((section) => `${section.title} ${section.content}`).join(' ')}`;
  return container.textContent.toLowerCase();
}

function searchDocs(query) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return docs.filter((doc) => doc.slug !== '').slice(0, 8);

  return docs
    .map((doc) => {
      const haystack = `${doc.title} ${doc.description} ${(doc.keywords || []).join(' ')} ${docText(doc)}`.toLowerCase();
      const score = terms.reduce((sum, term) => {
        if (doc.title.toLowerCase().includes(term)) return sum + 8;
        if ((doc.keywords || []).some((keyword) => keyword.includes(term))) return sum + 5;
        if (doc.description.toLowerCase().includes(term)) return sum + 3;
        if (haystack.includes(term)) return sum + 1;
        return sum;
      }, 0);
      return { doc, score, matches: terms.every((term) => haystack.includes(term)) };
    })
    .filter((item) => item.matches)
    .sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title))
    .map((item) => item.doc)
    .slice(0, 12);
}

function navigation(activeSlug) {
  const homeActive = activeSlug === '' ? 'active' : '';
  return `
    <nav class="docs-nav" aria-label="Dokumentasi">
      <a href="/" data-route class="nav-home ${homeActive}">${icon('home')}<span>Ringkasan</span></a>
      ${categories.map((category) => {
        const categoryDocs = docsByCategory(category.id);
        if (!categoryDocs.length) return '';
        return `
          <section class="nav-group">
            <div class="nav-heading">${icon(category.icon)}<span>${category.label}</span></div>
            <div class="nav-links">
              ${categoryDocs.map((doc) => `<a href="/${doc.slug}" data-route class="${doc.slug === activeSlug ? 'active' : ''}">${doc.title}</a>`).join('')}
            </div>
          </section>`;
      }).join('')}
    </nav>`;
}

function header() {
  return `
    <header class="topbar">
      <div class="topbar-inner">
        <button class="icon-button mobile-menu-button" data-action="toggle-sidebar" aria-label="Buka menu">${icon('menu')}</button>
        <a class="brand" href="/" data-route aria-label="YTConv Docs beranda">
          <span class="brand-mark"><span class="brand-play"></span></span>
          <span class="brand-copy"><strong>YTConv</strong><em>Docs</em></span>
        </a>
        <button class="search-trigger" data-action="open-search">${icon('search')}<span>Cari dokumentasi</span><kbd>Ctrl K</kbd></button>
        <div class="top-actions">
          <a class="top-link" href="${siteConfig.guideUrl}" target="_blank" rel="noreferrer">Guide ${icon('external')}</a>
          <a class="top-link primary-link" href="${siteConfig.converterUrl}" target="_blank" rel="noreferrer">Buka YTConv ${icon('external')}</a>
          <button class="icon-button" data-action="cycle-theme" aria-label="Ganti tema" title="Tema: ${state.theme}">${themeIcon()}</button>
        </div>
      </div>
    </header>`;
}

function themeIcon() {
  if (state.theme === 'light') return icon('sun');
  if (state.theme === 'dark') return icon('moon');
  return icon('monitor');
}

function articleToc(doc) {
  if (doc.sections.length < 2) return '';
  return `
    <aside class="toc" aria-label="Daftar isi">
      <div class="toc-label">Di halaman ini</div>
      <nav>${doc.sections.map((section) => `<a href="#${section.id}">${section.title}</a>`).join('')}</nav>
      <div class="toc-help">
        <span>Masih bingung?</span>
        <a href="${siteConfig.guideUrl}" target="_blank" rel="noreferrer">Buka panduan praktis ${icon('external')}</a>
      </div>
    </aside>`;
}

function adjacentDocs(doc) {
  const ordered = docs.filter((item) => item.slug !== '');
  if (!doc.slug) return '';
  const index = ordered.findIndex((item) => item.slug === doc.slug);
  const prev = index > 0 ? ordered[index - 1] : null;
  const next = index < ordered.length - 1 ? ordered[index + 1] : null;
  return `
    <nav class="page-nav" aria-label="Artikel sebelum dan berikutnya">
      ${prev ? `<a href="/${prev.slug}" data-route><span>${icon('arrowLeft')} Sebelumnya</span><strong>${prev.title}</strong></a>` : '<span></span>'}
      ${next ? `<a href="/${next.slug}" data-route class="next"><span>Berikutnya ${icon('arrowRight')}</span><strong>${next.title}</strong></a>` : '<span></span>'}
    </nav>`;
}

function renderArticle(doc) {
  return `
    <div class="article-layout">
      <article class="article" id="main-content">
        <div class="article-hero ${doc.slug === '' ? 'home-hero' : ''}">
          <div class="eyebrow"><span></span>${doc.eyebrow || 'Dokumentasi'}</div>
          <h1>${doc.title}</h1>
          <p class="lead">${doc.description}</p>
          ${doc.slug === '' ? `<div class="hero-badges"><span>${icon('check')} Mudah dipahami</span><span>${icon('check')} Pencarian cepat</span><span>${icon('check')} Semua perangkat</span></div>` : `<div class="article-meta"><span>Diperbarui ${siteConfig.lastUpdated}</span><span>•</span><span>${doc.sections.length} bagian</span></div>`}
        </div>
        <div class="article-sections">
          ${doc.sections.map((section, index) => `
            <section id="${section.id}" class="doc-section">
              ${doc.slug === '' ? '' : `<div class="section-index">${String(index + 1).padStart(2, '0')}</div>`}
              <h2>${section.title}</h2>
              <div class="section-body">${section.content}</div>
            </section>`).join('')}
        </div>
        ${adjacentDocs(doc)}
        <footer class="article-footer">
          <div><strong>Dokumentasi ini membantu?</strong><p>Simpan halaman atau buka YTConv Guide untuk langkah yang siap dipraktikkan.</p></div>
          <div class="footer-actions"><a href="${siteConfig.guideUrl}" target="_blank" rel="noreferrer" class="button secondary">Buka Guide</a><a href="${siteConfig.converterUrl}" target="_blank" rel="noreferrer" class="button primary">Buka YTConv</a></div>
        </footer>
      </article>
      ${articleToc(doc)}
    </div>`;
}

function notFound() {
  return `
    <article class="article not-found" id="main-content">
      <div class="article-hero">
        <div class="error-code">404</div>
        <h1>Halaman tidak ditemukan</h1>
        <p class="lead">Alamat ini tidak ada atau dokumentasinya telah dipindahkan.</p>
        <div class="inline-actions"><a class="button primary" href="/" data-route>Kembali ke Docs</a><button class="button secondary" data-action="open-search">Cari artikel</button></div>
      </div>
    </article>`;
}

function searchModal() {
  const results = searchDocs(state.query);
  return `
    <div class="search-backdrop ${state.searchOpen ? 'open' : ''}" data-action="close-search"></div>
    <section class="search-modal ${state.searchOpen ? 'open' : ''}" role="dialog" aria-modal="true" aria-label="Cari dokumentasi">
      <div class="search-box">
        ${icon('search')}
        <input id="global-search" type="search" placeholder="Ketik error, format, cookies, MP3…" value="${escapeHtml(state.query)}" autocomplete="off" />
        <button class="search-close" data-action="close-search" aria-label="Tutup">Esc</button>
      </div>
      <div class="search-results">
        <div class="search-result-label">${state.query ? `${results.length} hasil ditemukan` : 'Artikel populer'}</div>
        ${results.length ? results.map((doc) => `
          <a href="/${doc.slug}" data-route class="search-result">
            <span class="search-result-icon">${icon(categories.find((cat) => cat.id === doc.category)?.icon || 'info')}</span>
            <span><strong>${highlight(doc.title, state.query)}</strong><small>${doc.description}</small></span>
            ${icon('chevron')}
          </a>`).join('') : `<div class="empty-search"><strong>Tidak ada hasil.</strong><p>Coba kata lain seperti “403”, “cookies”, “MP3”, atau “FFmpeg”.</p></div>`}
      </div>
      <div class="search-footer"><span><kbd>↑</kbd><kbd>↓</kbd> navigasi</span><span><kbd>Enter</kbd> buka</span><span><kbd>Esc</kbd> tutup</span></div>
    </section>`;
}

function escapeHtml(value = '') {
  return value.replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function highlight(value, query) {
  if (!query.trim()) return value;
  const term = query.trim().split(/\s+/)[0];
  const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig');
  return value.replace(regex, '<mark>$1</mark>');
}

function shell(content, activeSlug) {
  return `
    ${header()}
    <div class="app-shell">
      <div class="sidebar-backdrop ${state.sidebarOpen ? 'open' : ''}" data-action="close-sidebar"></div>
      <aside class="sidebar ${state.sidebarOpen ? 'open' : ''}">
        <div class="sidebar-mobile-head"><span>Dokumentasi</span><button class="icon-button" data-action="close-sidebar">${icon('close')}</button></div>
        ${navigation(activeSlug)}
        <div class="sidebar-bottom">
          <a href="${siteConfig.statusUrl}" target="_blank" rel="noreferrer"><span class="status-dot"></span>Status layanan</a>
          <small>YTConv Docs · ${siteConfig.lastUpdated}</small>
        </div>
      </aside>
      <main class="content">${content}</main>
    </div>
    ${searchModal()}
    <div class="toast" role="status" aria-live="polite"></div>`;
}

function updateMeta(doc) {
  const title = doc ? `${doc.title} — ${siteConfig.name}` : `404 — ${siteConfig.name}`;
  document.title = title;
  const description = doc?.description || 'Halaman dokumentasi tidak ditemukan.';
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
}

function render({ preserveScroll = false } = {}) {
  const slug = currentSlug();
  const doc = getDocBySlug(slug);
  app.innerHTML = shell(doc ? renderArticle(doc) : notFound(), slug);
  updateMeta(doc);
  bindEvents();
  enhanceCodeBlocks();
  setupTocObserver();
  if (!preserveScroll) window.scrollTo({ top: 0, behavior: 'instant' });
  if (state.searchOpen) requestAnimationFrame(() => document.querySelector('#global-search')?.focus());
}

function navigate(path) {
  if (window.location.pathname !== path) window.history.pushState({}, '', path);
  state.sidebarOpen = false;
  state.searchOpen = false;
  state.query = '';
  render();
}

function bindEvents() {
  document.querySelectorAll('[data-route]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      navigate(new URL(link.href, window.location.origin).pathname);
    });
  });

  document.querySelectorAll('[data-action]').forEach((element) => {
    element.addEventListener('click', (event) => {
      const action = element.dataset.action;
      if (action === 'toggle-sidebar') { state.sidebarOpen = !state.sidebarOpen; render({ preserveScroll: true }); }
      if (action === 'close-sidebar') { state.sidebarOpen = false; render({ preserveScroll: true }); }
      if (action === 'open-search') { event.stopPropagation(); state.searchOpen = true; render({ preserveScroll: true }); }
      if (action === 'close-search' && (event.target === element || element.classList.contains('search-close'))) { state.searchOpen = false; state.query = ''; render({ preserveScroll: true }); }
      if (action === 'cycle-theme') {
        const next = state.theme === 'auto' ? 'light' : state.theme === 'light' ? 'dark' : 'auto';
        setTheme(next);
        render({ preserveScroll: true });
        showToast(`Tema: ${next === 'auto' ? 'mengikuti perangkat' : next}`);
      }
    });
  });

  const searchInput = document.querySelector('#global-search');
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      state.query = event.target.value;
      const resultsContainer = document.querySelector('.search-results');
      const results = searchDocs(state.query);
      resultsContainer.innerHTML = `
        <div class="search-result-label">${state.query ? `${results.length} hasil ditemukan` : 'Artikel populer'}</div>
        ${results.length ? results.map((doc) => `
          <a href="/${doc.slug}" data-route class="search-result">
            <span class="search-result-icon">${icon(categories.find((cat) => cat.id === doc.category)?.icon || 'info')}</span>
            <span><strong>${highlight(doc.title, state.query)}</strong><small>${doc.description}</small></span>
            ${icon('chevron')}
          </a>`).join('') : `<div class="empty-search"><strong>Tidak ada hasil.</strong><p>Coba kata lain seperti “403”, “cookies”, “MP3”, atau “FFmpeg”.</p></div>`}`;
      bindSearchResults();
    });
  }
}

function bindSearchResults() {
  document.querySelectorAll('.search-result[data-route]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      navigate(new URL(link.href, window.location.origin).pathname);
    });
  });
}

function enhanceCodeBlocks() {
  document.querySelectorAll('pre').forEach((pre) => {
    if (pre.parentElement?.classList.contains('code-shell')) return;
    const shell = document.createElement('div');
    shell.className = 'code-shell';
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.innerHTML = `${icon('copy')}<span>Salin</span>`;
    button.addEventListener('click', async () => {
      const text = pre.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        button.innerHTML = `${icon('check')}<span>Tersalin</span>`;
        showToast('Berhasil disalin');
        setTimeout(() => { button.innerHTML = `${icon('copy')}<span>Salin</span>`; }, 1600);
      } catch {
        showToast('Tidak dapat menyalin otomatis');
      }
    });
    pre.parentNode.insertBefore(shell, pre);
    shell.append(button, pre);
  });
}

function setupTocObserver() {
  const links = [...document.querySelectorAll('.toc a[href^="#"]')];
  const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if (!links.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
    if (!visible) return;
    links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`));
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}

let toastTimer;
function showToast(message) {
  const toast = document.querySelector('.toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

window.addEventListener('popstate', () => render());
window.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if ((event.ctrlKey || event.metaKey) && key === 'k') {
    event.preventDefault();
    state.searchOpen = true;
    render({ preserveScroll: true });
  } else if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
    event.preventDefault();
    state.searchOpen = true;
    render({ preserveScroll: true });
  } else if (event.key === 'Escape' && (state.searchOpen || state.sidebarOpen)) {
    state.searchOpen = false;
    state.sidebarOpen = false;
    state.query = '';
    render({ preserveScroll: true });
  }
});

setTheme(state.theme);
render();
