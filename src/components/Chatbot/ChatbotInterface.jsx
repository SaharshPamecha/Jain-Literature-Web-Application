import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMinimize2, FiMaximize2 } from 'react-icons/fi';

const ChatbotInterface = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I can help you explore Jain literature. What would you like to know?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: input }]);
    
    // Simulate bot thinking
    setMessages(prev => [...prev, { type: 'bot', content: '...', isLoading: true }]);

    // Simulate API response
    setTimeout(() => {
      setMessages(prev => [
        ...prev.filter(msg => !msg.isLoading),
        {
          type: 'bot',
          content: `Here's what I found about "${input}" in our Jain literature collection...`,
          citations: [
            {
              text: 'Tattvartha Sutra, Chapter 1, Verse 2',
              link: '/read/1#verse2'
            }
          ]
        }
      ]);
    }, 1500);

    setInput('');
  };

  return (
    <div
      className={`fixed ${
        isMinimized ? 'bottom-0 right-0 w-auto' : 'bottom-4 right-4 w-96'
      } bg-white dark:bg-gray-800 rounded-lg shadow-xl transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
        <h3 className="font-medium">{t('chatbot.title')}</h3>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          {isMinimized ? <FiMaximize2 /> : <FiMinimize2 />}
        </button>
      </div>

      {/* Messages */}
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="h-96 overflow-y-auto p-4"
          >
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 ${
                  message.type === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}
                >
                  {message.content}
                  {message.citations && (
                    <div className="mt-2 text-sm">
                      {message.citations.map((citation, i) => (
                        <a
                          key={i}
                          href={citation.link}
                          className="block text-blue-500 hover:underline"
                        >
                          {citation.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input */}
      {!isMinimized && (
        <div className="p-4 border-t dark:border-gray-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t('chatbot.placeholder')}
              className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-primary-600 text-white rounded hover:bg-primary-700"
            >
              <FiSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotInterface;
