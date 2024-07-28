const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize the client
const client = new Client({
    authStrategy: new LocalAuth()
});

// Generate QR code for authentication
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('QR code generated. Please scan it using your WhatsApp.');
});

// Client is ready to receive messages
client.on('ready', () => {
    console.log('Client is ready!');
});

// Handle incoming messages
client.on('message', message => {
    if (message.body.toLowerCase() === 'hello') {
        message.reply('Hello! How can I assist you today?');
    } else {
        message.reply("I'm sorry, I didn't understand that command.");
    }
});

// Start the client
client.initialize();
