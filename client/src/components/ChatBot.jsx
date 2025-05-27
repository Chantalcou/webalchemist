import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true); // Estado inicial minimizado
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const savedState = localStorage.getItem('chatbotState');
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      setIsMinimized(true);
      localStorage.removeItem('chatbotState');
    } else {
      setIsMinimized(savedState ? savedState === 'minimized' : true);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    const newState = !isMinimized;
    setIsMinimized(newState);
    
    if (window.innerWidth > 768) {
      localStorage.setItem('chatbotState', newState ? 'minimized' : 'open');
    } else {
      localStorage.removeItem('chatbotState');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile && !isMinimized) {
        setIsMinimized(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMinimized]);

  const handleSend = async () => {
    if (!inputMessage.trim()) return;
  
    const userMessage = { text: inputMessage, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
  
    try {
      const response = await axios.post(
        // "http://localhost:3000", 
        'https://www.alchemist-web.com/chatbot',
        { message: inputMessage },
        { headers: { 'Content-Type': 'application/json' } }
      );
      
      setMessages(prev => [...prev, { text: response.data.reply, isBot: true }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [...prev, {
        text: "Error de conexión con el servidor.",
        isBot: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (isMinimized) {
    return (
      <motion.button
        className="floating-button"
        onClick={toggleChat}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/>
        </svg>
      </motion.button>
    );
  }

  return (
    <motion.div 
      className="chatbot-container"
      initial={{ opacity: 0, y: 20, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className="chatbot-header">
        <div className="header-content">
          <h3>AstroAssistant</h3>
          <div className="status-container">
            <span className="status-indicator"></span>
            <small>En línea</small>
          </div>
        </div>
        <button 
          className="close-btn"
          onClick={toggleChat}
          aria-label="Minimizar chat"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>

      <div className="chatbot-messages">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`message ${message.isBot ? 'bot' : 'user'}`}
              initial={{ opacity: 0, x: message.isBot ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="message-content">
                {message.text.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isLoading && (
          <motion.div 
            className="message bot loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="typing-indicator">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-input">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Escribe tu mensaje..."
        />
        <button onClick={handleSend} className="send-btn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default ChatBot;