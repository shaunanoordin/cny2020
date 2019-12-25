class CNY2020 {
  constructor () {
    this.prevTime = null;
    this.main();
  }
  
  main (time) {
    const timeDelta = (this.prevTime) ? time - this.prevTime : time;
    this.prevTime = time;
    
    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));
  }
};

export default CNY2020;
