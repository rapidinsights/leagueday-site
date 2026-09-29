import { getPermalink } from './utils/permalinks';

// The app's front door routes everyone: a golfer whose phone it remembers goes
// straight to their tee times, anyone else gets the gate, which offers phone
// recovery and a staff sign-in link.
const signInUrl = 'https://app.leaguedaygolf.com/';

export const headerData = {
  links: [
    { text: 'For courses', href: getPermalink('/#courses') },
    { text: 'For golfers', href: getPermalink('/#golfers') },
    { text: 'How it works', href: getPermalink('/#how-it-works') },
  ],
  actions: [
    { text: 'Sign in', href: signInUrl, variant: 'link' as const },
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
        { text: 'Sign in', href: signInUrl },
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
