//  CREATING RESPONSIVE NAV BAR FOR MOBILE VIEW
const mobiel_nav = document.querySelector('.mobile-navbar-btn');
const headerELem = document.querySelector('.header');

mobiel_nav.addEventListener("click", ()=>{
    headerELem.classList.toggle("active")
})









const Advisorsof = document.querySelector(".Advisorsof");


const leader = document.querySelector("#leaders");
const developers = document.querySelector(".developers");
const Developers = document.querySelector("#Developers");
const Coleader = document.querySelector(".co-leaders");
const COleader = document.querySelector("#COleaders");
const Advisors = document.querySelector("#Advisors");
const advisorsImage = document.querySelector(".image2of")




window.onload =()=>{



    Coleader.style.display="none";
    Advisorsof.style.display = "none";
    developers.style.display="none";
    advisorsImage.style.display="block";


    
    image2.style.height="600px";
    image2.style.width="450px";
    image1.style.marginTop="90px";
    image3.style.marginTop="90px";
    image1.style.height="400px";
    image1.style.width="300px";
    image3.style.height="400px";
    image3.style.width="300px";
    image1.style.opacity="0.5";
    image3.style.opacity="0.5";
    // image4.style.marginTop="90px";
    // image5.style.marginTop="90px";
    // image4.style.height="400px";
    // image4.style.width="300px";
    // image5.style.height="400px";
    // image5.style.width="300px";
    // image4.style.opacity="0.5";
    // image5.style.opacity="0.5";
    // image3.style.opacity="1";
    // image3.style.marginTop="1px";
    

};

Developers.addEventListener('click',()=>{
    Coleader.style.display="none";
        Advisorsof.style.display = "none";
        developers.style.display="flex";
          advisorsImage.style.display="none";
    })



    COleader.addEventListener('click',()=>{
        developers.style.display="none";
        Advisorsof.style.display="none";
        advisorsImage.style.display="none";
        Coleader.style.display ="block";
        
    })
    leader.addEventListener('click',()=>{
        developers.style.display="none";
        Advisorsof.style.display="flex";
        advisorsImage.style.display="none";
        Coleader.style.display ="none";
    })
    Advisors.addEventListener('click',()=>{
        
    Coleader.style.display="none";
    Advisorsof.style.display = "none";
    developers.style.display="none";
    advisorsImage.style.display="block";
    })
    

    const image1 = document.getElementById("Floatimage1");
const image2 = document.getElementById("Floatimage2");
const image3 = document.getElementById("Floatimage3");
// const image4= document.getElementById("image4");
// const image5 = document.getElementById("image5"); 

console.log(image1);



image2.addEventListener('click',()=>{
image2.style.height="600px";
image2.style.width="450px";
image1.style.marginTop="90px";
image3.style.marginTop="90px";
// image4.style.marginTop="90px";
// image5.style.marginTop="90px";
image1.style.height="400px";
image1.style.width="300px";
image3.style.height="400px";
image3.style.width="300px";
// image4.style.height="400px";
// image4.style.width="300px";
// image5.style.height="400px";
// image5.style.width="300px";
image1.style.opacity="0.5";
image3.style.opacity="0.5";
// image4.style.opacity="0.5";
// image5.style.opacity="0.5";
image2.style.opacity="1";
image2.style.marginTop="1px";
}
)
image1.addEventListener('click',()=>{
    image1.style.height="600px";
    image1.style.width="450px";
    image2.style.marginTop="90px";
    image3.style.marginTop="90px";
    // image4.style.marginTop="90px";
    // image5.style.marginTop="90px";
    image2.style.height="400px";
    image2.style.width="300px";
    image3.style.height="400px";
    image3.style.width="300px";
    // image4.style.height="400px";
    // image4.style.width="300px";
    // image5.style.height="400px";
    // image5.style.width="300px";
    image2.style.opacity="0.5";
    image3.style.opacity="0.5";
    // image4.style.opacity="0.5";
    // image5.style.opacity="0.5";
    image1.style.opacity="1";
    image1.style.marginTop="1px";
    }
    )
    image3.addEventListener('click',()=>{
        image3.style.height="600px";
        image3.style.width="450px";
        image2.style.marginTop="90px";
        image1.style.marginTop="90px";
        // image4.style.marginTop="90px";
      // image5.style.marginTop="90px";
        image2.style.height="400px";
        image2.style.width="300px";
        image1.style.height="400px";
        image1.style.width="300px";
        // image4.style.height="400px";
        // image4.style.width="300px";
        // image5.style.height="400px";
        // image5.style.width="300px";
        image2.style.opacity="0.5";
        image1.style.opacity="0.5";
        // image4.style.opacity="0.5";
        // image5.style.opacity="0.5";
        image3.style.opacity="1";
        image3.style.marginTop="1px";
        }
        )


        // image4.addEventListener('click',()=>{
        //     image4.style.height="600px";
        //     image4.style.width="450px";
        //     image2.style.marginTop="90px";
        //     image1.style.marginTop="90px";
        //     image3.style.marginTop="90px";
        //   image5.style.marginTop="90px";
        //     image2.style.height="400px";
        //     image2.style.width="300px";
        //     image1.style.height="400px";
        //     image1.style.width="300px";
        //     image3.style.height="400px";
        //     image3.style.width="300px";
        //     image5.style.height="400px";
        //     image5.style.width="300px";
        //     image2.style.opacity="0.5";
        //     image1.style.opacity="0.5";
        //     image3.style.opacity="0.5";
        //     image5.style.opacity="0.5";
        //     image4.style.opacity="1";
        //     image4.style.marginTop="1px";
        //     }
        //     )
        //     image5.addEventListener('click',()=>{
        //         image5.style.height="600px";
        //         image5.style.width="450px";
        //         image2.style.marginTop="90px";
        //         image1.style.marginTop="90px";
        //         image4.style.marginTop="90px";
        //       image3.style.marginTop="90px";
        //         image2.style.height="400px";
        //         image2.style.width="300px";
        //         image1.style.height="400px";
        //         image1.style.width="300px";
        //         image4.style.height="400px";
        //         image4.style.width="300px";
        //         image3.style.height="400px";
        //         image3.style.width="300px";
        //         image2.style.opacity="0.5";
        //         image1.style.opacity="0.5";
        //         image4.style.opacity="0.5";
        //         image3.style.opacity="0.5";
        //         image5.style.opacity="1";
        //         image5.style.marginTop="1px";
        //         }
        //         )



        //  FEED BACK YHA SE

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay:{
                delay:2500,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });

        // var swiper = new Swiper(".mySwiper", {
        //     slidesPerView: 1,
        //     spaceBetween: 30,
        //     autoplay:{
        //         delay:2500,
        //     },
        //     pagination: {
        //       el: ".swiper-pagination",
        //       clickable: true,
        //     },
        //   });

        
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});