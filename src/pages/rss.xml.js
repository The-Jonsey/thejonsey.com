import rss from '@astrojs/rss'
import { getCollection } from 'astro:content';

const posts = (await getCollection('blog')).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf())

export function GET(context) {
    return rss({
        title: "Louis Jones' Blog",
        description: "Blog of my musings and random interest",
        site: context.site,
        items: posts.map(post => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/blog/${post.slug}`
        }))
    })
}
