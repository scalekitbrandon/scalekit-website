// Shared header/footer nav for the keyword landing pages built on
// KeywordPage.astro. Older pages still carry their own inline copies.

export const headerNav = {
  services: [
    { label: 'Websites & Funnels', href: '/#websites-funnels' },
    { label: 'Local SEO', href: '/scout/' },
    { label: 'Google & Meta Ads', href: '/services/ads/' },
    { label: 'CRM & Automation', href: '/services/automation/' },
    { label: 'Reactivation', href: '/services/reactivation/' },
    { label: 'AI Agents & Solutions', href: '/services/ai-agents/' },
  ],
  links: [
    { label: 'Features', href: '/features/' },
    { label: 'How We Work', href: '/#process' },
    { label: 'Who We Work With', href: '/#built-for' },
    { label: 'Pricing', href: '/pricing/' },
  ],
};

export const footerGroups = [
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
      { label: 'Missed Call Text Back', href: '/services/missed-call-text-back/' },
      { label: 'Lead Follow-Up Automation', href: '/services/lead-follow-up-automation/' },
      { label: 'Google Review Automation', href: '/services/google-review-automation/' },
      { label: 'Google Business Profile Management', href: '/services/google-business-profile-management/' },
      { label: 'CRM for Service Businesses', href: '/services/automation/' },
      { label: 'AI Local SEO Agent', href: '/scout/' },
    ],
  },
  {
    heading: 'Guides',
    links: [{ label: 'Speed to Lead', href: '/guides/speed-to-lead/' }],
  },
];
