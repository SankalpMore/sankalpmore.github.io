import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { pages, aliases } from './site/meta';
import './site/styles.css';
const legacyPath = window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : null;
if (legacyPath) {
    const legacyUrl = new URL(legacyPath, window.location.origin);
    const normalized = legacyUrl.pathname.replace(/\/$/, '') || '/';
    const safePath = aliases[normalized] ?? (pages.some(page => page.path === normalized) ? normalized : '/');
    window.location.replace(safePath + (safePath.endsWith('/') ? '' : '/') + (legacyUrl.search || window.location.search));
}
else {
    const container = document.getElementById('root')!;
    const app = <App initialPath={window.location.pathname}/>;
    if (container.hasChildNodes())
        hydrateRoot(container, app);
    else
        createRoot(container).render(app);
}
