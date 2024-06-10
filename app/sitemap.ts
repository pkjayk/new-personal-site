import { getBlogPosts } from 'app/musings/utils'

export const baseUrl = 'https://www.jaysonkadlecek.me'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/musings/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/musings'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
