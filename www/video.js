class TextFader {
  playing() {
    document.getElementsByTagName('body')[0].classList.add('fade-down')
  }

  pause() {
    document.getElementsByTagName('body')[0].classList.remove('fade-down')
  }
}

class EventTracker {
  send(str) {
    window.sa_event(str);
  }

  play(evt) {
    this.send(`${this._name(evt)}_play`);
  }

  ended(evt) {
    this.send(`${this._name(evt)}_ended`);
  }

  _name(evt) {
    return evt.srcElement.parentElement.id;
  }
}

class VideoListener {
  constructor(video) {
    this.listeners = [];
    this.handleEvent = this._handleEvent.bind(this);
    ['play', 'playing', 'pause', 'ended'].forEach((evt) => {
      video.addEventListener(evt, this.handleEvent);
    });
  }

  addVideoListener(listener) {
    this.listeners.push(listener);
  }

  _handleEvent(evt) {
    this.listeners.forEach(listener => {
      if(listener[evt.type]) {
        listener[evt.type](evt);
      }
    });
  }
}

const textFader = new TextFader();
const eventTracker = new EventTracker();

Array.from(document.getElementsByTagName("video")).forEach((video) => {
  const vl = new VideoListener(video);
  vl.addVideoListener(textFader);
  vl.addVideoListener(eventTracker);
});
