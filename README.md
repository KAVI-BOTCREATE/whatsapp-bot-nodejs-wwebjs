# WhatsApp Bot using Node.js and whatsapp-web.js

This is a basic WhatsApp bot built with Node.js and whatsapp-web.js, designed to be set up and run via Termux on an Android device.

## Prerequisites

- Android device with Termux installed
- Internet connection
- QR code scanner

## Setup Instructions

### 1. Install Termux

Download and install Termux from the [Play Store](https://play.google.com/store/apps/details?id=com.termux) or [F-Droid](https://f-droid.org/packages/com.termux/).

 ###2. Install Node.js and Git in Termux

```bash
pkg update
pkg upgrade
pkg install nodejs
pkg install git
```


###3. Clone the repository


    ```bash
    git clone https://github.com/KAVI-BOTCREATE/whatsapp-bot-nodejs-wwebjs.git
    cd whatsapp-bot-nodejs-wwebjs
    ```

###4. Install the dependencies:
    ```bash
    npm install
    ```

###5 Run the application:
    ```bash
    npm start
    ```

###6 Scan the QR code using your WhatsApp app to link your device.

## Usage

Send a WhatsApp message with the text "Hello" to see the bot in action.
