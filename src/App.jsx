import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Background from './components/Background/Background.jsx';
import EmployerTimeline from './components/EmployerTimeline/EmployerTimeline.jsx';
import { employers } from './data/employers.js';
import Services from './components/Services/Services.jsx';
import Resume from './components/Resume/Resume.jsx';
import CTA from './components/CTA/CTA.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />

      <main id="main">
        <Hero />
        <Background />     
        <EmployerTimeline employers={employers} /> 
        <Services />
        <Resume />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default App;
