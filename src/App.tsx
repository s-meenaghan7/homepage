import Container from "@mui/material/Container"
import ContactSection from "./components/contact-section"
import IntroSection from "./components/intro-section"
import NavBar from "./components/navbar"

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
