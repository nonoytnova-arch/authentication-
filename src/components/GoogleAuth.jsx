import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function GoogleAuth() {
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in with Google ✅");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Continue</h2>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
          />
          Continue with Google
        </button>

        <p className="switch">
          <Link to="/signin">Back to Sign In</Link>
        </p>
      </div>
    </div>
  );
}
