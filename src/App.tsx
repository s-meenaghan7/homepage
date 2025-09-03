import Container from "@mui/material/Container"
import { ContactSection } from "./features/contact"
import { Footer } from "./features/footer"
import { IntroSection } from "./features/intro"
import { NavBarContainer } from "./features/navigation"

export default function App() {
  return (
    <>
      <NavBarContainer />
      <Container>
        <IntroSection />
        <ContactSection />
      </Container>
      <Footer />
    </>
  )
}
