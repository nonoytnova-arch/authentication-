import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import Home from "./components/user account";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import GoogleAuth from "./components/GoogleAuth";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      

      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/google-auth" element={<GoogleAuth />} />
      </Routes>
      <Home />
      <Footer />
    </>
  );
}

export default App;

