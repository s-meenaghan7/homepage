# The Cloud Resume Challenge

Read time: 15 - 20 minutes

---

## The Cloud Resume Challenge: What & Why
### Overview
In February 2025, I completed the <a href="https://cloudresumechallenge.dev/docs/the-challenge/aws/" target="_blank">Cloud Resume Challenge</a> (CRC), a hands-on project designed to learn and incorporate skills that cloud and DevOps engineers use in their daily work with cloud services, such as AWS, Azure, or GCP.

The CRC was created by **Forrest Brazeal** in ~2020, and you can learn more about him <a href="https://forrestbrazeal.com/" target="_blank">here</a>.

This blog post is the final step required to complete the challenge, explaining why I took the challenge and some things I learned along the way.

### What
Completing the CRC involves working across the full tech stack with several key components:
- cloud-native development with a major cloud provider, sometimes called a <a href="https://en.wikipedia.org/wiki/Hyperscale_computing" target="_blank">hyperscaler</a>, and obtaining a foundational certification related to that provider.
- frontend web development
- backend API and database development
- creating CI/CD pipelines to run tests and manage deployments automatically
- writing Infrastructure as Code (IaC) to manage and deploy cloud resources

The end result is a full-stack website hosted in the cloud with resources managed via IaC and deployed via GitHub Actions. At a minimum, the website features your resume and a visitor counter. Your website uses an API and database to store and update the count each time your website loads in a web browser.

This project is conceptually very simple, and I like it a lot, with the primary reasons being:
1. the project is a hands-on learning exercise. Yes, the end result is very simple, but to a total beginner, it's absolutely a challenge! It's important to start small and build your way up, or you'll get lost and fail to understand the fundamentals. This project helps you do exactly that. It also helps you understand what cloud-native development is and if cloud is really a career path you'd like to take.
2. The CRC provides you with _structured, high-level steps_. It tells you exactly _what_ you need to do, but does not specify much of the _how_. For starters, nowhere in the CRC website mentions anything about IAM roles or permissions, but you better bet you'll need to learn about them!

### Why
For several years, I have worked in tech roles, including and most recently as an engineer. I was involved in creating system integrations, automating business processes with code, developing and maintaining CI/CD pipelines, and more. I was already very familiar with the technologies and work involved for many of the challenge's steps.

With that said, my motivation for undertaking this challenge was twofold:
1. build myself a modern developer homepage (portfolio site)
2. get direct experience working in the cloud (specifically AWS)

I decided that this challenge would be a great way to achieve both goals and keep things interesting. Considering my own level of experience, I opted to implement a few minor adjustments while still honoring the essence of each step and the outcome of the challenge.

---
## What I Did & What I Learned
Each section below is a deep-dive on a particular component of the CRC, including what I did and what I learned. I had _a lot_ to say, so each section has expandable subsections. You can expand and read these sections to get the longer version of this post or skip them for the shorter version.

I want to briefly mention that **there is no requirement to complete the steps in any particular order**. Many of the steps can (or even should) be completed out of order or simultaneously. Before embarking on the CRC, I strongly suggest reading all the steps to help you plan where you want to start.

### Certification (step 1)
The first step of the challenge is to obtain the relevant foundation-level certification for the cloud provider of your choice. The CRC has multiple variants tailored to AWS, Azure, or GCP. For myself, I choose AWS and the **AWS Cloud Practitioner certification**.

Studying for this certification involves learning about AWS and a high-level overview of its over 200 cloud services, such as S3, EC2, Lambda, and CloudFront, and the various categories of services offered. Other topics include the shared responsibility model, managing costs effectively, and identifying AWS services for common use cases. You don't need prior experience with AWS or coding to successfully prepare for and pass this exam.

<details>
<summary>Studying for the exam</summary>

The exam guide has 4 domains, each covering a certain percentage of the exam's questions. It is important to focus on each section accordingly and do not mistake this exam as an "AWS service knowledge check." You will need to understand concepts such as the Well-Architected Framework and its pillars, Cloud Adoption Framework, and other concepts such as availability, elasticity, agility, managed vs. unmanaged services, and more.

