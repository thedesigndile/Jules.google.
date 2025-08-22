"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom when new messages are added
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    // Add initial welcome message
    if (isOpen && messages.length === 0) {
        setMessages([{ sender: 'bot', text: "Hello! I'm a helpful bot. Ask me about our services, process, or portfolio." }]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '' || isLoading) return;

    const userMessage: Message = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botMessage: Message = { sender: 'bot', text: data.reply };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = { sender: 'bot', text: "Sorry, I'm having a little trouble right now. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-accent-light dark:bg-accent-dark rounded-full shadow-lg flex items-center justify-center"
          aria-label="Toggle chatbot"
        >
          {/* Simple chat icon */}
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 w-80 h-[28rem] bg-white dark:bg-dark-bg rounded-lg shadow-xl flex flex-col origin-bottom-right z-50 border border-gray-200 dark:border-gray-700"
          >
            <div className="p-4 border-b dark:border-gray-700">
              <h3 className="font-serif text-lg font-bold">Design Dile Bot</h3>
            </div>
            <div ref={chatContainerRef} className="flex-1 p-4 space-y-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`px-3 py-2 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-accent-light text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                    <div className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center space-x-1">
                        <motion.div className="w-2 h-2 bg-gray-500 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }} />
                        <motion.div className="w-2 h-2 bg-gray-500 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} />
                        <motion.div className="w-2 h-2 bg-gray-500 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} />
                    </div>
                </div>
              )}
            </div>
            <div className="p-4 border-t dark:border-gray-700 flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask a question..."
                className="flex-1 px-3 py-2 border rounded-l-md dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-accent-light"
              />
              <button onClick={handleSendMessage} className="px-4 py-2 bg-accent-light dark:bg-accent-dark text-white font-bold rounded-r-md">Send</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
