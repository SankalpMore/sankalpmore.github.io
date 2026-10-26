/** Keep shared navigation and badge dimensions consistent across both renderers. */
import { applySelectRelease as applyContent } from './select-release.mjs';
export function applySelectRelease(input) {
  const result = applyContent(input);
  result.before = result.before.replace(/<a class="nav-link" data-route="\/approach"[^>]*>[\s\S]*?<\/a>/, '');
  if (!result.before.includes('<a data-route="/approach"')) {
    result.before = result.before.replace('<a data-route="/about"', '<a data-route="/approach" href="#/approach"><span>Our approach</span><small>Clear ownership. Connected delivery.</small></a><a data-route="/about"');
  }
  for (const entry of Object.values(result.routes)) {
    entry.body = entry.body.replaceAll('alt="OpenAI Select Partner" width="176" height="85"', 'alt="OpenAI Select Partner" width="189" height="90"');
  }
  const partner = result.routes['/openai'];
  if (partner && !partner.body.includes('OpenAI, ChatGPT and Codex are trademarks')) {
    partner.body = partner.body.replace('or an OpenAI guarantee of our work.</p>', 'or an OpenAI guarantee of our work.</p><p class="release-note">OpenAI, ChatGPT and Codex are trademarks of OpenAI.</p>');
  }
  return result;
}
