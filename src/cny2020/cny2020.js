class CNY2020 {
  constructor () {
    this.html = {
      app: document.getElementById('app'),
      canvas: document.getElementById('canvas'),
      console: document.getElementById('console'),
    };
    this.canvas2d = this.html.canvas.getContext('2d');
    this.messages = [];
    
    this.prevTime = null;
    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));
  }
  
  main (time) {
    const timeDelta = (this.prevTime) ? time - this.prevTime : time;
    this.prevTime = time;
    
    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));
  }
  
  print (text) {
    this.messages.unshift(text);
    while (this.messages.length > 3) {
      this.messages.pop();
    }
    
    this.html.console.textContent = this.messages.join('\n');
  }
};

export default CNY2020;
