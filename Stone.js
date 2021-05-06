class Stone {
	//created the constructor
	constructor(x, y, width, height) {
	  //physical properties of box object
	  var options = {
		//bounciness
		  'restitution':0.8,
		  //backward force
		  'friction':0.9,
		  //matter content in body
		  'density':12
	  }
	  //create the body with x, y ,w, h and options
	  this.body = Bodies.rectangle(x, y, width, height, options);
	  //give the width to the body
	  this.width = width;
	  // give the height to the body
	  this.height = height;
	  
	  // adding the box in the egine
	  World.add(world, this.body);
	}
	display(){
	  //logging and getting the positon of the body
	  var pos =this.body.position;
	  //bringing the box to center / chnaging its x and y and bringing it to the center
	  rectMode(CENTER);
	  //chaning its color and filling color in it
	  fill("red");
	  // changing the box's value
	  rect(pos.x, pos.y, this.width, this.height);
	  // remove the old values of the objects ie pop out the values
	  pop();
	}
  };
  