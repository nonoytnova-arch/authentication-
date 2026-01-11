import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfulllly ☑️");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSignup}>
        <h2>Create Account</h2>

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

        <button type="submit">Sign Up</button>

        <p className="switch">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>

        <Link className="google-link" to="/google-auth">
          Continue with Google
        </Link>
      </form>
    </div>
  );
}
