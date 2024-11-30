```markdown
# Joke-Bot

A Telegram bot that fetches and sends random programming jokes to users. Built using Node.js, the bot fetches jokes from the [Official Joke API](https://official-joke-api.appspot.com/jokes/programming/random).

## Features
- **Programming Jokes**: Send `/joke` to receive a random programming joke.
- **Welcome Message**: Sends a welcome message when a user interacts with the bot for the first time using the `/start` command.
- **Help Command**: Users can type `/help` to get a list of commands.

## Prerequisites
- Node.js (v12 or higher)
- npm (v6 or higher)
- A Telegram Bot Token (to interact with the Telegram Bot API)

## Setup and Installation

1. **Clone the repository**

   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/Hydra-Ramesh/Joke-Bot.git
   cd Joke-Bot
   ```

2. **Install dependencies**

   Navigate to the project folder and install the required dependencies:

   ```bash
   npm install
   ```

3. **Set up your `.env` file**

   Create a `.env` file in the root of the project and add your Telegram Bot Token:

   ```bash
   BOT_TOKEN=your_telegram_bot_token
   ```

   You can obtain your Bot Token by creating a bot on Telegram via [BotFather](https://core.telegram.org/bots#botfather).

4. **Start the bot**

   Run the bot with the following command:

   ```bash
   node index.js
   ```

   The bot should now be running and listening for messages.

## Commands

- `/start`: Sends a personalized welcome message when a user starts interacting with the bot.
- `/help`: Provides information about the available commands.
- `/joke`: Fetches a random programming joke from the Official Joke API and sends it to the user.

## Example Usage

- Send `/start` to the bot to receive a welcome message.
- Send `/joke` to get a programming joke.
- Send `/help` to get the list of commands.

## Contributing

If you would like to contribute to the project, feel free to fork the repository and submit a pull request. Please ensure that your contributions follow the existing code style and that you test your changes thoroughly.

### Steps to Contribute:

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes
4. Submit a pull request describing your changes

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Official Joke API](https://official-joke-api.appspot.com/jokes/programming/random) for providing the jokes.
- [Telegram Bot API](https://core.telegram.org/bots/api) for enabling easy bot development.

---

Enjoy using the bot and feel free to suggest improvements or report bugs!
```

### Key Sections in the README:
1. **Project Description**: Brief explanation of what the bot does.
2. **Features**: A list of key functionalities the bot supports.
3. **Prerequisites**: Information on what is needed to run the bot (Node.js, npm, Bot Token).
4. **Setup and Installation**: Detailed instructions on how to get the bot running on your local machine.
5. **Commands**: List of available commands and what they do.
6. **Example Usage**: How to interact with the bot.
7. **Contributing**: Guidelines for contributing to the project.
8. **License**: The project's license (MIT by default).

This should provide users and contributors with everything they need to get started with your project!