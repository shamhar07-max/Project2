import { Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import About from "./pages/company/About"
import Careers from "./pages/company/Careers"
import Leadership from "./pages/company/Leadership"
import Mission from "./pages/company/Mission"
import OurApproach from "./pages/company/OurApproach"
import Contact from "./pages/Contact"
import Ecosystem from "./pages/Ecosystem"
import EcosystemDivision from "./pages/EcosystemDivision"
import GetStarted from "./pages/GetStarted"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Portfolio from "./pages/Portfolio"
import Privacy from "./pages/Privacy"
import Technology from "./pages/Technology"
import Terms from "./pages/Terms"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company/about" element={<About />} />
          <Route path="/company/mission" element={<Mission />} />
          <Route path="/company/our-approach" element={<OurApproach />} />
          <Route path="/company/leadership" element={<Leadership />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/ecosystem/:slug" element={<EcosystemDivision />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
