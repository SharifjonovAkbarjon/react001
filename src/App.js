import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero'
import Servise from './components/servise/service'
import About from './components/about/About'
import Testimotional from './components/testimotional/testi';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Servise/>
        <About/>
        <Testimotional/>
        <Blog/>
        <Footer/>
    </div>

    
  );
}

export default App;
