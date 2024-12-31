var crsr = document.querySelector('#cursor')
var blur1 = document.querySelector('#cursor-blur')

document.addEventListener("mousemove", function(dets){
    // console.log(dets);
    crsr.style.left = dets.x+30+'px';
    crsr.style.top = dets.y+'px';
    blur1.style.left = dets.x -200+'px';
    blur1.style.top = dets.y-250+'px';
})


var h4all = document.querySelectorAll('#nav h4')
h4all.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        crsr.style.scale = 3
        crsr.style.border = '1px solid #fff'
        crsr.style.backgroundColor = 'transparent'
    })
    elem.addEventListener('mouseleave', function(){
        crsr.style.scale = 1
        crsr.style.border = '0px solid aqua'
        crsr.style.backgroundColor = 'aqua'
    })
    
})



gsap.to("#nav",{
    backgroundColor: "rgba(0, 0, 0, 0.47)",  //camel case
    duration:0.5,
    height: '110px',
    scrollTrigger:{
        trigger:'#nav',
        scroller:'body',
        markers:true,
        start:'top -10%',
        end:'top -11%',
        scrub:1
    }
})


gsap.to("#main",{
    backgroundColor:'#000',
    scrollTrigger:{
        trigger:'#main',
        scroller:'body',
        markers:true,
        start:'top -25%',
        end:'top -70%',
        scrub:2
    }
})


// gsap.from("about-me img,#about-me-in",{
//     y:50,
//     opacity:0,
//     duration:1,
//     stagger:0.4,
//     scrollTrigger:{
//         trigger:"#about-me",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 55%",
//         scrub:3
//     }
// })

