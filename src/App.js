import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalLayout from './components/layouts/GlobalLayout';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import LoginRegisterPage from './pages/login/LoginRegister';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LoginRegisterPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
