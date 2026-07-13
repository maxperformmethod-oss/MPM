import { lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { I18nProvider } from "./i18n/I18nContext";
import { AppLayout } from "./components/AppLayout";

const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));
const Approach = lazy(() => import("./pages/Approach").then((m) => ({ default: m.Approach })));
const FindYourPath = lazy(() =>
  import("./pages/FindYourPath").then((m) => ({ default: m.FindYourPath })),
);
const Assessment = lazy(() =>
  import("./pages/Assessment").then((m) => ({ default: m.Assessment })),
);
const Results = lazy(() => import("./pages/Results").then((m) => ({ default: m.Results })));
const Research = lazy(() => import("./pages/Research").then((m) => ({ default: m.Research })));
const Nutrition = lazy(() => import("./pages/Nutrition").then((m) => ({ default: m.Nutrition })));
const NutritionQuestionnaire = lazy(() =>
  import("./pages/NutritionQuestionnaire").then((m) => ({ default: m.NutritionQuestionnaire })),
);
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));
const Terms = lazy(() => import("./pages/Terms").then((m) => ({ default: m.Terms })));
const Privacy = lazy(() => import("./pages/Privacy").then((m) => ({ default: m.Privacy })));

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
              <Route path="nutrition-questionnaire" element={<NutritionQuestionnaire />} />
              <Route path="contact" element={<Contact />} />
              <Route path="terms" element={<Terms />} />
              <Route path="privacy" element={<Privacy />} />
            </Route>
          </Routes>
        </HashRouter>
      </MotionConfig>
    </I18nProvider>
  );
}

export default App;
