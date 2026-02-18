import HeroImage from '../components/HeroImage';
import CallToAction from '../components/CallToAction';
import WelcomeMessage from '../components/WelcomeMessage';

const HomePage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden relative"
      style={{
        background:
          'radial-gradient(100% 100% at 50% 100%, #FF9875 0%, #B452FF 15%, #673DE6 30%, #1a1b1e 80%)',
      }}
    >
      <div className="flex flex-col items-center gap-4 w-full max-w-[448px] text-center">
        <HeroImage />

        <div className="flex flex-col gap-1 w-full">
          <CallToAction />
          <WelcomeMessage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
