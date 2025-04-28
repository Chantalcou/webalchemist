import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsApp from "./components/WhatsApp";
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <ChatBot/>
      <Footer />
      <WhatsApp/>
    </div>
  );
}

export default App;
