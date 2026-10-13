import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { pages } from './brand/content';
import './brand/styles.css';
const legacyPath = window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : null;
if (legacyPath) {
    const normalized = legacyPath.replace(/\/$/, '') || '/';
    const safePath = pages.some(page => page.path === normalized) ? normalized : '/';
    window.location.replace(safePath + (safePath.endsWith('/') ? '' : '/') + window.location.search);
}
else {
    const container = document.getElementById('root')!;
    const app = <App initialPath={window.location.pathname}/>;
    if (container.hasChildNodes())
        hydrateRoot(container, app);
    else
        createRoot(container).render(app);
}
