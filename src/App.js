import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Header from './common/Header';
import './index.css'; // or './App.css' if you added it there
import Home from './common/Home';
import About from './common/About';
import ImageGrid from './common/Imagegrid';
import CafeServices from './common/Services';
import MainMenu from './common/menu';
import CafeReview from './common/cafereview';
import ChefRecommendation from './common/ChefRecommendation';
import BlogSection from './common/BlogSection';
import ContactSection from './common/ContactSection';
import Form from './common/Form';
import Footer from './common/Footer';
import { useEffect } from 'react';

// import 'bulma/css/bulma.css';


function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  return (
    <div className='scroll-smooth'>

    <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About/>} />
        <Route path='gallery' element={<ImageGrid/>} />
        <Route path='services' element={<CafeServices/>} />
        <Route path='Menu' element={<MainMenu/>} />
        <Route path='Review' element={<CafeReview/>} />
        <Route path='chefrecommendation' element={<ChefRecommendation/>} /> 
        <Route path='blogsection' element={<BlogSection/>} />
        <Route path='contactsection' element={<ContactSection/>} />
        <Route path='form' element={<Form/>} />
        <Route path='footer' element={<Footer/>} />
      </Routes>
    </BrowserRouter >
    </div>
  );
}

export default App;
