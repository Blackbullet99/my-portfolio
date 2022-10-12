import { Routes, Route } from "react-router-dom";

import WorksPreview from "../../components/works-preview/works-preview.component";

import Stylcon from "../../components/projects/stylcon.component";
import Netflix from "../../components/projects/netflix.component";

const Works = () => {
  return (
    <Routes>
      <Route index element={<WorksPreview />} />
      <Route path=":stylcon-clothing" element={<Stylcon />} />
      <Route path=":netflix" element={<Netflix />} />
    </Routes>
  );
};

export default Works;
