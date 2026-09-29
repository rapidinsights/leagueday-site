import { getPermalink } from './utils/permalinks';

// Golfers never sign in (they open the link from their text), so the entry to
// the app is labelled for course staff.
const staffSignInUrl = 'https://app.leaguedaygolf.com/admin/login';

export const headerData = {
  links: [
    { text: 'For courses', href: getPermalink('/#courses') },
    { text: 'For golfers', href: getPermalink('/#golfers') },
    { text: 'How it works', href: getPermalink('/#how-it-works') },
  ],
  actions: [
    { text: 'Staff sign in', href: staffSignInUrl, variant: 'link' as const },
    { text: 'Book a demo', href: getPermalink('/contact') },
  ],
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
      links: [
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Staff sign in', href: staffSignInUrl },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `© ${new Date().getFullYear()} LeagueDay · All rights reserved.`,
};
