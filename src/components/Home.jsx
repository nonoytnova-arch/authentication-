import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h2>Welcome to Amazon Clone</h2>

      <button className="amazon-btn" onClick={() => navigate("/signin")}>
        Sign in with Amazon
      </button>
    </div>
  );
}

export default Home;
