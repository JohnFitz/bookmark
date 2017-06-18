import cheerio from 'cheerio'
import got from 'got'
import urlUtil from 'url'

export default {
  extractLink (url, cat) {
    return new Promise((resolve, reject) => {
      got(url, { useElectronNet: false }).then(response => {
        const $ = cheerio.load(response.body)
        const title = $('title').text()
        const favicon = $('link[rel="icon"], link[rel="shortcut icon"], link[rel="Shortcut Icon"]').last().attr('href')
        resolve({
          title: title,
          favicon: urlUtil.resolve(url, favicon),
          category: cat,
          link: url
        })
      })
    })
  }
}
