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
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  const img = item.querySelector('img');
  const caption = item.querySelector('.caption');
  
  img.addEventListener('mouseover', () => {
    caption.style.opacity = '1';
  });
  
  img.addEventListener('mouseout', () => {
    caption.style.opacity = '0';
  });
});

