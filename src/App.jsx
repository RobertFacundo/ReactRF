
import React, { Suspense, lazy } from "react"
import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedMain from "./AnimatedMain";

import Footer from "./Footer";
import Contacto from "./Contact";
import Certifications from "./Certifications";
import Projects from "./projects";

const NavBar = lazy(() => import('./Nav/NavBar'));
const About = lazy(() => import('./About'));


function App() {

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Suspense fallback={<div className="h-screen bg-black flex items-center justify-center"><div className="loader"></div></div>}>
            <NavBar />
            <AnimatedMain>
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/contact" element={<Contacto />} />
                <Route path="/certifications" element={<Certifications />}/>
                <Route path="/Projects" element={<Projects />}/>
                <Route
                  path="*"
                  element={
                    <div className="h-screen flex items-center justify-center">
                      <div className="container">
                        <h1 className="neonText">404</h1>
                        <h2 className="neonText">Page Not Found</h2>
                      </div>
                    </div>
                  }
                />
              </Routes>
              <Footer />
            </AnimatedMain>
          </Suspense>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App
