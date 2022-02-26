function Background(p5) {
  let noiseScale = 2000;
  let agents = [];
  let rSeed;
  let canvas;
  let cols = [
    "#f72585",
    "#b5179e",
    "#7209b7",
    "#560bad",
    "#480ca8",
    "#3a0ca3",
    "#3f37c9",
    "#4361ee",
    "#4895ef",
    "#4cc9f0",
  ];

  class Agent {
    constructor(x, y, index) {
      this.x = x;
      this.y = y;
      this.z = p5.random(0.02, 0.08);
      this.size = p5.random(25, 50);
      this.speed = p5.random(0.5, 10);
      this.col = p5.color(cols[index]);
      this.angle = 0;
      this.noiseStrength = (index + 1) * p5.random(10) + 20;
    }

    display() {
      p5.strokeWeight(this.size);
      p5.stroke(this.col);
      p5.point(this.x, this.y);
    }

    update() {
      this.angle =
        p5.noise(this.x / noiseScale, this.y / noiseScale, this.z) *
        this.noiseStrength;

      this.x += p5.sin(this.angle) * this.speed;
      this.y += p5.cos(this.angle) * p5.cos(this.angle / 4) * this.speed;

      this.bounds();
      this.z += 0.0005;
      if (this.z > 0.6) {
        p5.setup();
      }
    }

    bounds() {
      if (this.x < -this.size) this.x = p5.width + this.size;
      if (this.x > p5.width + this.size) this.x = -this.size;
      if (this.y < -this.size) this.y = p5.height + this.size;
      if (this.y > p5.height + this.size) this.y = -this.size;
    }
  }

  p5.setup = () => {
    canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.randomSeed(rSeed);
    // cols = colors[p5.floor(p5.random(colors.length))];
    //p5.background(0);
    for (let i = 0; i < 20; i++) {
      agents[i] = new Agent(
        p5.random(p5.width),
        p5.random(p5.height),
        i % cols.length
      );
    }
  };

  p5.updateWithProps = (props) => {
    if (props.cols) {
      console.log("Inside Sketch Change");
      cols = props.cols;
      p5.setup();
    }
  };

  window.onresize = function () {
    // assigns new values for width and height variables
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.size(w, h);
  };

  p5.draw = () => {
    for (let i = 0; i < 20; i++) {
      agents[i].display();
      agents[i].update();
    }
  };
}

export default Background;
