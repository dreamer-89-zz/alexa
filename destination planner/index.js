const Alexa = require('alexa-sdk')
const APP_ID = "amzn1.ask.skill.f91848e8-4817-4056-b4dc-62c84ba0d859"
exports.myHandler = function (event, context, callback) {
    const alexa =   Alexa.handler(event, context, callback);
    alexa.APP_ID =   APP_ID
    alexa.registerHandlers(handlers)
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function() {
        this.emit(':tell', 'Thanks for checking out destination teller.')
    },
    'TouristDestination': function (){
        this.emit(':tell', 'Welcome to Alexa skill challenge. This is nearby tourist destination teller');
    }
};