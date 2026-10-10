// Shared header nav for the keyword landing pages, and the site-wide footer links.

export const headerNav = {
  services: [
    { label: 'Websites & Funnels', href: '/#websites-funnels' },
    { label: 'Local SEO', href: '/scout/' },
    { label: 'Google & Meta Ads', href: '/services/ads/' },
    { label: 'CRM & Automation', href: '/services/automation/' },
    { label: 'Reactivation', href: '/services/reactivation/' },
    { label: 'AI Agents & Solutions', href: '/services/ai-agents/' },
    { label: 'AI Receptionist', href: '/services/ai-receptionist/' },
  ],
  links: [
    { label: 'Features', href: '/features/' },
    { label: 'How We Work', href: '/#process' },
    { label: 'Who We Work With', href: '/#built-for' },
    { label: 'Pricing', href: '/pricing/' },
  ],
};

// The one footer used on every page (matches the homepage). Pages without
// their own #book-call section pass '/#book-call' so the link still works.
export function makeFooterGroups(bookHref = '#book-call') {
  return [
    {
      heading: 'Company',
      links: [
        { label: 'Home', href: '/' },
        { label: 'How We Work', href: '/#process' },
        { label: 'Who We Work With', href: '/#built-for' },
      ],
    },
    {
      heading: 'Services',
      links: [
        { label: 'Websites & Funnels', href: '/#websites-funnels' },
        { label: 'Local SEO', href: '/scout/' },
        { label: 'Google & Meta Ads', href: '/services/ads/' },
        { label: 'CRM & Automation', href: '/services/automation/' },
        { label: 'Reactivation', href: '/services/reactivation/' },
        { label: 'AI Agents & Solutions', href: '/services/ai-agents/' },
      ],
    },
    {
      heading: 'Get Started',
      links: [{ label: 'Book Your Free Strategy Call', href: bookHref }],
    },
  ];
}

export const footerGroups = makeFooterGroups();
