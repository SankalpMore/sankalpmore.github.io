/* Dockio: accessible navigation and page enhancements. Booking uses Microsoft Bookings. */
(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const main = $('#main');
  const mobileToggle = $('#mobile-toggle');
  const nav = $('#site-navigation');
  const arrow = '<svg class="icon arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const currentPath = document.body.dataset.page || '/';
  // Preserve links to the previous website's hash routes.
  if (location.hash.startsWith('#/')) {
    const legacy = location.hash.slice(1).split('?')[0].replace(/\/$/, '') || '/';
    const aliases = {'/case-studies':'/insights', '/partner-readiness':'/about'};
    const known = ['/', '/services', '/industries', '/approach', '/budgetops', '/about', '/contact', '/privacy', '/insights', '/services/strategy', '/services/integration', '/services/workflows', '/services/adoption', '/industries/financial-services', '/industries/enterprise-operations', '/industries/professional-services', '/insights/beyond-the-pilot', '/insights/start-with-the-work', '/insights/beyond-usage'];
    const target = aliases[legacy] || legacy;
    if (known.includes(target)) { location.replace(resolveUrl(target)); return; }
  }

  function closeNavigation() {
    document.body.classList.remove('nav-open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    mobileToggle?.setAttribute('aria-label', 'Open navigation');
    $$('.nav-disclosure').forEach(d => { d.open = false; });
  }
  mobileToggle?.addEventListener('click', () => {
    const open = !document.body.classList.contains('nav-open');
    document.body.classList.toggle('nav-open', open);
    mobileToggle.setAttribute('aria-expanded', String(open));
    mobileToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  $$('.nav-disclosure').forEach(disclosure => {
    disclosure.addEventListener('toggle', () => {
      if (disclosure.open) $$('.nav-disclosure').forEach(other => { if (other !== disclosure) other.open = false; });
    });
    disclosure.addEventListener('focusout', () => {
      setTimeout(() => { if (!disclosure.contains(document.activeElement)) disclosure.open = false; }, 0);
    });
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.nav-disclosure')) $$('.nav-disclosure').forEach(d => { d.open = false; });
    if (event.target.closest('#site-navigation a')) closeNavigation();
    if (document.body.classList.contains('nav-open') && !event.target.closest('.site-header')) closeNavigation();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Tab' && document.body.classList.contains('nav-open')) {
      const items = $$('.site-header a, .site-header button, .site-header summary').filter(el => el.getClientRects().length && !el.disabled);
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    if (event.key === 'Escape') {
      const activeDisclosure = $('.nav-disclosure[open]');
      const wasMobile = document.body.classList.contains('nav-open');
      closeNavigation();
      if (wasMobile) mobileToggle?.focus();
      else if (activeDisclosure) $('summary', activeDisclosure).focus();
    }
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 880) closeNavigation(); });

  function resolveUrl(route) {
    const depth = currentPath.split('/').filter(Boolean).length;
    const base = '../'.repeat(depth);
    const [path, query] = route.split('?');
    return base + (path === '/' ? '' : path.replace(/^\//, '') + '/') + 'index.html' + (query ? '?' + query : '');
  }
  function updateCurrentLinks() {
    $$('.nav-disclosure').forEach(disclosure => {
      const label = $('summary', disclosure).innerText.trim();
      const current = label === 'Services' ? currentPath.startsWith('/services') : label === 'Industries' ? currentPath.startsWith('/industries') : currentPath === '/about' || currentPath.startsWith('/insights');
      disclosure.classList.toggle('is-current', current);
    });
    $$('a[data-route]').forEach(a => {
      const route = a.dataset.route.split('?')[0];
      if (route === currentPath) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  const starters = {
    priority: { number:'01 / DEFINE', heading:'A business priority.<br>A practical first move.', body:'Clarify the problem, the intended users and the change you want to see. Then shape a requirement your business and delivery teams can act on.', href:'/services/strategy', link:'Define the right work' },
    pilot: { number:'02 / CONNECT', heading:'The pilot works.<br>Now make it part of the work.', body:'Bring the right sources, access, integrations and review steps together, so a promising idea can become a supported business capability.', href:'/services/integration', link:'Connect the next step' },
    rollout: { number:'03 / IMPROVE', heading:'People can access it.<br>Now understand what changes.', body:'Look beyond activity counts. Understand the user’s task, evaluate quality and address the friction that keeps a useful capability from becoming everyday work.', href:'/services/adoption', link:'Build a clearer evidence view' }
  };
  function bindStartTabs() {
    const tabs = $$('[data-start]');
    const panel = $('#start-panel');
    if (!panel) return;
    const activate = button => {
      const data = starters[button.dataset.start];
      if (!data) return;
      tabs.forEach(tab => {
        const selected = tab === button;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });
      panel.setAttribute('aria-labelledby', button.id);
      panel.innerHTML = `<span class="panel-index">${data.number}</span><h3>${data.heading}</h3><p>${data.body}</p><a class="text-link" href="${resolveUrl(data.href)}">${data.link}${arrow}</a>`;
    };
    tabs.forEach((button, index) => {
      button.addEventListener('click', () => activate(button));
      button.addEventListener('keydown', event => {
        let next = index;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault(); tabs[next].focus(); activate(tabs[next]);
      });
    });
  }

  const topButton = $('#back-to-top');
  window.addEventListener('scroll', () => topButton?.classList.toggle('visible', window.scrollY > 650), {passive:true});
  topButton?.addEventListener('click', () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({top:0,behavior:reduced?'instant':'smooth'});
  });
  $('.skip-link')?.addEventListener('click', event => { event.preventDefault(); main.focus(); main.scrollIntoView(); });

  updateCurrentLinks();
  bindStartTabs();
})();
