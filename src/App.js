import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalLayout from './components/layouts/GlobalLayout';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import LoginRegisterPage from './pages/login/LoginRegister';
import AnnouncementPage from './pages/announcement/AnnouncementPage';
import ContactPage from './pages/contact/ContactPage';
import CareerPage from './pages/career/CareerPage';
import ProductListPage from './pages/products/ProductListPage';
import ProductDetailPage from './pages/products/ProductDetailPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products/*" element={<ProductListPage />}>
            <Route path=":_id" element={<ProductDetailPage />} />
          </Route>
          <Route path="login" element={<LoginRegisterPage />} />
          <Route path="announcement" element={<AnnouncementPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="career" element={<CareerPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
