import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import GlobalLayout from './components/layouts/GlobalLayout';
import AboutPage from './pages/about/AboutPage';
import AnnouncementPage from './pages/announcement/AnnouncementPage';
import CareerPage from './pages/career/CareerPage';
import JobApplyPage from './pages/career/JobApplyPage';
import ContactPage from './pages/contact/ContactPage';
import HomePage from './pages/home/HomePage';
import LoginRegisterPage from './pages/login/LoginRegister';
import ProductDetailPage from './pages/products/ProductDetailPage';
import ProductListPage from './pages/products/ProductListPage';


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
          <Route path="career">
            <Route index element={<CareerPage />} />
            <Route path="apply" element={<JobApplyPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
