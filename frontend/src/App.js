import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {Header} from './components/layouts/Header.js';
import {Nav} from './components/layouts/Nav.js';
import {Footer} from './components/layouts/Footer.js';

import ContactUsPage from './pages/ContactUsPage';
import WelcomePage from './pages/WelcomePage';
import NewsPage from './pages/NewsPage';
import ScmMembersPage from './pages/ScmMembersPage';
import GalleryPage from './pages/GalleryPage';


import "./styles/components/pages/ContactUsPage.css";
import "./styles/components/pages/GalleryPage.css";
import "./styles/components/pages/NewsPage.css";
import "./styles/components/pages/WelcomePage.css";
import "./styles/components/pages/ScmMembersPage.css";

function App() {
  return (  
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/> 
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/ScmMembersPage" element={<ScmMembersPage />} />
          <Route path="/NewsPage" element={<NewsPage />} />
          <Route path="/ContactUsPage" element={<ContactUsPage />} />
          <Route path="/GalleryPage" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
