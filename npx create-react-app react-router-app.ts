npx create-react-app react-router-app
cd react-router-app
npm install react-router-dom
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
    </div>
  );
};

export default HomePage;
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About Page</p>
    </div>
  );
};

export default AboutPage;
import React from 'react';
import { useParams } from 'react-router-dom';

const DynamicPage = () => {
  const { id } = useParams(); // Get dynamic parameter from URL

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>This is a dynamic page with ID: {id}</p>
    </div>
  );
};

export default DynamicPage;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DynamicPage from './pages/DynamicPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dynamic/123">Dynamic Page</Link> {/* Example dynamic link */}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dynamic/:id" element={<DynamicPage />} /> {/* Dynamic route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
npm start
This is a dynamic page with ID: 123
