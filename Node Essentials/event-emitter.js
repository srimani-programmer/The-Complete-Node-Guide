const event = require('events');
const emitter = new event.EventEmitter();

// Ring Bell Event Handler.
function ringBell(){
    console.log("Tring Tring Tring...!");
    emitter.emit('greetings');
}

// Greetings Event Handler.
function greetings(){
    console.log('Welcome to Our Store :) ')
}

// Registring the Events...!
emitter.on("doorOpen", ringBell);
emitter.on('greetings', greetings);

// Emitting the Events.
emitter.emit('doorOpen');

