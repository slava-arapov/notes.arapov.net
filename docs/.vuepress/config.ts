import { defineUserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { head, navbarRu, sidebarRu } from './configs'
import { legacyRussianUrls } from './legacyRussianUrls'


const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({

  // set site base to default value
  base: '/',

  // extra tags in `<head>`
  head,

  lang: 'ru-RU',
  title: 'Заметки Вячеслава Арапова',
  description: 'Цифровой сад и база знаний',
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules', '!designs'],

  // configure default theme
  theme: defaultTheme({
    repo: 'slava-arapov/notes.arapov.net',
    docsDir: 'docs',

    navbar: navbarRu,
    sidebar: sidebarRu,
    sidebarDepth: 0,
    editLinkText: 'Редактировать на GitHub',
    lastUpdatedText: 'Обновлено',
    contributorsText: 'Текст писали',
    tip: 'СОВЕТ',
    warning: 'ПРЕДУПРЕЖДЕНИЕ',
    danger: 'ВНИМАНИЕ',
    notFound: [
      'Не найдено',
    ],
    backToHome: 'На главную',
    openInNewWindow: 'открыть в новом окне',
    toggleColorMode: 'сменить тему',
    toggleSidebar: 'показать/скрыть панель',

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // use shiki plugin in production mode instead
      prismjs: !isProd,
    },
  }),

  // configure markdown
  markdown: {
    html: true,
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, '../../packages/@vuepress')
        ),
    },
  },

	extendsMarkdown: md => {
	  md.use(require('markdown-it-task-lists'))
	},

  // use plugins
  plugins: [
    legacyRussianUrls,
    docsearchPlugin({
      appId: 'CTPT4KWVAH',
      apiKey: '483d76188f3b7c296aa219ec0cc58539',
      indexName: 'notes',
      searchParameters: {
        facetFilters: ['tags:v2'],
      },
      placeholder: 'Поиск',
      translations: {
        button: {
          buttonText: 'Поиск',
          buttonAriaLabel: 'Поиск',
        },
        modal: {
          searchBox: {
            resetButtonTitle: 'Очистить',
            resetButtonAriaLabel: 'Очистить',
            cancelButtonText: 'Отменить',
            cancelButtonAriaLabel: 'Отменить',
          },
          startScreen: {
            recentSearchesTitle: 'Последнее',
            noRecentSearchesText: 'Нет последних запросов',
            saveRecentSearchButtonTitle: 'Сохранить поиск',
            removeRecentSearchButtonTitle: 'Удалить поиск из истории',
            favoriteSearchesTitle: 'Избранное',
            removeFavoriteSearchButtonTitle: 'Удалить из избранного',
          },
          errorScreen: {
            titleText: 'Не удаётся получить результаты',
            helpText: 'Проверьте соединение',
          },
          footer: {
            selectText: 'выбрать',
            navigateText: 'переместиться',
            closeText: 'закрыть',
            searchByText: 'Поиск от',
          },
          noResultsScreen: {
            noResultsText: 'Нет результатов по запросу',
            suggestedQueryText: 'Попробуйте поискать по запросу',
            reportMissingResultsText: 'Уверены, что такая информация есть на сайте?',
            reportMissingResultsLinkText: 'Дайте нам знать',
          },
        },
      },
    }),
    // only enable shiki plugin in production mode
    isProd ? shikiPlugin({ theme: 'dark-plus' }) : [],
  ],


})