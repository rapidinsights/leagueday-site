import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'For courses', href: getPermalink('/#courses') },
    { text: 'For golfers', href: getPermalink('/#golfers') },
    { text: 'How it works', href: getPermalink('/#how-it-works') },
  ],
  actions: [{ text: 'Book a demo', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'For courses', href: getPermalink('/#courses') },
        { text: 'For golfers', href: getPermalink('/#golfers') },
        { text: 'How it works', href: getPermalink('/#how-it-works') },
      ],
    },
    {
      title: 'Company',
      links: [{ text: 'Contact', href: getPermalink('/contact') }],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `© ${new Date().getFullYear()} LeagueDay · All rights reserved.`,
};
