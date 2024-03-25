let twilio = require('twilio');
let client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Sending messages from Node',
    to: '+16316554062',
    from: '+18776062209'
})
    .then((message) => console.log(message.sid));