

const handleOnMouseMove = e => {
    const { currentTarget: target} = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
    

}

for(const containerhover of document.querySelectorAll('[id=containerhovergradient]') ){
    containerhover.onmousemove = e => handleOnMouseMove(e);
}

const swiper = new Swiper('.carousel-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    
  });


  const backgroundgravity = document.querySelector("#backgroundgravity");

  let Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Bodies = Matter.Bodies,
          Composite = Matter.Composite;

      // create an engine
      let engine = Engine.create();

      // create a renderer
      let render = Render.create({
          element: backgroundgravity,
          engine: engine,
          options:{
            width:backgroundgravity.clientWidth,
            height:backgroundgravity.clientHeight,
            background: "transparent",
            wireframes: true,
          }
      });

      // create two boxes and a ground
      let boxA = Bodies.rectangle(400, 200, 80, 80);
      let boxB = Bodies.rectangle(450, 50, 80, 80);
      let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

      // add all of the bodies to the world
      Composite.add(engine.world, [boxA, boxB, ground]);

      // run the renderer
      Render.run(render);

      // create runner
      let runner = Runner.create();

      // run the engine
      Runner.run(runner, engine);






  
 

     









