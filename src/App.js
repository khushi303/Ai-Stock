import './App.css';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ProfileSlider from './components/ProfileSlider';
import CommonBtn from './components/common/CommonBtn';

function App() {
  return (
    <div className=''>
      <Hero />
      <ProfileSlider />
      <HowItWorks />
    </div>
  );
}

export default App;
