import { useState } from "react";
import "./styles/App.css";
import Navbar from "./Navbar";
import Theater from "./Theater";
import { Routes, Route } from "react-router-dom";
import About from "./About/page";
import Reviews from "./Reviews/page";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [navbarDisplay, setNavbarDisplay] = useState(true);
  const navToggle = (navDis) => {
    setNavbarDisplay(!navDis);
    return navbarDisplay;
  };

  return (
    //      Inserting elements here in App.jsx after the Theater element might mess up. Refer Theater.
    <div>
      {navbarDisplay ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Theater navbarDisplay={navToggle} />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}
// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/bookmarks" element={<Bookmark />} />
//   <Route path="*" element={<Notfound />}></Route>
// </Routes>;

export default App;
