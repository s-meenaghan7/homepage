import type { WorkExperienceProps } from "./WorkExperience"

const workExperience: WorkExperienceProps[] = [
  {
    title: "Software Engineer",
    company: "Starbucks Coffee Company",
    dates: "December 2023 - July 2025",
    description: [
      "Developed system integrations, business process automations, and internal tooling in support of Atlassian administration.",
      "System administrator of Atlassian Jira & Confluence, supporting over 5,000 users.",
      "Supported Atlassian Cloud Migration to unlock new capabilities and deliver $1.42M/year in savings.",
      "Developed modular and reusable REST API clients for several platforms including Jira, PagerDuty, and ServiceNow.",
      "Leveraged GitHub Actions for CI/CD as well as running scheduled automations.",
      "Launched a testing framework to standardize software QA efforts and prioritization.",
    ],
    logoProps: {
      src: "/logos/starbucks.svg",
      alt: "Starbucks Coffee Company",
      title: "Starbucks Coffee Company",
    },
  },
  {
    title: "Senior Service Desk Analyst",
    company: "Starbucks Coffee Company",
    dates: "July 2023 - December 2023",
    description: [
      "Developed a rule-based system for automated incident handling of payment entry device hardware at North American stores to deliver cost savings exceeding seven figures annually.",
      "Created Python automations to eliminate manual processes at the Service Desk.",
      "Spearheaded automated software testing practices for new and existing code.",
      "Implemented CI/CD pipelines using GitHub Actions to improve software deployment reliability and speed.",
      "Delivered white-glove support for complex technical issues beyond Tier 1 and Tier 2 support.",
      "Demonstrated advanced coding and SDLC proficiency leading to an in-line promotion to Software Engineer.",
    ],
    logoProps: {
      src: "/logos/starbucks.svg",
      alt: "Starbucks Coffee Company",
      title: "Starbucks Coffee Company",
    },
  },
  {
    title: "Service Desk Analyst",
    company: "Apex Systems, LLC.",
    dates: "November 2021 - May 2023",
    description: [
      "18-month contract with Starbucks Coffee Company.",
      "Provided hardware, software, and networking technical support and resolution to over 15,000 retail stores and hundreds of remote end users across North America.",
      "Developed a CLI tool in Python to retrieve recovery keys via API, decreasing retrieval time by ~10x, resulting in reduced call-handling time for a top 5 call driver for the Service Desk.",
      "Collaborated with cross-functional teams to promote knowledge sharing and provide assistance to teammates during difficult incidents.",
      "Documented incidents in ServiceNow ITSM.",
    ],
    logoProps: {
      src: "/logos/apexsystems.svg",
      alt: "Apex Systems, LLC",
      title: "Apex Systems, LLC",
    },
  },
]

export default workExperience
