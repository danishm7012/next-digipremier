// import { SitemapStream, streamToPromise } from "sitemap";
import Slugs from '../../lib/Slugs'
const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')

export default async (req, res) => {
  try {
    // An array with your links
    const links = []
    Slugs.map((post) => {
      links.push({
        url: `/${post.params.slug}`,
        changefreq: 'daily',
        priority: 0.9,
      })
    })

    // Add other pages
    const pages = [
      '/packages',
      '/contact',
      '/news',
      '/testimonial',
      '/GetQuote',
      '/about',
      '/careers',
    ]
    pages.map((url) => {
      links.push({
        url,
        changefreq: 'daily',
        priority: 0.9,
      })
    })

    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    })

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString())

    res.end(xmlString)
  } catch (e) {
    console.log(e)
    res.send(JSON.stringify(e))
  }
}
