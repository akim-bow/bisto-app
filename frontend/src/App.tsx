import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}
