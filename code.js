var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ball1 = createSprite(5,5,10,10);
ball1.shapeColor="blue";

var ball2 = createSprite(395,395,10,10);
ball2.shapeColor = "red";

var ball3 = createSprite(395,5,10,10);
ball3.shapeColor = "green";

var ball4 = createSprite(5,395,10,10);
ball4.shapeColor = "purple";

ball1.velocityX = 3;
ball1.velocityY = 3;

ball2.velocityX = -3;
ball2.velocityY = -3;

ball3.velocityX = -3;
ball3.velocityY = 3;

ball4.velocityX = 5;
ball4.velocityY = -5;

function draw() {
  
  background("violet");
  
  
  createEdgeSprites();
  
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  
  ball1.bounce(ball2);
  ball1.bounce(ball3);
  ball1.bounce(ball4);
  
  ball2.bounce(ball1);
  ball2.bounce(ball3);
  ball2.bounce(ball4);
  
  ball3.bounce(ball1);
  ball3.bounce(ball2);
  ball3.bounce(ball4);
  
  ball4.bounce(ball1);
  ball4.bounce(ball2);
  ball4.bounce(ball3);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
