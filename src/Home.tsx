import Container from "@mui/material/Container"
import { About } from "./features/about"
import { Contact } from "./features/contact"
import { Experience } from "./features/experience"
import { Intro } from "./features/intro"
import { Projects } from "./features/projects"
import { VisitorCounter } from "./features/visitor-counter"

export function Home() {
  return (
    <Container>
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <VisitorCounter />
    </Container>
  )
}
