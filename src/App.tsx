import { Container } from "@mui/material"
import NavBar from "./components/navbar";
import IntroSection from "./components/intro-section";
import ContactSection from "./components/contact-section";

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
