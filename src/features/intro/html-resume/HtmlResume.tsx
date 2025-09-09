import "./HtmlResume.css"

export function HtmlResume() {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>Sean Meenaghan</h1>
        <p>
          Lake Stevens, WA | (360) 391-1345 |{" "}
          <a
            href="mailto:seanmeenaghan@gmail.com"
            target="_blank"
          >
            seanmeenaghan@gmail.com
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/seanmeenaghan/"
            target="_blank"
          >
            My LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/s-meenaghan7"
            target="_blank"
          >
            My GitHub
          </a>
        </p>
      </header>

      <section className="resume-section">
        <h2>Summary</h2>
        <ul>
          <li>
            Backend-focused software engineer with 2+ years professional experience in
            software development lifecycle and systems engineering. My background is
            primarily backend development, business process automation, system
            integrations, platform administration, automated testing, and CICD
            pipelines.
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>

        <div className="resume-experience-item">
          <p className="experience-header">
            Software Engineer | Starbucks Coffee Company
          </p>
          <p>December 2023 - July 2005</p>
          <ul>
            <li>
              Developed system integrations, business process automations, and CLI tools
              using <strong>TypeScript</strong> and <strong>Python</strong> to
              streamline the administration of platforms, significantly reducing manual
              effort and operational costs.
            </li>
            <li>
              System administrator of Atlassian Jira & Confluence, supporting over 5,000
              users each.
            </li>
            <li>
              Major contributor to Atlassian Cloud Migration project to unlock new
              capabilities, facilitate global collaboration, reduce operational
              overhead, and deliver $1.42M/year in savings w/ 90% faster reporting.
            </li>
            <li>
              Engineered Active Directory group sync integration to support identity
              management and access control in Atlassian Cloud, reducing group sync
              overhead by 98.5% (~100k groups down to ~1.5k).
            </li>

            <li>
              Developed a full stack mass-email system, providing a simple user
              interface in Jira for platform admins to mass-email users of Jira,
              Confluence, and/or Jira Service Management. Provides a simple, scalable
              method to communicate platform changes, Cloud migration project status,
              and timeline.
            </li>
            <li>
              Researched 3rd-party app usage in Jira & Confluence Data Center to help
              phase out apps made redundant by Atlassian Cloud, reducing current and
              future costs by &gt;= $50k annually.
            </li>
            <li>
              Ran <strong>SQL</strong> queries in legacy{" "}
              <strong>PostgreSQL database</strong> storing licensing metrics on Jira &
              Confluence Data Center to accurately forecast future licensing projections
              and costs.
            </li>
            <li>
              Created <strong>DataDog</strong> dashboard to track Jira and Confluence
              licensing metrics over time, with monitors to alert when high thresholds
              are breached. Licensing metrics provided to DataDog via TypeScript scripts
              scheduled via <strong>GitHub Actions</strong>.
            </li>
            <li>
              Pioneered adoption of <strong>Atlassian Forge</strong> to support
              company-wide Atlassian Cloud migration, enabling the development of custom
              cloud-compatible solutions and establishing foundational knowledge for
              future Jira Cloud extensibility.
            </li>
            <li>
              Developed a custom CLI tool to extract audit logs from Jira and Confluence
              Cloud, formatting them for ingestion by a Splunk Universal Forwarder to
              meet security compliance requirements.
            </li>
            <li>
              Played crucial role in Jira Service Management (JSM) deprecation,
              consolidating intake workflows into ServiceNow across the enterprise,
              contributing to cost savings &gt;$100k/year through platform
              rationalization.
            </li>
            <li>
              Launched a testing framework to streamline QA efforts across the team,
              encouraging well-tested software with &gt;= 60% code coverage, focused on
              testing the most critical & high-impact components of code.
            </li>
            <li>
              Contributed consistently to code reviews to promote high coding standards
              and collaborative solution design across the engineering team.
            </li>
            <li>
              Contributed to formal change management processes, ensuring production
              changes were safe, well-documented, and communicated effectively to
              minimize downtime and user disruption.
            </li>
            <li>
              Created and maintained detailed documentation on software tools,
              applications, automations, and team/operational SOPs to proactively reduce
              and prevent technical debt.
            </li>
          </ul>
        </div>

        <div className="resume-experience-item">
          <p className="experience-header">
            Senior Service Desk Analyst | Starbucks Coffee Company
          </p>
          <p>July 2023 - December 2023</p>
          <ul>
            <li>
              Demonstrated advanced coding proficiency and understanding of the software
              development lifecycle, leading to an in-line promotion to Software
              Engineer.
            </li>
            <li>
              Created <strong>Python automations</strong> that eliminated manual
              processes at the Service Desk, driving operational efficiency and
              delivering cost savings exceeding seven figures annually across multiple
              teams.
            </li>
            <li>
              Spearheaded automated software testing practices for new and existing
              code.
            </li>
            <li>
              Implemented <strong>CI/CD pipelines using GitHub Actions</strong>,
              improving software deployment reliability and speed.
            </li>
            <li>
              Delivered white-glove support for complex technical issues escalated
              beyond Tier 1 and 2, successfully resolving cases that had previously gone
              unresolved.
            </li>
            <li>
              Collaborated with cross-functional teams to build strong partnerships and
              enhance knowledge sharing, empowering Tier 1 and 2 teams to resolve a
              greater volume of issues independently.
            </li>
            <li>
              Provided guidance and support to junior analysts, contributing to their
              technical growth and improved performance.
            </li>
            <li>
              Worked in an <strong>Agile</strong> environment using Jira for sprint
              planning, daily standups, and retrospectives to drive continuous
              improvement and team alignment.
            </li>
          </ul>
        </div>

        <div className="resume-experience-item">
          <p className="experience-header">
            Service Desk Analyst | Apex Systems, LLC. (Contract w/ Starbucks Coffee
            Company)
          </p>
          <p>November 2021 - May 2023</p>
          <ul>
            <li>
              Built <strong>Python tool</strong> for retrieving recovery keys via API,
              decreasing retrieval time by approx. 10x, reducing call-handling time for
              a top 5 Service Desk call driver (MacBook lock-out recovery).
            </li>
            <li>
              Provides technical troubleshooting expertise to approx. 15,000 retail
              stores and hundreds of remote end users across the enterprise in a mixed
              OS environment (macOS and Windows).
            </li>
            <li>
              Rapidly resolves hardware failures, software malfunctions, network related
              incidents, exceeding call handling time expectations, first-contact
              resolution &gt;50% and &gt;=100 contacts/week, on avg.
            </li>
            <li>
              Communicates well with technical and non-technical audiences alike;
              educates others to facilitate a better understanding of technology.
            </li>
            <li>Professional ticket documentation completed in ServiceNow.</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <ul>
          <li>
            TypeScript, Node.js, React.js, Python, Java, git, GitHub Actions, CICD, OOP,
            OOD, Jira admin, Confluence admin, Atlassian Cloud admin, ServiceNow,
            DataDog, Splunk, SQL, Agile
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>
              Bachelor of Science in Software Development – Western Governors University
            </strong>{" "}
            – 2019 - 2022
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Certifications</h2>
        <ul>
          <li>
            <strong>AWS Certified Cloud Practitioner</strong>
          </li>
        </ul>
      </section>
    </div>
  )
}