My study plan took 3 - 4 weeks of preparation, studying an average of 1 - 2 hours daily. My primary resources included the <a href="https://docs.aws.amazon.com/aws-certification/latest/examguides/cloud-practitioner-02.html?refid=e7dab476-e788-4e8c-abad-50f7a567ffad" target="_blank">official exam guide</a> and <a href="https://aws.amazon.com/training/skills-centers/" target="_blank">AWS Skills Center</a> learning sessions. Of course, you should also sign up for AWS, which is free, to at least acquaint yourself with the AWS console and what it's like working in AWS. Many of the services have a free tier which is great for beginners (and those completing the CRC!). The AWS Skills Center sessions were good to have and helped me structure my study sessions, but you'll need to do more to fully prepare for the exam. Be sure to review the exam guide to fully understand what will be covered.
</details>

### Frontend Website (steps 2 - 6)
Steps 2 - 6 are all about building and hosting your website in the cloud. At the minimum, you need to use HTML and CSS to create and style your resume. For myself, I wanted to build my own website; the HTML/CSS resume is just one of its features.

<details>
<summary>Implementation Details</summary>

My website - where this blog post is hosted - was built with TypeScript, React.js, and Material UI. I used Vite for build and development. I already possessed strong expertise with TypeScript and had strong familiarity with React. While Material UI was entirely new to me, I really enjoyed using it because it allows me to focus more on building my website, and less on tinkering with CSS. The learning curve isn't very high either, as long as you already understand CSS fundamentals.

My resume loads in a modal after clicking a button. To stay as true to the original requirement as possible, the resume itself is just one React component; all the components that make up the resume are simple HTML elements like `div`s and `li`s. I also used raw CSS to style this component.
</details>

<details>
<summary>AWS Services</summary>

The next step is to configure an **AWS S3 bucket** for static website deployment. S3 is an object storage service within AWS, and it can easily be configured to store your website files. There are several methods for hosting a website on AWS, but for a simple, static website, S3 is great (and will be close or completely free for our uses). The bucket contains the website files that will be downloaded and rendered by a user's web browser. Once this is set up, the S3 bucket has a publicly available URL, like `http://my-unique-bucket.s3.us-west-2.amazonaws.com`. Not very attractive or easy to remember, is it? You might've also noticed the security-lacking `http` protocol. We want to use `https`, and that'll require additional configuration.

We can secure our website with a **CloudFront** distribution, and set up proper DNS with **Route 53**. CloudFront is a content delivery network (CDN) that helps ensure your website's security, as well as reducing load times by caching your website data globally.

Route 53 is a DNS service. Among its many features, it allows you to register your website with a proper domain name, like `seanmeenaghan.com`. Once you register an available domain name, you can point it to your CloudFront distribution, and now your S3 bucket can be reached at `https://your-resume-site.com`.

At this point, I was also using GitHub Actions and the AWS CLI to deploy my website automatically in a CI/CD pipeline, but I'll elaborate on those details in a later section.
</details>

### Backend API & Database (steps 7 - 10)
This section was the most enjoyable part of the CRC for me, with several challenges and learning opportunities. Step 7 is to create a visitor counter on your website. This counter is just a number that indicates how many times your website has been visited.

To implement the visitor counter, you'll need a database to store the visitor count value. You don't want your website to interact with that database directly, though, so you'll need to stand up an API and write some custom logic for it with Python.

Python will work well and is well-received by beginners. However, I am already well-versed in Python and have used it extensively in my career. To give myself a bit more of a challenge and another learning experience, I decided to use **Go**. I won't elaborate on the what and why of Go here, but I'll include some additional thoughts at the end of this article.

<details>
<summary>Implementation Details</summary>

Beginning with the visitor counter on the frontend, I created a React component that sends an HTTP `POST` request to an API endpoint. That API is expected to return the visitor counter value which the React component renders. While I didn't have a "real" API in AWS yet to test that my website was calling it correctly, it's actually not necessary and better to not rely on it during this stage in development. For local development, I created a small Node Express server that functioned as a "mock" for my API and database. It accepts the API requests made from the frontend and returns an incremented value. An environment variable is used to configure the API URL that is called, so this value can be injected at run/build time, making it easy to configure the URL for production or development.

