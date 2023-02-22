Matter.use("matter-collision-events");
Matter.use("matter-dom-plugin");

const { Engine, Runner, Render, Events, RenderDom, DomBodies, DomBody } =
  Matter;

const engine = Engine.create(),
  runner = Runner.create();

engine.gravity.y = 0;
engine.world.frictionAir = 10;
engine.world.friction = 10;

const render = RenderDom.create({
  engine: engine,
  showDebug: true,
  showBounds: true
});

const commonBodyOptions = {
    render: render,
    frictionAir: 0.2
};

function getVertexOfElementFromCenter( el ) {
  const { top, left, width, height, bottom } = el.getBoundingClientRect();
  const centerX =  left + width / 2,
      centerY = top + height / 2;

  return {
      x: centerX, // centerX,
      y: centerY // centerY
  }
}

function getVertexOfLetterElementFromCenter( el ) {
  const { top, left, width, height, bottom } = el.getBoundingClientRect();
  const centerX =  left - ( width / 2 ),
      centerY = top - ( height / 2 );

  return {
      x: centerX, // centerX,
      y: centerY // centerY
  }
}


function random( min, max ) {
  return Math.random() * (max - min) + min;
};

const groundEl = document.querySelector("#ground"),
  contentEl = document.querySelector(".content"),
  headingEl = document.querySelector( "#heading"),
  bodyEl = document.body;

/**
 * Add components
 */

const groundBody = DomBodies.create({
  ...commonBodyOptions,
  el: "#ground",
  bodyType: "block",
  Dom: {
    render: render,
    element: groundEl,
  },
  density: 1,
  position: getVertexOfElementFromCenter(contentEl)
});

[...document.querySelectorAll('[data-matter-block]')].forEach(
    (blockEl, i) => {
    if ( !blockEl.getAttribute('id') ) {
        blockEl.setAttribute('id', `matter-block-${i}`);
    }

    const centerXY = getVertexOfElementFromCenter(blockEl);
    DomBodies.create({
      Dom: {
        render: render,
        element: blockEl,
      },
      el: "#" + blockEl.getAttribute("id"),
      density: 0.2,
      position: centerXY,
      bodyType: "block",
      ...commonBodyOptions,
    });
  }
);


Events.on(engine, "beforeUpdate", updateContentBody )

let { y:lastScrollPosY, x:lastScrollPosX} = getVertexOfElementFromCenter( contentEl );
const drag = 11.5;

function updateContentBody() {
  const {  y:py,  x:px} = getVertexOfElementFromCenter( contentEl );
  const  vx = ( px ) - ( lastScrollPosX ),
      vy =  ( py ) - ( lastScrollPosY ),
      positionOffset = 6; // 6 random number
  DomBody.setVelocity( groundBody, { x: vx / drag , y: vy / drag } )
  DomBody.setPosition(groundBody, { x: px / positionOffset, y: py / positionOffset });
  lastScrollPosX = px;
  lastScrollPosY = py;
};


Runner.run(runner, engine);
RenderDom.run(render);

Render.stop(render.DebugRender);
document.getElementById('debug').remove();
