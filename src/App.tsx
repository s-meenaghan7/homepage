import Container from "@mui/material/Container"
import ContactSection from "./components/ContactSection"
import IntroSection from "./components/IntroSection"
import NavBarContainer from "./components/NavBarContainer"

export default function App() {
  return (
    <>
      <NavBarContainer />
      <Container>
        <IntroSection />
        <ContactSection />
      </Container>
    </>
  )
}