Now, before the production website can fetch or modify the visitor count, the backend needs to exist. This will be composed of several AWS resources that the CRC recommends:
- **API Gateway**: this fully managed service allows you to set up an API in AWS which can receive and respond to HTTP web requests (such as from your website/web browser or `cURL`). API Gateway functions as the "front door" to your backend, handling reception of HTTP requests and where to route them.
- **Lambda**: Lambda is used for running "serverless" code. When we say serverless, we mean that the developer can focus on code and business logic without needing to worry about server management or maintenance -- AWS takes care of that for us. An AWS Lambda will be responsible for running my code while API Gateway integrates with my Lambda by routing web requests to it. Whenever the API Gateway is called, the corresponding Lambda is triggered.
    - You can configure separate Lambdas for each route (`GET` and `POST`). Done this way, your Lambda code doesn't need to care what HTTP method was used to trigger it. However, this visitor counter Lambda is very simple and highly unlikely to evolve or change, so I opted for a single Lambda that can handle different HTTP methods.
- **DynamoDB**: this is AWS's fully managed NoSQL database solution. I had worked with databases before, including MongoDB, another NoSQL database. DynamoDB is a bit different, so there was some learning curve here. The code executed in the Lambda will interact with a DynamoDB table to store and retrieve the visitor count value.

You may notice that I described each service above as either **fully managed** or **serverless**. These descriptors have some differences and many similarities, but they essentially boil down to this: The cloud provider manages the infrastructure while you focus on the business logic and what you need the service to do.
</details>

<details>
<summary>Bringing it all together</summary>

1. When your website loads in a web browser, an HTTP web request is made to your API Gateway. The API Gateway has "routes", sometimes called endpoints, configured. These endpoints offer different functionalities, depending on the route your web request makes and the HTTP method. For this project, I set up two routes for the visitor counter: a `GET` request, mostly used for testing to simply retrieve the visitor count value from the database, and a `POST` request, used to increment the visitor count value and return that incremented value. The production visitor counter is sending a `POST` request.
2. After API Gateway receives your request, it follows the designated route. Each route is integrated with my Lambda, meaning that each API Gateway route will trigger the Lambda code to execute. Within your Lambda, you can write whatever code your business logic requires.
3. The Lambda code that executes is responsible for interacting with our visitor counter DynamoDB table. For the visitor counter, the logic is very simple. I used the **Go AWS SDK v2**, providing me with tools to process the HTTP requests from API Gateway, interact with the DynamoDB table, and then return the visitor count value in our response.
</details>

### Testing (step 11)
In software engineering, we write tests to assert the correct behavior of our code. Test suites act as a kind of living documentation that defines how your code behaves. If your code's behavior changes in an unexpected way, a well-written test suite will catch this regression and help inform your design decisions. Most importantly, this helps prevent hidden bugs from slipping into your production software.

Programming languages have different methods and tools available for testing code written in their language. Go boasts great built-in test tooling, so if you have Go installed, you should have everything you need to get started. When using Python, I've used the standard library module `unittest` as well as `pytest`.

<details>
<summary>Unit & Integration Testing</summary>

There are several kinds of automated software testing that usually differ in the scope of what is being tested. For example, the scope of your test could be a single function, an entire feature, workflow, or testing the application end-to-end. For my Go Lambda, I wrote two different kinds of tests:
- **Unit Tests**: unit tests are small, deterministic tests on individual units of code. The _unit_ refers to an atomic piece of software that can be tested, typically a single function or method. Each test arranges any required pre-test state, such as function parameters or expected output, executes the code under test (i.e., a single function), and finally asserts that the test code output matches some expected value or condition. Unit tests are fast, small, and many, making up the majority of tests written for most codebases.
- **Integration Tests**: integration tests are slightly more complex than unit tests. These tests are responsible for testing parts of your code that interact with some external system, like an API or database. Integration tests are structured similarly to unit tests, but usually require more complex setup due to the external system involved. For example, your integration test suite may set up a local version of your database to work with and anything else required, such as credentials. This extra setup usually results in slower to execute tests. In my case, integration tests were written to test the code that interacts with DynamoDB.

