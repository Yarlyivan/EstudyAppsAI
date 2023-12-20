document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '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'; // Reemplaza con tu clave de API
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const userAvatar = document.querySelector('.user-avatar');
    const userName = document.querySelector('.user-name');
    const userStatus = document.querySelector('.user-status');

    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = userInput.value.trim(); // Elimina espacios en blanco al principio y al final
        if (userMessage === '') {
            return; // Evita enviar mensajes en blanco
        }
        appendUserMessage(userMessage);
        userInput.value = '';
        getUserResponse(userMessage);
    }

    function appendUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'user-message';
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function appendBotMessage(message) {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            chatMessages.removeChild(typingIndicator); // Elimina "Escribiendo respuesta..."
        }
        const messageDiv = document.createElement('div');
        messageDiv.className = 'bot-message';
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function getUserResponse(userMessage) {
        appendBotMessage('Escribiendo respuesta...');

        // Hacer una solicitud a la API de OpenAI para obtener la respuesta
        try {
            const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer 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`,
                },
                body: JSON.stringify({
                    prompt: "Entretenme con tus mensajes",
                    max_tokens: 50, // Ajusta según sea necesario
                }),
            });

            const data = await response.json();
            const botResponse = data.choices[0].text;
            appendBotMessage(botResponse);
        } catch (error) {
            console.error('Error al obtener la respuesta del bot:', error);
            appendBotMessage('Hubo un error al obtener la respuesta del bot.');
        }
    }
});
