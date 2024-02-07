import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { Footer } from "./components/Footer/Footer";
import { About } from "./pages/About/About";

function App() {
  return (
    <>
      <div className="wrapper">
          <Sidebar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
          <Header />
          <Footer/>
      </div>
    </>
  );
}

export default App;
