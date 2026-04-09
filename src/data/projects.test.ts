import { describe, it, expect } from 'vitest'
import { SIDE_PROJECTS } from '@/data/projects'

describe('SIDE_PROJECTS', () => {
  it('is a non-empty array', () => {
    expect(SIDE_PROJECTS.length).toBeGreaterThan(0)
  })

  it('every project has all required fields', () => {
    for (const project of SIDE_PROJECTS) {
      expect(project.slug).toBeTruthy()
      expect(project.title).toBeTruthy()
      expect(project.description).toBeTruthy()
      expect(project.emoji).toBeTruthy()
      expect(project.color).toBeTruthy()
      expect(project.liveUrl).toBeTruthy()
    }
  })

  it('has no duplicate slugs', () => {
    const slugs = SIDE_PROJECTS.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('all URLs start with https://', () => {
    for (const project of SIDE_PROJECTS) {
      expect(project.liveUrl).toMatch(/^https:\/\//)
      if (project.repoUrl) {
        expect(project.repoUrl).toMatch(/^https:\/\//)
      }
    }
  })
})
