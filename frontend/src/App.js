import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Events from './Components/Events/Events';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import ImageSlider from './Components/Gallery/ImageSlider';
import { SliderData } from './Components/Gallery/sliderData';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/team" element={<About />} />
          <Route exact path="/gallery" element={<ImageSlider slides={SliderData} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
