export const aliases = {
  '/case-studies': '/insights',
  '/partner-readiness': '/about',
  '/engagements/workflow-sprint': '/services/implementation-sprint',
  '/engagements/embedded-delivery': '/services/integration',
  '/engagements/embedded': '/services/integration'
};

export const address = route => route === '/' ? '/' : route + '/';
export const escape = value => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const socialImage = '/assets/dockio-social.png';
export const socialAlt = 'Dockio. Make AI work. In your business. Enterprise AI implementation, from priorities to evidence of value.';

export function structuredData(origin, route, entry) {
  const url = origin + address(route);
  const organization = { '@id': origin + '/#organization' };
  const website = { '@id': origin + '/#website' };
  const webpage = {
    '@type': route === '/about' ? 'AboutPage' : route === '/contact' ? 'ContactPage' : 'WebPage',
    '@id': url + '#webpage', url, name: entry.title, description: entry.description,
    inLanguage: 'en-IN', isPartOf: website, publisher: organization,
    primaryImageOfPage: { '@type': 'ImageObject', url: origin + socialImage, width: 1200, height: 630 }
  };
  const graph = [
    {
      '@type': 'Organization', ...organization, name: 'Dockio',
      legalName: 'Dockio Technosolutions Private Limited', url: origin + '/',
      description: 'Enterprise AI implementation and systems integration, based in Mumbai, India.',
      email: 'sankalp@dockio.in',
      logo: { '@type': 'ImageObject', '@id': origin + '/#logo', url: origin + '/assets/dockio-logo.png', width: 512, height: 512 },
      address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'IN' },
      contactPoint: { '@type': 'ContactPoint', contactType: 'business enquiries', email: 'sankalp@dockio.in', url: origin + '/contact/' }
    },
    { '@type': 'WebSite', ...website, name: 'Dockio', url: origin + '/', inLanguage: 'en-IN', publisher: organization },
    webpage
  ];
  if (entry.breadcrumbs?.length) {
    webpage.breadcrumb = { '@id': url + '#breadcrumb' };
    graph.push({ '@type': 'BreadcrumbList', '@id': url + '#breadcrumb', itemListElement: entry.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem', position: index + 1, name: item.name, item: origin + address(item.route)
    })) });
  }
  if (route.startsWith('/services/')) {
    webpage.mainEntity = { '@id': url + '#service' };
    graph.push({ '@type': 'Service', '@id': url + '#service', name: entry.serviceName || entry.title,
      description: entry.description, url, provider: organization, mainEntityOfPage: { '@id': webpage['@id'] } });
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}
