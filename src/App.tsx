import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router"
import { CaseStudy } from "./features/case-studies"
import { Footer } from "./features/footer"
import { NavBarContainer } from "./features/navigation"
import { Home } from "./Home"

export default function App() {
  return (
    <>
      <Router>
        <NavBarContainer />
        <Routes>
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/projects/:slug"
            element={<CaseStudy />}
          />
          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
