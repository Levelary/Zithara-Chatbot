import { Route, Routes, Navigate } from "react-router-dom";
import Chat from "./pages/chat-page/Chat";
import SignUp from "./pages/auth/signup/SignUp";
import Login from "./pages/auth/login/Login";

function App() {
  const isLoggedIn = localStorage.getItem("userDetails");
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />

      {/* Protected Route */}
      <Route
        path="/"
        element={isLoggedIn ? <Chat /> : <Navigate to="/auth/login" />}
      />
    </Routes>
  );
}

export default App;