Integration testing was an interesting experience that I was less familiar with: The code I wanted to test was responsible for interacting with a DynamoDB table in AWS. When testing, we don't want to rely on the real API or database tables. However, you don't want to just mock away the external system, either. For my integration tests, I used a tool called `testcontainers`. This tool is used to create local Docker containers that contain local versions of your external dependencies. For my use case, I create a test container using a DynamoDB Docker image. This creates a local -- but real -- DynamoDB database inside the container. When I execute my integration tests, they use this temporary database. When tests are complete, the container is easily cleaned up.
</details>

### Infrastructure as Code (IaC) (step 12)
This is the only step I had absolutely zero prior experience with before embarking on this challenge. IaC is exactly what it says it is: a way to define your _**i**nfrastructure **a**s **c**ode_. Your infrastructure is all the stuff in AWS required by your application: your API Gateway resources, Lambda, S3 buckets, DynamoDB tables, and so on. An AWS user can certainly log in through a web browser and use the GUI to navigate to various services and manage them manually; there's nothing inherently wrong with this and is a great starting point. However, using IaC will save you time in the long run:
- IaC code becomes the **source of truth** for your infrastructure configuration. Cloud resource changes are a type of code change, necessitating code review. This helps ensure changes are not made inadvertently by involving multiple engineers on the code change.
- Use IaC in a deployment pipeline to plan and apply infrastructure changes automatically.
- Infrastructure is made **repeatable**; your AWS resource definitions can be easily copied and applied elsewhere as needed.
- IaC can be useful in disaster recovery situations. Imagine a situation where all (or some) of your infrastructure needs to be recreated, and quickly. This could be disaster recovery, or it could be part of a migration effort to a separate AWS account. Your IaC tool can rapidly re-provision that infrastructure and ensure it matches the exact configuration required by your software.

<details>
<summary>Terraform HCL</summary>

AWS and Azure each have their own IaC tools specific to their environments. However, I decided to use **Terraform**, a common and broadly-applicable IaC tool. Terraform uses plugins called **providers** that tell Terraform how to interact with the resources of a particular environment. For example, there are Terraform providers for AWS, Azure, and GCP.

Terraform does not take long to learn how to use; although I am certain I haven't learned everything about it, the core features are not hard to grasp. Terraform uses a declarative language called HashiCorp Configuration Language (HCL). You use this simple language to declare your cloud resources. The learning curve is mostly dependent on your knowledge of the provider you are using. If you've set up an AWS S3 bucket in the AWS console before, you can do it with Terraform.
</details>

<details>
<summary>Challenges - AWS Roles and Permissions</summary>

One of the larger challenges I faced with Terraform was understanding how much permission to delegate to the AWS role that Terraform assumes when applying infrastructure changes in AWS. I won't go into too much detail about authentication with AWS, but the core idea is this: Terraform (and any other tool) needs to authenticate with AWS in order to access your account and make changes to resources. That tool will use credentials that will allow it to assume a **role** in your AWS account with certain **permissions** defined on that role via a **policy**. The tool (Terraform) can only do things in AWS that the assumed role allows.

You typically want to limit the permissions of your roles to whatever is required of that role, **and nothing more**. This is a core security concept called **Principle of Least Privilege**. However, if your Terraform role lacks permissions to make changes to resources when you try to apply those changes, errors will occur and inform you of the permissions that the role is lacking. You can also run into a "chicken-and-egg" problem if you manage your Terraform role with Terraform itself. This would usually manifest like this:
1. You update your Terraform code, which will make changes to AWS resources.
2. You attempt to apply the changes.
3. The change fails due to permission errors, such as not being allowed to perform actions against the S3 resource.
4. You update your Terraform deployment role/permission policy.
5. You attempt to apply the changes.
6. The change fails due to (new) permission errors.

My solution was essentially allowing very broad permissions for my Terraform role, but minimizing which resources to only the well-defined parts of my backend infrastructure, such as API Gateway, Lambda, and DynamoDB. I also allowed broader permissions on any other resources that Terraform managed, such as IAM (roles and permission policies). This ensures that whatever changes my IaC needs to make -- creating, reading, updating or deleting resources -- can be made without friction. Admittedly, this did feel slightly uncomfortable at first, but you have to draw the line somewhere. It's _okay_ that your Terraform role has broad permissions, assuming they are also the _minimum necessary_ permissions needed for it to do its job.

