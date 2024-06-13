import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
        <Routes>
        <Route path="/react-notion/" element={<Home />} />
        </Routes>
    </>
  );
}
export default App;