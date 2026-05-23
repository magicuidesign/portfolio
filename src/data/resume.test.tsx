import { DATA } from './resume';

describe('Resume DATA object', () => {
  test('should have correct name property', () => {
    expect(DATA.name).toBe('Dillion Verma');
    expect(typeof DATA.name).toBe('string');
  });

  test('should have correct initials property', () => {
    expect(DATA.initials).toBe('DV');
    expect(typeof DATA.initials).toBe('string');
  });

  test('should have correct url property', () => {
    expect(DATA.url).toBe('https://dillion.io');
    expect(typeof DATA.url).toBe('string');
  });

  test('should have correct location property', () => {
    expect(DATA.location).toBe('San Francisco, CA');
    expect(typeof DATA.location).toBe('string');
  });

  test('should have correct locationLink property', () => {
    expect(DATA.locationLink).toBe('https://www.google.com/maps/place/sanfrancisco');
    expect(typeof DATA.locationLink).toBe('string');
  });

  test('should have correct description property', () => {
    expect(typeof DATA.description).toBe('string');
    expect(DATA.description).toContain('Software Engineer');
  });

  test('should have correct summary property', () => {
    expect(typeof DATA.summary).toBe('string');
    expect(DATA.summary.length).toBeGreaterThan(0);
  });

  test('should have correct avatarUrl property', () => {
    expect(DATA.avatarUrl).toBe('/me.png');
    expect(typeof DATA.avatarUrl).toBe('string');
  });

  test('should have navbar array with correct structure', () => {
    expect(Array.isArray(DATA.navbar)).toBe(true);
    expect(DATA.navbar.length).toBeGreaterThan(0);
    DATA.navbar.forEach(item => {
      expect(item).toHaveProperty('href');
      expect(item).toHaveProperty('icon');
      expect(item).toHaveProperty('label');
      expect(typeof item.href).toBe('string');
      expect(typeof item.label).toBe('string');
    });
    expect(DATA.navbar[0].href).toBe('/');
    expect(DATA.navbar[0].label).toBe('Home');
    expect(DATA.navbar[1].href).toBe('/blog');
    expect(DATA.navbar[1].label).toBe('Blog');
  });

  test('should have contact object with correct structure', () => {
    expect(typeof DATA.contact).toBe('object');
    expect(DATA.contact).toHaveProperty('email');
    expect(DATA.contact).toHaveProperty('tel');
    expect(DATA.contact).toHaveProperty('social');
    expect(typeof DATA.contact.email).toBe('string');
    expect(typeof DATA.contact.tel).toBe('string');
    expect(typeof DATA.contact.social).toBe('object');
  });

  test('should have correct contact email', () => {
    expect(DATA.contact.email).toBe('hello@example.com');
  });

  test('should have correct contact tel', () => {
    expect(DATA.contact.tel).toBe('+123456789');
  });

  test('should have social media links with correct structure', () => {
    const social = DATA.contact.social;
    expect(social).toHaveProperty('GitHub');
    expect(social).toHaveProperty('LinkedIn');
    expect(social).toHaveProperty('X');
    expect(social).toHaveProperty('Youtube');
    expect(social).toHaveProperty('email');

    Object.keys(social).forEach(key => {
      const socialItem = social[key];
      expect(socialItem).toHaveProperty('name');
      expect(socialItem).toHaveProperty('url');
      expect(socialItem).toHaveProperty('icon');
      expect(socialItem).toHaveProperty('navbar');
      expect(typeof socialItem.name).toBe('string');
      expect(typeof socialItem.url).toBe('string');
      expect(typeof socialItem.navbar).toBe('boolean');
    });

    expect(social.GitHub.name).toBe('GitHub');
    expect(social.GitHub.url).toContain('dillion-github');
    expect(social.GitHub.navbar).toBe(true);

    expect(social.email.name).toBe('Send Email');
    expect(social.email.url).toBe('#');
    expect(social.email.navbar).toBe(false);
  });

  test('should have work array with correct structure', () => {
    expect(Array.isArray(DATA.work)).toBe(true);
    expect(DATA.work.length).toBeGreaterThan(0);

    DATA.work.forEach(work => {
      expect(work).toHaveProperty('company');
      expect(work).toHaveProperty('href');
      expect(work).toHaveProperty('badges');
      expect(work).toHaveProperty('location');
      expect(work).toHaveProperty('title');
      expect(work).toHaveProperty('logoUrl');
      expect(work).toHaveProperty('start');
      expect(work).toHaveProperty('end');
      expect(work).toHaveProperty('description');
      expect(typeof work.company).toBe('string');
      expect(typeof work.href).toBe('string');
      expect(Array.isArray(work.badges)).toBe(true);
      expect(typeof work.location).toBe('string');
      expect(typeof work.title).toBe('string');
      expect(typeof work.logoUrl).toBe('string');
      expect(typeof work.start).toBe('string');
      expect(typeof work.end).toBe('string');
      expect(typeof work.description).toBe('string');
    });

    expect(DATA.work[0].company).toBe('Atomic Finance');
    expect(DATA.work[0].title).toBe('Bitcoin Protocol Engineer');
    expect(DATA.work[0].href).toBe('https://atomic.finance');
  });

  test('should have education array with correct structure', () => {
    expect(Array.isArray(DATA.education)).toBe(true);
    expect(DATA.education.length).toBeGreaterThan(0);

    DATA.education.forEach(edu => {
      expect(edu).toHaveProperty('school');
      expect(edu).toHaveProperty('href');
      expect(edu).toHaveProperty('degree');
      expect(edu).toHaveProperty('logoUrl');
      expect(edu).toHaveProperty('start');
      expect(edu).toHaveProperty('end');
      expect(typeof edu.school).toBe('string');
      expect(typeof edu.href).toBe('string');
      expect(typeof edu.degree).toBe('string');
      expect(typeof edu.logoUrl).toBe('string');
      expect(typeof edu.start).toBe('string');
      expect(typeof edu.end).toBe('string');
    });

    expect(DATA.education[0].school).toBe('Buildspace');
    expect(DATA.education[1].school).toBe('University of Waterloo');
    expect(DATA.education[2].school).toBe('Wilfrid Laurier University');
  });

  test('should have projects array with correct structure', () => {
    expect(Array.isArray(DATA.projects)).toBe(true);
    expect(DATA.projects.length).toBeGreaterThan(0);

    DATA.projects.forEach(project => {
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('href');
      expect(project).toHaveProperty('dates');
      expect(project).toHaveProperty('active');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('technologies');
      expect(project).toHaveProperty('links');
      expect(typeof project.title).toBe('string');
      expect(typeof project.href).toBe('string');
      expect(typeof project.dates).toBe('string');
      expect(typeof project.active).toBe('boolean');
      expect(typeof project.description).toBe('string');
      expect(Array.isArray(project.technologies)).toBe(true);
      expect(Array.isArray(project.links)).toBe(true);
    });

    const firstProject = DATA.projects[0];
    expect(firstProject.title).toBe('Chat Collect');
    expect(firstProject.href).toBe('https://chatcollect.com');
    expect(firstProject.active).toBe(true);
    expect(firstProject.technologies).toContain('Next.js');
    expect(firstProject.technologies).toContain('Typescript');
  });

  test('should have project links with correct structure', () => {
    DATA.projects.forEach(project => {
      project.links.forEach(link => {
        expect(link).toHaveProperty('type');
        expect(link).toHaveProperty('href');
        expect(link).toHaveProperty('icon');
        expect(typeof link.type).toBe('string');
        expect(typeof link.href).toBe('string');
      });
    });

    const firstLink = DATA.projects[0].links[0];
    expect(firstLink.type).toBe('Website');
    expect(firstLink.href).toBe('https://chatcollect.com');
  });

  test('should have hackathons array with correct structure', () => {
    expect(Array.isArray(DATA.hackathons)).toBe(true);
    expect(DATA.hackathons.length).toBeGreaterThan(0);

    DATA.hackathons.forEach(hackathon => {
      expect(hackathon).toHaveProperty('title');
      expect(hackathon).toHaveProperty('dates');
      expect(hackathon).toHaveProperty('location');
      expect(hackathon).toHaveProperty('description');
      expect(typeof hackathon.title).toBe('string');
      expect(typeof hackathon.dates).toBe('string');
      expect(typeof hackathon.location).toBe('string');
      expect(typeof hackathon.description).toBe('string');
    });

    const firstHackathon = DATA.hackathons[0];
    expect(firstHackathon.title).toBe('Hack Western 5');
    expect(firstHackathon.location).toBe('London, Ontario');
  });

  test('should have hackathon links with correct structure when present', () => {
    DATA.hackathons.forEach(hackathon => {
      if (hackathon.links && Array.isArray(hackathon.links)) {
        hackathon.links.forEach(link => {
          expect(link).toHaveProperty('title');
          expect(link).toHaveProperty('icon');
          expect(link).toHaveProperty('href');
          expect(typeof link.title).toBe('string');
          expect(typeof link.href).toBe('string');
        });
      }
    });

    // Check a specific hackathon that has links
    const hackDavis = DATA.hackathons.find(h => h.title === 'HackDavis');
    if (hackDavis) {
      expect(hackDavis.links.length).toBeGreaterThan(0);
      expect(hackDavis.links[0].title).toBe('Devpost');
      expect(hackDavis.links[0].href).toBe('https://devpost.com/software/my6footprint');
    }
  });

  test('should have optional hackathon properties correctly defined', () => {
    const hackDavis = DATA.hackathons.find(h => h.title === 'HackDavis');
    if (hackDavis) {
      expect(hackDavis).toHaveProperty('win');
      expect(hackDavis.win).toBe('Best Data Hack');
      expect(hackDavis).toHaveProperty('mlh');
    }

    const globalAIHackathon = DATA.hackathons.find(h => h.title === 'Global AI Hackathon - Toronto');
    if (globalAIHackathon) {
      expect(globalAIHackathon).toHaveProperty('win');
      expect(globalAIHackathon.win).toBe('1st Place Winner');
    }
  });

  test('should have consistent data types across all required properties', () => {
    // Check that name fields are strings
    expect(typeof DATA.name).toBe('string');
    expect(typeof DATA.initials).toBe('string');
    expect(typeof DATA.url).toBe('string');
    expect(typeof DATA.location).toBe('string');
    expect(typeof DATA.description).toBe('string');
    expect(typeof DATA.summary).toBe('string');
    expect(typeof DATA.avatarUrl).toBe('string');

    // Check contact details
    expect(typeof DATA.contact.email).toBe('string');
    expect(typeof DATA.contact.tel).toBe('string');

    // Check that arrays are actually arrays
    expect(Array.isArray(DATA.skills)).toBe(true);
    expect(Array.isArray(DATA.navbar)).toBe(true);
    expect(Array.isArray(DATA.work)).toBe(true);
    expect(Array.isArray(DATA.education)).toBe(true);
    expect(Array.isArray(DATA.projects)).toBe(true);
    expect(Array.isArray(DATA.hackathons)).toBe(true);
  });
});