import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import GoogleAuth from "./components/GoogleAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/google-auth" element={<GoogleAuth />} />
    </Routes>
  );
}

export default App;
