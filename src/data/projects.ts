export interface SideProject {
  slug: string
  title: string
  description: string
  emoji: string
  color: string
  liveUrl: string
  repoUrl?: string
}

export const SIDE_PROJECTS: SideProject[] = [
  {
    slug: 'sb-coffee-week',
    title: 'SB Coffee Week Map',
    description:
      'Interactive map for Santa Barbara Coffee Week 2026. Find participating shops, track visits, plan your route.',
    emoji: '☕',
    color: '#6f4e37',
    liveUrl: 'https://sbcoffeeweekmap.com',
    repoUrl: 'https://github.com/samgutentag/sbcoffeeweek',
  },
  {
    slug: 'sb-burger-week',
    title: 'SB Burger Week Map',
    description:
      'Interactive map for Santa Barbara Burger Week. Browse participating restaurants and their featured burgers.',
    emoji: '🍔',
    color: '#d97706',
    liveUrl: 'https://sbburgerweekmap.com',
    repoUrl: 'https://github.com/samgutentag/sbburgerweek',
  },
  {
    slug: 'gutentag-world',
    title: 'Gutentag, World!',
    description:
      '100+ repos that each say "Gutentag, World!" in a different language. Python, Rust, COBOL, Befunge, a DNS TXT record, you name it.',
    emoji: '👋',
    color: '#10b981',
    liveUrl: 'https://github.com/GutentagWorld',
  },
]
