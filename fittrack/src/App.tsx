import { HashRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { Home } from "./pages/Home";
import { FindYourPath } from "./pages/FindYourPath";
import { ComingSoon } from "./pages/ComingSoon";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="find-your-path" element={<FindYourPath />} />
          <Route path="about" element={<ComingSoon title="About" />} />
          <Route path="approach" element={<ComingSoon title="The MPM Approach" />} />
          <Route path="nutrition" element={<ComingSoon title="Nutrition" />} />
          <Route path="research" element={<ComingSoon title="Research" />} />
          <Route path="contact" element={<ComingSoon title="Contact" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
