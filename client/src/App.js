import React, { useState, useEffect } from 'react';
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsApp from "./components/WhatsApp";
// import ChatBot from './components/ChatBot';
import Spinner from './components/Spinner'; // Importa el spinner

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un retraso de 2 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <LandingPage />
          <Footer />
          <WhatsApp />
        </>
      )}
    </div>
  );
}

export default App;