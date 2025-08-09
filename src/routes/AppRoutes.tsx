import { Routes, Route } from "react-router-dom";
import Home from '../pages/home_TEMP';
import Biography from "../pages/biography";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/biography" element={<Biography />} />
      </Routes>
  );
};

export default AppRoutes;
