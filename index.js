/**
 * This code demonstrates a simple skill built with the Amazon Alexa Skills
 * development kit.
 **/

'use strict';

var FACTS = [
  "I hate my name but I love letter ‘N’",
	"I prefer coffee over tea",
	"Some call me nerd. Some call me geek. Some call me weirdo. Some call me psycho. Some call me shy. And some even call me smart",
	"I think and overthink about almost everything. And I can easily spend countless hours doing nothing but thinking",
  "I tend to follow an alphabetical ordering when arranging things on my computer.",
	"I don’t give compliments unless I feel that you truly deserve it.",
	"I hate bullying and if you bully me or others then you’re simply giving me a chance to ignore you forever.",
	"My favorite font is “Georgia” ",
	"I can not live without the Internet or iphone.",
	"I don’t celebrate my birthdays as I think there are only two days that matters — a birthday and a death-day",
	"I find it extremely difficult to speak my mind",
	"I have a view/opinion about almost all things in life except when it comes to my hair cut. A hair salon is the only place where I sit quietly (as long as they want) without any expectations or requirement. But I hope to fix it pretty soon.",
	"I registered my first domain name in Octomber 2017.",
	"I sound rude until you get to know me. The problem is… I don’t know what’s rude and what’s not.",
	"I seek perfection in almost everything I do",
	"I talk too fast when I get super excited"
];

var handlers = {
  'LaunchRequest': function () { this.emit('GetFact'); },
  'GetNewFactIntent': function () { this.emit('GetFact'); },
  'GetFact': function() {
    // Randomly select a fact from the array
    const factIndex = Math.floor(Math.random() * FACTS.length);
    const randomFact = FACTS[factIndex];

    // Create speech output
    const speechOutput = "Here's your fact: " + randomFact;
    this.emit(':tellWithCard', speechOutput, "Here's your Gorilla fact:", randomFact);
  }
};

// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {
  // Include the AWS Alexa Library.
  const Alexa = require("alexa-sdk");

  // Create an instance of the Alexa library and pass it the requested command.
  var alexa = Alexa.handler(event, context);

  // Give our Alexa instance instructions for handling commands and execute the request.
  alexa.registerHandlers(handlers);
  alexa.execute();
};
