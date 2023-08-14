import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login/Login";
import { RegisterPage } from "../pages/Register/RegisterPage";
import { HomePage } from "../pages/Home/HomePage";
import { ProtectedRoutes } from "../Components/ProtectedRouts/RoutsProtected";
import { PublicRouts } from "../Components/PublicRouts/RoutsPublic";
import { TechProvider } from "../providers/TechContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/"element={<PublicRouts/>}>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="/home" element={<ProtectedRoutes/>}>
        <Route  index element={<TechProvider>
          <HomePage/>
          </TechProvider>}/>
      </Route>
    </Routes>
  );
};
