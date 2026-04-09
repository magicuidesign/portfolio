import { describe, it, expect } from 'vitest'
import { getBlogPosts } from '@/data/blog'

describe('getBlogPosts', () => {
  it('returns a non-empty array of posts', async () => {
    const posts = await getBlogPosts()
    expect(posts.length).toBeGreaterThan(0)
  })

  it('sorts posts newest-first by publishedAt', async () => {
    const posts = await getBlogPosts()
    for (let i = 1; i < posts.length; i++) {
      const prev = new Date(posts[i - 1].metadata.publishedAt).getTime()
      const curr = new Date(posts[i].metadata.publishedAt).getTime()
      expect(prev).toBeGreaterThanOrEqual(curr)
    }
  })

  it('every post has required frontmatter fields', async () => {
    const posts = await getBlogPosts()
    for (const post of posts) {
      expect(post.slug).toBeTruthy()
      expect(post.metadata.title).toBeTruthy()
      expect(post.metadata.publishedAt).toBeTruthy()
      expect(post.metadata.summary).toBeTruthy()
    }
  })

  it('excludes draft posts', async () => {
    const posts = await getBlogPosts()
    for (const post of posts) {
      expect(post.metadata.draft).not.toBe(true)
    }
  })

  it('every post has a slug derived from filename', async () => {
    const posts = await getBlogPosts()
    for (const post of posts) {
      // slugs follow YYYY-MM-DD-kebab-case pattern
      expect(post.slug).toMatch(/^\d{4}-\d{2}-\d{2}-.+/)
    }
  })
})
