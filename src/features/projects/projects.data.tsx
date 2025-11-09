import type { ProjectOverviewProps } from "./ProjectOverview"

const projectsData: ProjectOverviewProps[] = [
  {
    title: "Hardware Failure Detection System",
    description:
      'Hardware incident handling automation. Leveraged a system of "rules" to accurately troubleshoot, identify potential problems, and take action, i.e., dispatch a hardware technician. Integrated with ServiceNow for incident management, Splunk for log analysis, and Slack for team communications.',
    techStack: [
      "Python",
      "pytest",
      "ServiceNow API",
      "Splunk API",
      "Slack API",
      "GitHub Actions",
      "DataDog",
      "Docker",
    ],
    caseStudyLink: {
      slug: "7d34988f-1bed-46c5-b051-2a3d23c2fcf6",
      text: "Read more on how I tackled scalability and maintainability challenges using two classic design patterns.",
    },
  },
  {
    title: "Platform Communications System",
    description:
      "Mass-email system built in Jira for communicating to the user base of several platforms, including Jira, Confluence, and PagerDuty. Integrated with GitHub Actions to execute code to send emails to the platform(s) users.",
    techStack: [
      "TypeScript",
      "GitHub Actions",
      "Jira Data Center",
      "Jira Automation",
      "Data Center APIs",
      "GitHub API",
      "SMTP",
    ],
  },
  {
    title: "Platform Operations Monitor",
    description:
      "DataDog dashboard to track Jira & Confluence licensing metrics over time, with monitors to alert when low available license thresholds are breached.",
    techStack: [
      "TypeScript",
      "GitHub Actions",
      "DataDog",
      "Atlassian Cloud APIs",
      "Data Center APIs",
    ],
  },
]

export default projectsData
