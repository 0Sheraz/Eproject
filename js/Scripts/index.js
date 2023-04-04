
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

// testimonials
// for animation 

$(document).ready(function(){
    $('.pp-quote').click(function(){
      $('.pp-quote').removeClass("active");
      $(this).addClass("active");
  });
  });
  
  $(document).ready(function(){
      
         // hide-top
  
          $('.li-quote-1').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');
              $('.quote-text-1').addClass('show');
              $('.quote-text-1').removeClass('hide-bottom');             
          });
  
          $('.li-quote-2').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');
              $('.quote-text-2').addClass('show');             
              $('.quote-text-2').removeClass('hide-bottom');
          });
  
          $('.li-quote-3').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');         
              $('.quote-text-3').addClass('show');             
              $('.quote-text-3').removeClass('hide-bottom');
          });
          $('.li-quote-4').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');      
              $('.quote-text-4').addClass('show');             
              $('.quote-text-4').removeClass('hide-bottom');
          });
          $('.li-quote-5').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');      
              $('.quote-text-5').addClass('show');             
              $('.quote-text-5').removeClass('hide-bottom');
          });
          $('.li-quote-6').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');      
              $('.quote-text-6').addClass('show');             
              $('.quote-text-6').removeClass('hide-bottom');
          });
          $('.li-quote-7').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');      
              $('.quote-text-7').addClass('show');             
              $('.quote-text-7').removeClass('hide-bottom');
          });
          $('.li-quote-8').click(function(e){ 
              e.stopPropagation();
              $(".show").addClass('hide-top');
              $(".hide-top").removeClass('show');      
              $('.quote-text-8').addClass('show');             
              $('.quote-text-8').removeClass('hide-bottom');
          });
             
      
  });
  
  
  $(document).ready(function(){
      
         // hide-top
  
          $('.li-quote-1').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-1').addClass('look');
              $('.dp-name-1').removeClass('hide-dp-bottom');             
          });
  
          $('.li-quote-2').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-2').addClass('look');
              $('.dp-name-2').removeClass('hide-dp-bottom');             
          });
  
          $('.li-quote-3').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-3').addClass('look');
              $('.dp-name-3').removeClass('hide-dp-bottom');             
          });
          $('.li-quote-4').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-4').addClass('look');
              $('.dp-name-4').removeClass('hide-dp-bottom');             
          });
          
          $('.li-quote-5').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-5').addClass('look');
              $('.dp-name-5').removeClass('hide-dp-bottom');             
          });
          
          $('.li-quote-6').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-6').addClass('look');
              $('.dp-name-6').removeClass('hide-dp-bottom');             
          });
          $('.li-quote-7').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-7').addClass('look');
              $('.dp-name-7').removeClass('hide-dp-bottom');             
          });
          $('.li-quote-8').click(function(e){ 
              e.stopPropagation();
              $(".look").addClass('hide-dp-top');
              $(".hide-dp-top").removeClass('look');
              $('.dp-name-8').addClass('look');
              $('.dp-name-8').removeClass('hide-dp-bottom');             
          });
             
      
  });
// testimonials-end
// large card
var swiper = new Swiper('.blog-slider', {
   
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });
//   end 
// go to top
$(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    
    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
    })
});
