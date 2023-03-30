// navbar java
document.addEventListener('click',function(e){
    // Hamburger menu
    if(e.target.classList.contains('hamburger-toggle')){
      e.target.children[0].classList.toggle('active');
    }
  })
// navbar java-end

// Javascript for video slider
const btns= document.querySelectorAll(".nav-btn");
const slides= document.querySelectorAll(".video-slide");
const contents= document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

    btns.forEach((btn, i) =>{
        btn.addEventListener("click", () => {
           sliderNav(i);
        });
    });
// Javascript for video slider-end

// text-animation javascript
const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Tapadipto";
            }, 0);
            setTimeout(() => {
                text.textContent = "a Genius";
            }, 4000);
            setTimeout(() => {
                text.textContent = "a YouTuber";
            }, 8000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 12000);
// text-animated javascript-end

// body-card javascript


    
jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
  });

//   body-card javascript end

// 
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});