Including new resources in my infrastructure will be uncommon. When that happens, I can first modify the deployment policy for the Terraform role in AWS, and then import those change into my Terraform state. This ensures that my Terraform state and the actual state of my AWS resources are always in-sync.
</details>

### CI/CD (steps 13 - 15)
I have a few years of experience creating CI/CD pipelines with GitHub Actions workflows, so conceptually, this step was not new to me. What was new to me were the tools I am using in my workflows, which includes Terraform and the AWS CLI.

CI/CD stands for **Continuous Integration/Continuous Deployment**. While CI and CD are technically separate practices, they tie into each other very well, usually referred to as a singular **CI/CD pipeline**:
- Continuous Integration refers to a DevOps practice of regularly and frequently merging code changes into a central repository - like GitHub. CI practices include using automation like GitHub Actions to run tests and detect errors quickly and automatically. You could even say that writing the tests themselves is part of CI. The idea is to use automation to include code changes quickly, but also catch bugs and prevent defects from becoming part of your main application code.
- Continuous Deployment is the practice of automatically building and deploying code to users, regularly. This helps keep deployments repeatable and easy to execute frequently (often multiple times per day).

<details>
<summary>CI/CD Workflow Details</summary>

Whenever I make changes to my Terraform code, I open a pull request in GitHub to merge the changed code to my main branch. This triggers a GitHub Action workflow to validate my Terraform code and plan for the change (those are actually the Terraform commands: `terraform validate` and `terraform plan`). The **plan** that Terraform produces is left as a comment in my pull request for review, specifying what resources would be created, changed, or destroyed. When the pull request is approved and merged, another workflow is triggered to run the `terraform apply` command, applying my Terraform code changes to AWS resources.

Changes to my frontend and backend code follow very similar steps:
- Opening a pull request in GitHub triggers a workflow that executes my test suite. Should all the tests pass, the workflow will complete successfully, while failing tests will create an error in the workflow. This workflow status is reflected in the pull request and helps signal to reviewers if the code is ready to merge (automation can also be configured in GitHub to outright **block** merging the code until the workflow completes successfully).
- When the pull request is approved and merged, the deployment workflow executes. To deploy our code changes to AWS, we can use the AWS CLI to execute commands that upload the new code to whatever service we are using. For my frontend, this was S3. For the backend, Lambda.
</details>

---
## Conclusion
Completing the Cloud Resume Challenge was a great introduction to working in the cloud and AWS. I enjoyed working through the high-level steps that directed you on _what_ to do without giving away exactly _how_. I would highly recommend this challenge to anyone that is interested in learning more about cloud and gaining hands-on experience.

My website isn't perfect by any means, but what's important is that it exists. Completing the CRC helped me get something started while gaining hands-on skills in AWS. I can quickly provision resources with Terraform, and my CI/CD workflows will enable rapid iterative development. I have some ideas for several features I would like to implement across the website and this challenge has taught me most of what I need to design and implement those features.

If you're interested, all the code I wrote to create my website and complete the challenge is available at my GitHub profile in the following repositories:
- Frontend: <a href="https://github.com/s-meenaghan7/homepage" target="_blank">homepage</a>
- Backend: <a href="https://github.com/s-meenaghan7/homepage-api" target="_blank">homepage-api</a>

Thank you for reading!

---
## Final Remarks
If all that reading about my Cloud Resume Challenge experience wasn't enough, I had some things I wanted to expand upon in this post without going off on a tangent mid-article.

<details>
<summary>Go programming language</summary>

I decided to use Go for my backend Lambda code over Python. Lambda supports Python just fine, and I don't have reasons to believe it's a poor choice for the visitor counter feature. There are a few reasons why I _personally preferred_ using Go over Python, though. Regardless, I had been learning about Go and wanted a good project to use it directly, and this challenge was a great fit.

Go is a statically typed and compiled language designed at Google. In my opinion, this is a preferable trait to languages like Python that are dynamically typed and interpreted. Go code is compiled into a single static binary that can be executed by the operating system, with options to compile the binary for Linux, macOS, or Windows. Not only does this mean the executable requires no dependencies to run, it makes deployment very simple.

