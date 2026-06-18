const { Bot } = require("grammy");
require('dotenv').config();

// Your bot token - get from @BotFather on Telegram
const BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"; // Replace with your actual token

// Create a bot instance
const bot = new Bot(BOT_TOKEN);

// Handle /start command
bot.command("start", (ctx) => {
  ctx.reply("Welcome to my bot! 🎉\n\nSend /help to see what I can do.");
});

// Handle /help command
bot.command("help", (ctx) => {
  ctx.reply(`🤖 Available commands:
  
/start - Welcome message
/help - Show this help menu
/echo <text> - Echo your message back
/menu - Show interactive menu
/about - About this bot
/photo - Get a random photo`);
});

// Echo command
bot.command("echo", (ctx) => {
  const text = ctx.match;
  if (text) {
    ctx.reply(`📢 You said: ${text}`);
  } else {
    ctx.reply("Please provide text. Example: /echo Hello World!");
  }
});

// About command
bot.command("about", (ctx) => {
  ctx.reply("🤖 This bot was created with grammY\n📚 Built with JavaScript\n🌟 Learn more at: https://grammy.dev/");
});

// Interactive menu with inline keyboard
bot.command("menu", (ctx) => {
  ctx.reply("📋 Choose an option:", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "📝 About", callback_data: "about" },
          { text: "📞 Contact", callback_data: "contact" }
        ],
        [
          { text: "🌐 Visit Website", url: "https://example.com" },
          { text: "📧 Email", callback_data: "email" }
        ]
      ]
    }
  });
});

// Handle button clicks
bot.on("callback_query:data", async (ctx) => {
  const choice = ctx.callbackQuery.data;
  
  // Acknowledge the callback
  await ctx.answerCallbackQuery();
  
  if (choice === "about") {
    ctx.reply("📖 This bot was built using grammY framework for Telegram.");
  } else if (choice === "contact") {
    ctx.reply("📞 You can contact us at: support@example.com");
  } else if (choice === "email") {
    ctx.reply("📧 Send us an email: info@example.com");
  }
});

// Send a photo
bot.command("photo", (ctx) => {
  ctx.replyWithPhoto("https://picsum.photos/400/300", {
    caption: "📸 Here's a random photo for you!"
  });
});

// Handle text messages
bot.on("message:text", (ctx) => {
  const text = ctx.message.text;
  
  // Don't reply to commands
  if (!text.startsWith("/")) {
    ctx.reply(`💬 You said: ${text}`);
  }
});

// Handle stickers
bot.on("message:sticker", (ctx) => {
  ctx.reply("🎨 Nice sticker! Keep them coming!");
});

// Handle errors
bot.catch((error) => {
  console.error("❌ Bot error:", error);
});

// Start the bot
console.log("🤖 Starting bot...");
bot.start();
console.log("✅ Bot is running! Send a message to your bot on Telegram.");