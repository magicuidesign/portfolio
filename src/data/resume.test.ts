import { describe, it, expect } from 'vitest'
import { DATA } from '@/data/resume'

describe('DATA (resume)', () => {
  it('has required top-level fields', () => {
    expect(DATA.name).toBeTruthy()
    expect(DATA.url).toBeTruthy()
    expect(DATA.currentRole).toBeTruthy()
    expect(DATA.currentCompany).toBeTruthy()
    expect(DATA.bio).toBeTruthy()
  })

  it('has all contact links with non-empty values', () => {
    const { contact } = DATA
    expect(contact.email).toBeTruthy()
    expect(contact.github).toBeTruthy()
    expect(contact.linkedin).toBeTruthy()
    expect(contact.x).toBeTruthy()
    expect(contact.mastodon).toBeTruthy()
    expect(contact.bluesky).toBeTruthy()
  })

  it('has a non-empty work history', () => {
    expect(DATA.work.length).toBeGreaterThan(0)
  })

  it('every work entry has required fields', () => {
    for (const job of DATA.work) {
      expect(job.company).toBeTruthy()
      expect(job.title).toBeTruthy()
      expect(job.start).toBeTruthy()
      expect(job.end).toBeTruthy()
      expect(job.logoUrl).toBeTruthy()
      expect(job.logoDarkUrl).toBeTruthy()
    }
  })
})
