const Alexa = require('alexa-sdk')

exports.handler = function (event, context, callback) {
    const alexa =   Alexa.handler(event, context, callback);
    alexa.appId = APP_ID
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