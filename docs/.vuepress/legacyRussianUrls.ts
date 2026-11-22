import type { PluginObject } from '@vuepress/core'
import { fs } from '@vuepress/utils'

export const legacyRussianUrls: PluginObject = {
  name: 'legacy-russian-urls',
  async onGenerated(app) {
    const pages = app.pages.filter(({ filePathRelative }) => filePathRelative !== null)

    await Promise.all(pages.map(({ path, htmlFilePathRelative }) => {
      const target = path.replace(/&/g, '&amp;')

      return fs.outputFile(app.dir.dest('ru', htmlFilePathRelative), `<!doctype html>
<html lang="ru-RU">
  <head>
    <meta charset="utf-8">
    <link rel="canonical" href="${target}">
    <title>Страница переехала</title>
  </head>
  <body>
    <a id="destination" href="${target}">Перейти к заметке</a>
    <script>
      const destination = document.getElementById('destination').href
      location.replace(destination + location.search + location.hash)
    </script>
  </body>
</html>
`)
    }))
  },
}
