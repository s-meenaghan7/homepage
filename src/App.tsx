import Container from "@mui/material/Container"
import ContactSection from "./components/ContactSection"
import IntroSection from "./components/IntroSection"
import NavBar from "./components/NavBar"

export default function App() {
  return (
    <>
      <NavBar />
      <Container>
        <IntroSection />
        <ContactSection />
      </Container>
    </>
  )
}
