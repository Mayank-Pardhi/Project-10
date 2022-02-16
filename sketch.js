function setup() {
  createCanvas(450, 400);

  //create sprite for flag stripes using function by passing parameters of x position and color
  function createStiripes (x,blockColour){
    var stripe = createStiripe(x,200,75,150);
    stripe.shapeColour = blockColour;
    createStiripes(140,"blue");
  }
  //Stripe 1 : x-position : 140, color : "blue"

  //Stripe 1 : x-position : 215, color : "white"

  //Stripe 1 : x-position : 290, color : "red"
}

function draw() {
  background("honeydew");
  drawSprites();
}
