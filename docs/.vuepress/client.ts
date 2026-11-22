import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ router }) {
    router.beforeEach((to) => {
      if (to.name !== '404') return

      const docsearchUrlInRoute = /(?:^|\/)(?:https?:)?\/\/notes\.arapov\.net(?=\/|$)/i
      const russianPrefix = /^\/ru(?=\/|$)/
      const docsearchPath = to.path.split(docsearchUrlInRoute)[1]
      const path = docsearchPath ?? to.path
      if (docsearchPath === undefined && !russianPrefix.test(path)) return

      const target = path.replace(russianPrefix, '') || '/'
      if (router.resolve(target).name !== '404') {
        return { path: target, query: to.query, hash: to.hash }
      }
    })
  },
})
