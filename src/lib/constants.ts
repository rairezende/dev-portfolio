import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/rairezende',
  linkedin: 'https://www.linkedin.com/in/raiane-rezende/',
  mail: 'mailto:raiane.rze@gmail.com',
  substack: 'https://7andar.substack.com/',
  cva: 'https://www.figma.com/community/plugin/1263631854497422865/cva-component-variants-automator',
  figmaSdk: 'https://github.com/figma-plugin-sdk/design-system',
  adobeStock: 'https://stock.adobe.com/br/contributor/212716565/Raiane%20Rezende',
  cheery: 'https://github.com/rairezende/cheery',
  celestialInsights: 'https://celestial-insights.netlify.app/',
  trove: 'https://github.com/rairezende/Trove',
  tripleMoon: 'https://github.com/rairezende/triple-moon',

  
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Education Page
export const EDUCATION = [
  {
    title: 'Journalism B.A.',
    institution: 'Universidade Federal de Ouro Preto',
    link: 'https://ufop.br/',
    date: '2016 - 2021',
  },
]

export const EXPERIENCE = [
  {
    company: 'Toki Labs',
    position: 'Full Stack Software Developer',
    start: '2021',
    link: 'http://tokilabs.io',
    end: '2025',
    tasks: [
      '',
    ],
  },
  {
    company: 'Toki Labs',
    position: 'Programming Mentee',
    link: 'http://tokilabs.io',
    start: '2020',
    end: '2021',
    tasks: [
      '',
    ],
  },
]
