import { useRef } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import image from './assets/image.png';
import MenuPage from './components/MenuPage';
import ContactPage from './components/ContactPage';
import BookingForm from './components/BookingForm';
import MatchesGrid from './components/MatchesGrid';
const App = () => {
  const homeRef = useRef(null);
  const menuRef = useRef(null);
  const contactRef = useRef(null);
  const bookRef = useRef(null);
  const matchesRef = useRef(null);

  const handleMenuClick = (section) => {
    const refs = { home: homeRef, menu: menuRef, contact: contactRef, book: bookRef, matches: matchesRef };
    refs[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Navbar onMenuClick={handleMenuClick} />
      <main>
      <Section ref={homeRef} id="home">
          <div className="flex flex-col items-center justify-center h-screen w-full"
               style={{ 
                backgroundImage: `url(${image})`,
                 backgroundSize: '100% 100%',  // Ensures the bg image covers the screen
                 backgroundRepeat: 'no-repeat'  // Prevents repeating the image
               }}>
            <div className="bg-black bg-opacity-60 p-5 rounded-lg text-center">
              <h1 className="text-4xl md:text-6xl font-bold">Welcome to The Best Bar in Town!</h1>
              <p className="text-xl md:text-2xl mt-2">Join us for an evening of exotic drinks, live music, and unforgettable memories.</p>
              <button 
                onClick={() => handleMenuClick('menu')}
                className="mt-4 bg-white hover:bg-black hover:border-white hover:border-4 text-black hover:text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out transform hover:scale-125"
                style={{ transition: 'all 0.3s', transform: 'scale(1)', transformOrigin: 'center center' }}
              >
                View Our Menu
              </button>
            </div>
          </div>
        </Section>
        
       <div ref={menuRef} id="menu"> <MenuPage ref={menuRef} id="menu" /></div>
       <div ref = {contactRef} id = 'con'><ContactPage ref={contactRef} id="contact" /></div>
       <div ref={bookRef} id="book">
          <BookingForm />
        </div>
        <Section ref={matchesRef} id="matches"><MatchesGrid /></Section>
      </main>
    </div>
  );
};

export default App;
