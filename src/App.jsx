import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Personal from "./pages/Personal";
import Chess from "./pages/Chess";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/personal" element={<Personal />}></Route>
        <Route path="/experience" element={<Chess />}></Route>
      </Routes>
    </div>
  );
};

export default App;
