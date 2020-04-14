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
      console.log(this)
      this.messages.forEach(message => this.event(message));
      console.log(messages)
    }
  }


  class Receiver {
    constructor() {
      console.log(this)
      this.messages = [];
      console.log(messages);
      this.ping = this.ping.bind(this);
    }


    ping(message) {
      console.log(this)
      this.messages.push(message);
    }
  }

  const myEmitter = new Emitter(messages);
  const myReceiver = new Receiver();
  console.log(myReceiver)

  myEmitter.setEvent(myReceiver.ping);
  myEmitter.trigger();

  myReceiver.ping();
  console.log(myReceiver)

  return myReceiver.messages;
};

console.log(solution(['this', 'maybe', 'idk']));