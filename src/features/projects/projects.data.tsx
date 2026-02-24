import type { ProjectOverviewProps } from "./ProjectOverview"

const projectsData: ProjectOverviewProps[] = [
  {
    title: "Homepage & Cloud Resume Challenge",
    description:
      "Professional website built with React, TypeScript, and Material UI. Deployed to AWS with GitHub Actions. Features a serverless backend managed through Terraform and Lambda functions powered by Go. Built as part of the Cloud Resume Challenge.",
    techStack: [
      "React",
      "TypeScript",
      "Material UI",
      "Go",
      "AWS",
      "GitHub Actions",
      "Terraform",
    ],
    caseStudyLink: {
      slug: "cloud-resume-challenge",
      text: "Read more about my experience building this project and completing the Cloud Resume Challenge.",
    },
    context: "personal",
  },
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
    context: "professional",
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
    context: "professional",
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
    context: "professional",
  },
]

export default projectsData
