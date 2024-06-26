import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
// Pages
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageContact from '../pages/PageContact';
import PageNotFound from '../pages/PageNotFound';
import PageProjects from '../pages/PageProjects';
import PageSingleProject from '../pages/PageSingleProject';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
          <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/contact" element={<PageContact />} />
            <Route path="/projects" element={<PageProjects />} />
            <Route path="/:slug" element={<PageSingleProject />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;