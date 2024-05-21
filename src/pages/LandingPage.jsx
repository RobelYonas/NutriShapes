import '../style/LandingPage.css'
import Aboutus from '../components/AboutUs/Aboutus';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Programs from '../components/Programs/Programs';
import Reasons from '../components/Reasons/Reasons';
function LandingPage() {
  return (
    <div className="main">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Aboutus/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
