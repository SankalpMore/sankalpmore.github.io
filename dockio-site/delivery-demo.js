/* Accessible, local-only stage exploration. No network calls or stored inputs. */
(() => {
  function bindDeliveryDemo() {
    document.querySelectorAll('[data-delivery-demo]').forEach(workbench => {
      if (workbench.dataset.demoBound) return;
      workbench.dataset.demoBound = 'true';
      const tabs = Array.from(workbench.querySelectorAll('[role="tab"]'));
      const panels = Array.from(workbench.querySelectorAll('[role="tabpanel"]'));
      function select(tab, focus = false) {
        tabs.forEach(candidate => {
          const active = candidate === tab;
          candidate.setAttribute('aria-selected', String(active));
          candidate.tabIndex = active ? 0 : -1;
        });
        panels.forEach(panel => { panel.hidden = panel.id !== tab.getAttribute('aria-controls'); });
        if (focus) tab.focus();
      }
      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => select(tab));
        tab.addEventListener('keydown', event => {
          let next;
          if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
          if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
          if (event.key === 'Home') next = 0;
          if (event.key === 'End') next = tabs.length - 1;
          if (next !== undefined) {
            event.preventDefault();
            select(tabs[next], true);
          }
        });
      });
    });
  }
  bindDeliveryDemo();
  window.addEventListener('dockio:page', bindDeliveryDemo);
})();
