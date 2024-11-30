const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
const { default: axios } = require('axios');

dotenv.config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

console.log("Bot started successfully and is ready to interact.");

// When the bot receives a message
bot.on('message', (msg) => {
    console.log("Message received on the bot", msg);

    // Send a welcome message if this is the user's first interaction
    if (msg.text === '/start') {
        bot.sendMessage(
            msg.chat.id,
            `Welcome ${msg.from.first_name || "User"}! 🤖\nI'm here to assist you. You can ask me for jokes by typing /joke or learn more about my features by typing /help.`
        );
    } else {
        bot.sendMessage(
            msg.chat.id,
            "Hello, I am a bot. I am here to help you with your queries. Please type /help to know more about me."
        );
    }
});

// Joke command
bot.onText(/\/joke/, async (msg) => {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random');
        const joke = response.data[0]; // API returns an array of jokes
        const setup = joke.setup;
        const punchline = joke.punchline;

        bot.sendMessage(msg.chat.id, `${setup}\n${punchline}`);
    } catch (error) {
        console.error("Error fetching joke:", error);
        bot.sendMessage(msg.chat.id, "Sorry, I couldn't fetch a joke at the moment. Please try again later.");
    }
});
