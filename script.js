

function loadingAnimation(){

var tl = gsap.timeline()
tl.from(".line h1" , {
    y:150,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.25,
})
tl.from("#line1-part1 " , {
    opacity:0,
    onStart:function(){
        var h5Timer = document.querySelector("#line1-part1 h5");

var grow = 0;

setInterval(() => {
  if(grow < 100){
    h5Timer.innerHTML = grow++
  } else{
    h5Timer.innerHTML = grow
  } 
}, 25);
    }

    
})

tl.to(".line h2" , {
    animationName:"anime",
    opacity:1,
    

})

tl.to("#loader" , {
    opacity:0,
    duration:0.2,
    delay:2.8,
})

tl.from("#page1" ,{
    delay:0.2,
    y:1600,
    opacity:0,
    duaration:0.5,
    ease:Power4,
} ) 

tl.from("#hero1, #hero2, #hero3 , #hero4" , {
  y:120,
    opacity:0,
    duration:0.5,
    stagger:0.1,
})
tl.from("#nav-part2 h4", {
  y:20,
  opacity:0,
  duration:0.5,
  stagger:0.1,
})
}
function cursorAnimation(){
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr" , {
  
      left:dets.x,
      top:dets.y,
      duration:0.1,
    })
  });
  
}

loadingAnimation();
cursorAnimation();


