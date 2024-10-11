import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Ben-Salah Blog | Cybersecurity & Web Development',
    description: 'Erfahre mehr über Cybersecurity, Webentwicklung und alles dazwischen.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('../posts/*.md')),
    customData: `<language>de-de</language>`,
  });
}