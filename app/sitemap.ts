import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://techphilo.com'

  const routes = [
    '',
    '/schools',
    '/schools/implementation',
    '/schools/pricing',
    '/students',
    '/students/projects',
    '/students/certificates',
    '/teachers',
    '/teachers/tools',
    '/courses',
    '/courses/coding-technology',
    '/courses/financial-literacy',
    '/courses/entrepreneurship-innovation',
    '/courses/communication',
    '/courses/design-thinking',
    '/courses/leadership',
    '/about',
    '/about/team',
    '/resources',
    '/resources/blog',
    '/resources/downloads',
    '/resources/events',
    '/contact',
    '/book-demo',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/schools') || route.startsWith('/courses') ? 0.9 : 0.8,
  }))
}
