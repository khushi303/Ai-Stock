import './App.css';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import MaskPractice from './components/Icandy';
import ProfileSlider from './components/ProfileSlider';
import CommonBtn from './components/common/CommonBtn';

function App() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <ProfileSlider />
      <HowItWorks />
      <MaskPractice />
    </div>
  );
}

export default App;
