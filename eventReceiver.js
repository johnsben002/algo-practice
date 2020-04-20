const solution = (messages) => {
  class Emitter {
    constructor(messages = []) {
      this.messages = messages;
      this.event = () => {};
    }

    setEvent(fn) {
      this.event = fn;
    }

    trigger() {
      this.messages.forEach(message => this.event(message));
    }
  }


  class Receiver {
    constructor() {
      this.messages = [];
      this.ping = this.ping.bind(this);
    }


    ping(message) {
      this.messages.push(message);
    }
  }

  const myEmitter = new Emitter(messages);
  const myReceiver = new Receiver();

  myEmitter.setEvent(myReceiver.ping);
  myEmitter.trigger();

  return myReceiver.messages;
};

console.log(solution(['this', 'maybe', 'idk']));