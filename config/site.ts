export const siteConfig = {
  name: 'Ronald Lopes | Portfolio',
  description: 'I am Ronald Lopes, Product designer and Front-end Developer.',
  keywords:
    'UI, UX, Product, Front-end, Developer, Designer, Ronald, Lopes, Portfolio',
  navItems: [
    {
      label: 'Home',
      href: '#home',
    },
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'Work',
      href: '#work',
    },
  ],
  socialLinks: [
    {
      label: 'Mail',
      href: 'mailto:me@ronaldlopes.design',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ronald-lopes',
    },
    {
      label: 'Dribbble',
      href: 'https://dribbble.com/ronaldlopes',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/ronald-lopes',
    },
  ],
}

export type SiteConfig = typeof siteConfig
