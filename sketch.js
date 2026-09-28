class ElementoVisual{
  #x;
  #y;
  #color;
  constructor (x, y, texto) {
    this.#x = x;
    this.#y = y;
    this.color = 'magenta';
  }

  dibujar() {
    fill(this.color);
    rect(this.#x, this.#y, 10, 10);
  }
}

function setup() {
  createCanvas(400, 200);
  punto1 = new ElementoVisual(50, 100);
  punto2 = new ElementoVisual(150, 120);
}


function draw() {
  background(245);
  punto1.dibujar();
  punto2.dibujar();
}

