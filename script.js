var crsr = document.querySelector("#cursor")
var crsrblr = document.querySelector("#cursorblr")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+ "px"
    crsr.style.top = dets.y+"px"
    crsrblr.style.left = dets.x-180 +"px"
    crsrblr.style.top = dets.y-180 +"px"
})

gsap.to("#nav",{
    backgroundColor : "#000",
    duration : 2,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }

})


gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:{
    scrollTrigger:"#main",
    scroll:"body",
    markers: true,
    start:"top -25%",
    end:"top -70%",
    scrub:1
  }

})


var allh4 = document.querySelectorAll("#nav h4");

allh4.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale =3;
    crsr.style.border = "1px solid #fff"
    crsr.style.backgroundColor = "transparent"
  })

  elem.addEventListener("mouseleave",function(){
    crsr.style.scale =1;
    crsr.style.border ="0px solid #95c11e"
    crsr.style.backgroundColor = "#95c11e"
  }) 
 
 
})


gsap.from("#aboutus img , #btw-img",{
  y:800,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:"#aboutus",
    scroller:"body",
    start: "top 60% ",
    end: "top 50% ",
    scrub:3
  }
})