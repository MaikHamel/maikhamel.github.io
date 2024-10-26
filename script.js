

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






