const pageloader=document.querySelector('.pageloader');
const main=document.querySelector('.main');

window.addEventListener("load",()=>{
    var fade = document.querySelector(".main");
            pageloader.style.display="none";
            main.style.display="block";
            AOS.init();

            var opacity = 0;
            var intervalID = setInterval(function() {
  
                if (opacity < 1) {
                    opacity = opacity + 0.1
                    fade.style.opacity = opacity;
                }
                 else {     
                    clearInterval(intervalID);
                }
            }, 100);
});


const list = document.querySelectorAll('.nav-item');
const menu = document.querySelector('.menu');
const sec = document.querySelectorAll('section');
window.addEventListener('scroll',()=>{
    let current= '';
    sec.forEach(section =>{
        const secTop = section.offsetTop;
        const secHeight = section.clientHeight;
        if(pageYOffset === 0)
            current='home';
        else if(pageYOffset >= (secTop - secHeight/2)){
            current = section.getAttribute('id');
        }
    })
    list.forEach(element => {
        element.classList.remove('active');
        if(element.classList.contains(current)){
            element.classList.add('active');
        }
    });
})


//type effect
var typed = new Typed('.type', {
    strings: [
        'Web Developer',
        'Photographer',
        'IT Engineer',
        'Full Stack Developer'
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop:true,
    cursorChar: '!',
  });
//progress bar animation
 document.querySelectorAll('.skills').forEach(ele =>{
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const bar = entry.target.querySelectorAll('.bar');
            bar.forEach(square => {
                
                if (entry.isIntersecting) {
                    square.classList.add('bar-animation');
                    return; // if we added the class, exit the function
                }
            
                // We're not intersecting, so remove the class!
                square.classList.remove('bar-animation');
            });
        });
      });
      observer.observe(ele);
 })
  
 const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {  
            if (entry.isIntersecting) {
                $('.chart').easyPieChart({
                    barColor:"cyan",
                    trackColor:"black",
                    scaleLength:0,
                    lineCap:"round",
                    lineWidth:6,
                    animate:1000,
                  });
            }
        });
 });
 observer.observe(document.querySelector('.box'));

const proj = document.querySelectorAll('.proimage');
proj.forEach(ele =>{
    const span = ele.querySelector('span');
    const h5 = ele.querySelector('h5');
    const but = ele.querySelector(' a button');
    ele.addEventListener("mouseover", ()=>{
        span.style.display = "block";
        but.style.display = "block";
        h5.style.display = "block";
       
    });
})
proj.forEach(ele =>{
    const span = ele.querySelector('span');
    const h5 = ele.querySelector('h5');
    const but = ele.querySelector('a button');
    ele.addEventListener("mouseout", ()=>{
        span.style.display = "none";
        but.style.display = "none";
        h5.style.display = "none";
    });
})
