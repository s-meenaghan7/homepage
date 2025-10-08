import type { ProjectOverviewProps } from "./ProjectOverview"

const projectsData: ProjectOverviewProps[] = [
  {
    title: "Rule-based PED Failure Detection System",
    description:
      'PED (payment entry device) incident handling automation. Leveraged a system of "rules" to accurately diagnose, troubleshoot, and take action. Actions included routing ServiceNow incidents to the appropriate team to install/update software and/or dispatching hardware technicians to replace the device.',
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
  },
  {
    title: "Platform Communications System",
    description:
      "Mass-email system for communicating to the user base of several platforms, including Jira, Confluence, and PagerDuty. Used Jira Data Center as a frontend with GitHub Actions to execute TypeScript code for sending emails to the platform(s) users.",
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
