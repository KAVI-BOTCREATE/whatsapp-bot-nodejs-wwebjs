const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { expect } = require('chai');
const sinon = require('sinon');

describe('WhatsApp Bot Tests', () => {
    let client;

    before(() => {
        client = new Client({
            authStrategy: new LocalAuth()
        });
    });

    it('should generate QR code on initialization', (done) => {
        sinon.stub(qrcode, 'generate').callsFake((qr, options) => {
            expect(qr).to.be.a('string');
            expect(options.small).to.be.true;
            done();
        });

        client.initialize();
    });

    it('should reply to "hello" message', (done) => {
        const message = {
            body: 'hello',
            reply: sinon.spy()
        };

        client.emit('message', message);

        setTimeout(() => {
            expect(message.reply.calledOnce).to.be.true;
            expect(message.reply.calledWith('Hello! How can I assist you today?')).to.be.true;
            done();
        }, 100);
    });

    it('should reply to unknown command', (done) => {
        const message = {
            body: 'unknown',
            reply: sinon.spy()
        };

        client.emit('message', message);

        setTimeout(() => {
            expect(message.reply.calledOnce).to.be.true;
            expect(message.reply.calledWith("I'm sorry, I didn't understand that command.")).to.be.true;
            done();
        }, 100);
    });

    after(() => {
        qrcode.generate.restore();
    });
});
