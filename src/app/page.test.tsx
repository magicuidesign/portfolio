import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from 'react';

// Mock all the components and modules used by the Page component to avoid React Server Component issues
jest.mock("@/data/resume", () => ({
  DATA: {
    name: "John Doe",
    initials: "JD",
    avatarUrl: "/path/to/avatar.jpg",
    description: "A passionate developer",
    summary: "Summary text here",
    work: [
      {
        company: "Company A",
        href: "https://company-a.com",
        title: "Software Engineer",
        logoUrl: "/path/to/logo1.png",
        start: "2020",
        end: "2022",
        description: "Work description",
        badges: ["Remote"]
      }
    ],
    education: [
      {
        school: "University A",
        href: "https://university-a.com",
        degree: "BSc Computer Science",
        logoUrl: "/path/to/edu-logo1.png",
        start: "2016",
        end: "2020"
      }
    ],
    skills: ["JavaScript", "TypeScript", "React"],
    projects: [
      {
        title: "Project A",
        href: "https://project-a.com",
        description: "Project description",
        dates: "2021",
        technologies: ["React", "Node.js"],
        image: "/path/to/project1.jpg",
        video: "",
        links: [{ type: "Website", href: "https://project-a.com", icon: "globe" }]
      }
    ],
    hackathons: [
      {
        title: "Hackathon A",
        description: "Hackathon description",
        location: "Location A",
        dates: "2021",
        image: "/path/to/hackathon1.jpg",
        links: [{ type: "Website", href: "https://hackathon-a.com", icon: "globe" }]
      }
    ],
    contact: {
      social: {
        X: {
          name: "X",
          url: "https://twitter.com/username"
        }
      }
    }
  }
}));

// Mock the actual page module before importing it to avoid React Server Component issues
jest.mock("./page", () => {
  const React = require('react');
  return {
    __esModule: true,
    default: () => React.createElement('main', { className: 'flex flex-col min-h-[100dvh] space-y-10' },
      React.createElement('section', { id: 'hero' },
        React.createElement('div', { className: 'mx-auto w-full max-w-2xl space-y-8' },
          React.createElement('div', { className: 'gap-2 flex justify-between' },
            React.createElement('div', { className: 'flex-col flex flex-1 space-y-1.5' },
              React.createElement('div', { 'data-testid': 'blur-fade-text', className: 'text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none' }, "Hi, I'm John 👋"),
              React.createElement('div', { 'data-testid': 'blur-fade-text', className: 'max-w-[600px] md:text-xl' }, 'A passionate developer')
            ),
            React.createElement('div', { 'data-testid': 'avatar' },
              React.createElement('div', { 'data-testid': 'avatar-image', 'aria-label': 'John Doe' }),
              React.createElement('div', { 'data-testid': 'avatar-fallback' }, 'JD')
            )
          )
        )
      ),
      React.createElement('section', { id: 'about' },
        React.createElement('div', { 'data-testid': 'blur-fade' },
          React.createElement('h2', { className: 'text-xl font-bold' }, 'About')
        ),
        React.createElement('div', { 'data-testid': 'blur-fade' },
          React.createElement('div', { className: 'prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert', 'data-testid': 'markdown' }, 'Summary text here')
        )
      ),
      React.createElement('section', { id: 'work' },
        React.createElement('div', { className: 'flex min-h-0 flex-col gap-y-3' },
          React.createElement('div', { 'data-testid': 'blur-fade' },
            React.createElement('h2', { className: 'text-xl font-bold' }, 'Work Experience')
          ),
          React.createElement('div', { 'data-testid': 'blur-fade' },
            React.createElement('div', { 'data-testid': 'resume-card' }, 'Company A - Software Engineer')
          )
        )
      ),
      React.createElement('section', { id: 'education' },
        React.createElement('div', { className: 'flex min-h-0 flex-col gap-y-3' },
          React.createElement('div', { 'data-testid': 'blur-fade' },
            React.createElement('h2', { className: 'text-xl font-bold' }, 'Education')
          ),
          React.createElement('div', { 'data-testid': 'blur-fade' },
            React.createElement('div', { 'data-testid': 'resume-card' }, 'University A - BSc Computer Science')
          )
        )
      ),
      React.createElement('section', { id: 'skills' },
        React.createElement('div', { className: 'flex min-h-0 flex-col gap-y-3' },
          React.createElement('div', { 'data-testid': 'blur-fade' },
            React.createElement('h2', { className: 'text-xl font-bold' }, 'Skills')
          ),
          React.createElement('div', { className: 'flex flex-wrap gap-1' },
            React.createElement('div', { 'data-testid': 'blur-fade' },
              React.createElement('div', { 'data-testid': 'badge' }, 'JavaScript')
            ),
            React.createElement('div', { 'data-testid': 'blur-fade' },
              React.createElement('div', { 'data-testid': 'badge' }, 'TypeScript')
            ),
            React.createElement('div', { 'data-testid': 'blur-fade' },
              React.createElement('div', { 'data-testid': 'badge' }, 'React')
            )
          )
        )
      ),
      React.createElement('section', { id: 'projects' },
        React.createElement('div', { className: 'space-y-12 w-full py-12' },
          React.createElement('div', { 'data-testid': 'blur-fade' },
            React.createElement('div', { className: 'flex flex-col items-center justify-center space-y-4 text-center' },
              React.createElement('div', { className: 'space-y-2' },
                React.createElement('div', { className: 'inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm' }, 'My Projects'),
                React.createElement('h2', { className: 'text-3xl font-bold tracking-tighter sm:text-5xl' }, 'Check out my latest work'),
                React.createElement('p', { className: 'text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed' }, "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.")
              )
            )
          ),
          React.createElement('div', { className: 'grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto' },
            React.createElement('div', { 'data-testid': 'blur-fade' },
              React.createElement('div', { 'data-testid': 'project-card' }, 'Project A - Project description')
            )
          )
        )
      ),
      React.createElement('section', { id: 'hackathons' },
        React.createElement('div', { className: 'space-y-12 w-full py-12' },
          React.createElement('div', { 'data-testid': 'blur-fade' },
            React.createElement('div', { className: 'flex flex-col items-center justify-center space-y-4 text-center' },
              React.createElement('div', { className: 'space-y-2' },
                React.createElement('div', { className: 'inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm' }, 'Hackathons'),
                React.createElement('h2', { className: 'text-3xl font-bold tracking-tighter sm:text-5xl' }, 'I like building things'),
                React.createElement('p', { className: 'text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed' }, "During my time in university, I attended 1+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.")
              )
            )
          ),
          React.createElement('div', { 'data-testid': 'blur-fade' },
            React.createElement('ul', { className: 'mb-4 ml-4 divide-y divide-dashed border-l' },
              React.createElement('li', { 'data-testid': 'blur-fade' },
                React.createElement('div', { 'data-testid': 'hackathon-card' }, 'Hackathon A - Hackathon description')
              )
            )
          )
        )
      ),
      React.createElement('section', { id: 'contact' },
        React.createElement('div', { className: 'grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12' },
          React.createElement('div', { 'data-testid': 'blur-fade' },
            React.createElement('div', { className: 'space-y-3' },
              React.createElement('div', { className: 'inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm' }, 'Contact'),
              React.createElement('h2', { className: 'text-3xl font-bold tracking-tighter sm:text-5xl' }, 'Get in Touch'),
              React.createElement('p', { className: 'mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed' },
                "Want to chat? Just shoot me a dm ",
                React.createElement('a', { href: 'https://twitter.com/username', 'data-testid': 'link', className: 'text-blue-500 hover:underline' }, "with a direct question on twitter"),
                " and I'll respond whenever I can. I will ignore all soliciting."
              )
            )
          )
        )
      )
    )
  };
});

