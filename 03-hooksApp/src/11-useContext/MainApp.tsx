import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { NavBar } from "./Navbar/NavBar";
import { UserProvider } from "./context/UserProvider";
export const MainApp = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <div>
          <h1 className="text-3xl font-bold mb-4">MainApp</h1>
          <NavBar />
          <div className="flex flex-col items-center justify-center h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
};
