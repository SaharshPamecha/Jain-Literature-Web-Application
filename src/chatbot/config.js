import { createChatBotMessage } from 'react-chatbot-kit';

    const config = {
      initialMessages: [createChatBotMessage(`Welcome to the Jain Literature Chatbot! How can I assist you today?`)],
      botName: 'JainBot',
      customStyles: {
        botMessageBox: {
          backgroundColor: '#376B7E',
        },
        chatButton: {
          backgroundColor: '#5ccc9d',
        },
      },
    };

    export default config;
