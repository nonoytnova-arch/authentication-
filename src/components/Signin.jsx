import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful ✅");
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSignin}>
        <h2>Welcome Back</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Sign In</button>

        <p className="switch">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>

        <Link className="google-link" to="/google-auth">
          Continue with Google
        </Link>
      </form>
    </div>
  );
}
