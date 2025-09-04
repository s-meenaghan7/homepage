import Container from "@mui/material/Container"
import { About } from "./features/about"
import { Contact } from "./features/contact"
import { Footer } from "./features/footer"
import { Intro } from "./features/intro"
import { NavBarContainer } from "./features/navigation"

export default function App() {
  return (
    <>
      <NavBarContainer />
      <Container>
        <Intro />
        <About />
        <Contact />
      </Container>
      <Footer />
    </>
  )
}
