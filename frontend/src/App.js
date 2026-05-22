import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModernHomePage } from "./pages/ModernHomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ModernHomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
