import Container from "@mui/material/Container"
import { About } from "./features/about"
import { Contact } from "./features/contact"
import { Experience } from "./features/experience"
import { Footer } from "./features/footer"
import { Intro } from "./features/intro"
import { NavBarContainer } from "./features/navigation"
import { Projects } from "./features/projects"

export default function App() {
  return (
    <>
      <NavBarContainer />
      <Container>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </>
  )
}