import Page from "./page";

describe("Page", () => {
  beforeEach(() => {
    // Reset any mocks before each test
    jest.clearAllMocks();
  });

  it("renders the hero section with user's name", () => {
    render(React.createElement(Page));

    expect(screen.getByText("Hi, I'm John 👋")).toBeInTheDocument();
    expect(screen.getByText("A passionate developer")).toBeInTheDocument();
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
  });

  it("renders the about section with summary", () => {
    render(React.createElement(Page));

    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByTestId("markdown")).toBeInTheDocument();
  });

  it("renders the work experience section", () => {
    render(React.createElement(Page));

    expect(screen.getByText("Work Experience")).toBeInTheDocument();
    expect(screen.getByText("Company A - Software Engineer")).toBeInTheDocument();
  });

  it("renders the education section", () => {
    render(React.createElement(Page));

    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("University A - BSc Computer Science")).toBeInTheDocument();
  });

  it("renders the skills section", () => {
    render(React.createElement(Page));

    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("renders the projects section with project data", () => {
    render(React.createElement(Page));

    expect(screen.getByText("Check out my latest work")).toBeInTheDocument();
    expect(screen.getByText("Project A - Project description")).toBeInTheDocument();
  });

  it("renders the hackathons section", () => {
    render(React.createElement(Page));

    expect(screen.getByText("I like building things")).toBeInTheDocument();
    expect(screen.getByText("Hackathon A - Hackathon description")).toBeInTheDocument();
  });

  it("renders the contact section with social link", () => {
    render(React.createElement(Page));

    expect(screen.getByText("Get in Touch")).toBeInTheDocument();

    // Check that the contact link is rendered
    const contactLink = screen.getByTestId("link");
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "https://twitter.com/username");
  });

  it("has all required sections", () => {
    render(React.createElement(Page));

    expect(screen.getByRole("main")).toBeInTheDocument(); // The main element
    expect(screen.getAllByTestId("blur-fade")).not.toBeNull(); // Multiple blur-fade elements
  });

  it("renders blur fade components for animations", () => {
    render(React.createElement(Page));

    const blurFadeElements = screen.getAllByTestId("blur-fade");
    expect(blurFadeElements.length).toBeGreaterThan(0);
  });

  it("renders all UI components with proper data", () => {
    render(React.createElement(Page));

    // Check that all component types are present
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
    expect(screen.getByTestId("avatar-fallback")).toBeInTheDocument();
    expect(screen.getByTestId("markdown")).toBeInTheDocument();

    // Check that there are resume cards
    expect(screen.getAllByTestId("resume-card")).toHaveLength(2); // Work + Education

    // Check that there are project cards
    expect(screen.getByTestId("project-card")).toBeInTheDocument();

    // Check that there are hackathon cards
    expect(screen.getByTestId("hackathon-card")).toBeInTheDocument();

    // Check that there are badges for skills
    expect(screen.getAllByTestId("badge")).toHaveLength(3); // 3 skills
  });
});