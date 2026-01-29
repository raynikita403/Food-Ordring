import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Customer/Pages/home";
import About from "./Customer/Pages/about";
import CustomerLogin from "./auth/CustomerLogin";
import CustomerRegistration from "./auth/CustomerRegistration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
        <Route path="/login" element={<CustomerLogin />} />
         <Route path="/register" element={<CustomerRegistration />} />
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
