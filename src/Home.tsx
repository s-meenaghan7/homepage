import Container from "@mui/material/Container"
import { useEffect } from "react"
import { useLocation } from "react-router"
// import { About } from "./features/about"
import { Contact } from "./features/contact"
import { Experience } from "./features/experience"
import { Intro } from "./features/intro"
import { Projects } from "./features/projects"
// import { VisitorCounter } from "./features/visitor-counter"

export function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      // ensure scrolling happens only after the DOM is ready
      requestAnimationFrame(() => {
        const id = location.hash.startsWith("#")
          ? location.hash.slice(1)
          : location.hash
        const target = document.getElementById(id)
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      })
    }
  }, [location.pathname, location.hash])

  return (
    <Container>
      <Intro />
      {/* <About /> */}
      <Experience />
      <Projects />
      <Contact />
      {/* <VisitorCounter /> */}
    </Container>
  )
}
