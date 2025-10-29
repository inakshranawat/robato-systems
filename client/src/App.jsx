// App.jsx
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoBtn from './components/DemoBtn';

import { appRoutes } from './routes';

const App = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div>
      <Navbar />

      <main>
        <Routes>
          {appRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </main>

      <Footer />
      <DemoBtn />
    </div>
  );
};

export default App;
