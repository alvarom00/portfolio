import { HashRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
}


export default App
