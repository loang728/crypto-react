import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';

import StaticImageSet from './StaticImageSet';
import { useMediaQuery } from 'react-responsive';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <article>

              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
              </Routes>

        </article>
      </div>
    </>
  );
}

export default App;