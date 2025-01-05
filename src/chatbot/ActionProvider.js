class ActionProvider {
      constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
      }

      greet() {
        const greetingMessage = this.createChatBotMessage('Namaste! How can I assist you with Jain literature today?');
        this.updateChatbotState(greetingMessage);
      }

      handleDefault() {
        const message = this.createChatBotMessage("I'm here to help with questions about Jain literature. What would you like to know?", {
          widget: 'options',
        });
        this.updateChatbotState(message);
      }

      updateChatbotState(message) {
        this.setState((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, message],
        }));
      }
    }

    export default ActionProvider;
