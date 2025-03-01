import React from 'react';
    import Chatbot from 'react-chatbot-kit';
    import 'react-chatbot-kit/build/main.css';

    import config from '../chatbot/config';
    import MessageParser from '../chatbot/MessageParser';
    import ActionProvider from '../chatbot/ActionProvider';

    const ChatbotComponent = () => {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      );
    };

    export default ChatbotComponent;