Go is also used extensively in cloud environments. In addition to the previously mentioned properties of the language, Go has a great standard library to support a variety of features out-of-the-box and powerful concurrency support.

I have had a lot of fun using Go and would hope to find myself working in a team or on a project that uses this language in the future. It's also not uncommon to be using developer tools that were created with Go, especially when working in the cloud. A few common examples include **Docker**, **Kubernetes**, and even **Terraform**.
</details>

<details>
<summary>Authenticating with AWS via OIDC</summary>

When using tools like the AWS CLI or Terraform to work with your cloud resources in AWS (i.e., in a CI/CD pipeline), those tools need to authenticate with AWS, similar to how any user would log in to the AWS console. However, there are several methods available to authenticate with some methods being preferable in certain situations.

The standard authentication methods use long-term access keys which are stored locally. This is typically fine for local development purposes, but for other situations, such as a CI/CD pipeline in GitHub Actions, there are better alternatives.

### OpenID Connect Authentication
GitHub and AWS support an authentication mechanism known as OpenID Connect, or OIDC. OIDC allows engineers to set up a **trust relationship** between your AWS account and GitHub repositories. Rather than using long-lasting credentials, OIDC allows GitHub to authenticate with your AWS account using short-lived tokens.

To use OIDC with GitHub and AWS, there is some initial setup in AWS. You must set up GitHub as an **identity provider** and create an **IAM role and trust policy**. This essentially tells AWS, "allow my specified GitHub repositories to assume this IAM role in my AWS account."

GitHub's documentation outlines exactly how to do this in AWS: <a href="https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws" target="_blank">Configuring OpenID Connect in Amazon Web Services</a>.

When using OIDC in your GitHub Actions workflows, you won't need to store AWS credentials as GitHub secrets. Once OIDC trust is established in AWS, your workflows can request short-lived tokens that expire when the workflow jobs complete.

If you want to learn more about OIDC in GitHub, you can read about it <a href="https://docs.github.com/en/actions/concepts/security/openid-connect" target="_blank">here</a>.
</details>

<details>
<summary>Managing interdependent project goals</summary>

While this post has highlighted my Cloud Resume Challenge experience, I completed the challenge in tandem with another goal of mine: creating my own website. I figured that they would complement each other well, but I didn't properly anticipate how these goals may complicate development. This resulted in an extended timeline to complete both goals.

In any software development project, it's important to plan ahead to figure out what features should be fleshed out first, and what features can come later. This could be due to things like prioritization or dependencies; if Feature B depends on Feature A, you probably want to start on Feature A (one might argue that in this example, Feature B is actually part of Feature A, so it's all the same feature. Perhaps I should call them Stories then, but I digress). I want to describe the problems I encountered developing this website with separate goals in mind, and how I might manage them better in the future.

### Cloud Resume Challenge vs. Developer portfolio
A major feature of the Cloud Resume Challenge is deploying an HTML/CSS resume as a static website on AWS. This is easy enough; even a modest beginner could probably get the resume completed in an hour or two. After learning about AWS, S3, CloudFront, and Route 53, having the resume _deployed_ isn't a huge lift either (admittedly, this depends more on prior experience).

Shifting gears to my website, this requires a lot more work on the frontend. I wanted to create an organized, attractive, and responsive website with several sections and thoughtfully written content. It took me longer to get things in a "deployment-ready" state that I could feel proud of. I didn't want to deploy my website prematurely, or before I felt like it was "finished". Even though my HTML resume was complete, my S3 buckets and CloudFront distribution configured, and my domain name secured in Route 53, I could not deploy until the website was ready.

These are the interdependent project goals that I failed to properly manage. Completing the Cloud Resume Challenge was inadvertently hindered by my goal of completing my personal website.

### What I would have done differently
The CRC frontend is _simple_. I can get this done fast and deploy it as a simple HTML resume website. When I'm ready, I can deploy my finished website. I probably felt that deploying a website that's "just a resume" wasn't enough, but it ultimately slowed me down. Don't chase perfection. First, **make it exist**. Then, **iterate!** This is exactly why <a href="https://en.wikipedia.org/wiki/Iterative_and_incremental_development" target="_blank">iterative and incremental development</a> is so important in software development.
</details>
