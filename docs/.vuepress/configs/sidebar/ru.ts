import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarRu: SidebarConfig = {
  '/': [
    {
      text: 'Дом и быт',
      link: '/home/',
      collapsible: true,
      children: [
        '/home/konmari.md',
      ],
    },
    {
      text: 'Заметки',
      link: '/',
    },
    {
      text: 'Здоровье',
      link: '/health/',
      collapsible: true,
    },
    {
      text: 'Менеджмент',
      link: '/management/',
      collapsible: true,
    },
    {
      text: 'Письмо',
      link: '/writing/',
      collapsible: true,
      children: [
        '/writing/static-website-vuepress-github-pages.md',
        '/writing/digital-garden.md',
      ],
    },
    {
      text: 'Работа',
      link: '/work/',
      collapsible: true,
      children: [
        '/work/job-search.md',
        '/work/cv.md',
        {
          text: 'Собеседование',
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
      text: 'Разработка',
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
          text: 'Web',
          link: '/software-engineering/web/',
          collapsible: true,
        },
        '/software-engineering/state-machines.md',
        {
          text: 'Тестирование ПО',
          link: '/software-engineering/software-testing/',
          collapsible: true,
          children: [
            '/software-engineering/software-testing/unit-javascript.md',
            '/software-engineering/software-testing/unit-php.md',
          ],
        },
      ],
    },
    {
      text: 'Фитнес',
      link: '/fitness/',
      collapsible: true,
      children: [
        '/fitness/exercises.md',
        '/fitness/stretching.md',
      ],
    },
    {
      text: 'Эффективность',
      link: '/productivity/',
      collapsible: true,
      children: [
        '/productivity/smartphone.md',
        {
          text: 'Цели',
          link: '/productivity/goals/',
          collapsible: true,
          children: [
            '/productivity/goals/perfect-day.md',
          ],
        },
      ],
    },
  ],
}
