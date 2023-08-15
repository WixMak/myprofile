import React from "react";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Main from "./page/main";
import Experience from "./page/Experience";
import Services from "./page/Services";
import Contact from "./page/Contact";


function App() {
    document.body.style.background = '#282c34'
  return (
    <React.Fragment>
      <Router>
          <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/exp" element={<Experience />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Main />} />
            </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
