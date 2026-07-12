import { HashRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { I18nProvider } from "./i18n/I18nContext";
import { AppLayout } from "./components/AppLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Approach } from "./pages/Approach";
import { FindYourPath } from "./pages/FindYourPath";
import { Assessment } from "./pages/Assessment";
import { Results } from "./pages/Results";
import { Research } from "./pages/Research";
import { Nutrition } from "./pages/Nutrition";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <I18nProvider>
      <MotionConfig reducedMotion="user">
        <HashRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="approach" element={<Approach />} />
              <Route path="find-your-path" element={<FindYourPath />} />
              <Route path="assessment" element={<Assessment />} />
              <Route path="results" element={<Results />} />
              <Route path="research" element={<Research />} />
              <Route path="nutrition" element={<Nutrition />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </HashRouter>
      </MotionConfig>
    </I18nProvider>
  );
}

export default App;
