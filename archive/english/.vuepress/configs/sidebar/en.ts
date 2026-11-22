import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/': [
    {
      text: 'Notes',
      link: '/',
    },
    {
      text: 'Fitness',
      link: '/fitness/',
      collapsible: true,
      children: [
        '/fitness/exercises.md',
        '/fitness/stretching.md',
      ],
    },
    {
      text: 'Health',
      link: '/health/',
    },
    {
      text: 'Home',
      link: '/home/',
      collapsible: true,
      children: [
        '/home/konmari.md',
      ],
    },
    {
      text: 'Management',
      link: '/management/',
    },
    {
      text: 'Productivity',
      link: '/productivity/',
      collapsible: true,
      children: [
        '/productivity/smartphone.md',
        {
          text: 'Goals',
          link: '/productivity/goals/',
          collapsible: true,
          children: [
            '/productivity/goals/perfect-day.md',
          ],
        },
      ],
    },
    {
      text: 'Software Engineering',
      link: '/software-engineering/',
      collapsible: true,
      children: [
        {
          text: 'API',
          link: '/software-engineering/api.html',
          collapsible: true,
        },
        {
          text: 'DevOps',
          link: '/software-engineering/devops/',
          collapsible: true,
          children: [
            '/software-engineering/devops/docker.md',
          ],
        },
        {
          text: 'Front end',
          link: '/software-engineering/front-end/',
          collapsible: true,
          children: [
            '/software-engineering/front-end/css.md',
            '/software-engineering/front-end/html.md',
          ],
        },
        {
          text: 'Git',
          link: '/software-engineering/git.html',
          collapsible: true,
        },
        {
          text: 'GitHub',
          link: '/software-engineering/github.html',
          collapsible: true,
        },
        {
          text: 'JavaScript',
          link: '/software-engineering/javascript/',
          collapsible: true,
          children: [
            '/software-engineering/javascript/vue.md',
          ],
        },
        {
          text: 'PHP',
          link: '/software-engineering/php/',
          collapsible: true,
        },
        {
          text: 'Software Testing',
          link: '/software-engineering/software-testing/',
          collapsible: true,
          children: [
            '/software-engineering/software-testing/unit-javascript.md',
            '/software-engineering/software-testing/unit-php.md',
          ],
        },
        '/software-engineering/state-machines.md',
        {
          text: 'Web',
          link: '/software-engineering/web/',
          collapsible: true,
        },
      ],
    },
    {
      text: 'Work',
      link: '/work/',
      collapsible: true,
      children: [
        '/work/job-search.md',
        '/work/cv.md',
        {
          text: 'Job Interviews',
          link: '/work/interview/',
          collapsible: true,
          children: [
            '/work/interview/trivia.md',
            '/work/interview/coding.md',
            '/work/interview/system-design.md',
            '/work/interview/behavioral.md',
          ],
        },
        '/work/offer.md',
        '/work/freelance.md',
      ],
    },
    {
      text: 'Writing',
      link: '/writing/',
      collapsible: true,
      children: [
        '/writing/digital-garden.md',
        '/writing/static-website-vuepress-github-pages.md',
      ],
    },
  ],
}
