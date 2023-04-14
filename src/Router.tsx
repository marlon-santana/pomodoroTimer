import { Route, Routes } from "react-router-dom";
import { History } from "./Pages/History";
import { Home } from "./Pages/Home";
import { TemplateHeader } from "./templates/TemplateHeader";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<TemplateHeader />}>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
      </Route>
    </Routes>
  );
}
