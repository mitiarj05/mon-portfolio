import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './contexts/ThemeContext';
// SUPPRIMEZ ProjectsProvider d'ici - il est déjà dans ProjectsPage
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import BackgroundAnimation from './components/BackgroundAnimation';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import './styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider>
      {/* ProjectsProvider a été retiré d'ici */}
      <BrowserRouter>
        <BackgroundAnimation />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projets" element={<ProjectsPage />} />
          <Route path="/projet/:id" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
        <ToastContainer 
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;