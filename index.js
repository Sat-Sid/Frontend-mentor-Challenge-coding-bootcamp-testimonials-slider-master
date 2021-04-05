var buttons = document.querySelectorAll(".btn");
var numberOfButton = document.querySelectorAll(".btn").length;
var johnTestimonials = document.querySelector(".johnTest");
var tanyaTestimonials = document.querySelector(".tanyaTest");
var currentProflieImg = document.querySelector(".profileimg");
var currentProfile = "tanya";

// Initially disabling JohnTestimonial
johnTestimonials.classList.add("jsdisplayOff");

// Adding EventListener to all buttons & calling function
for (var i = 0; i < numberOfButton; i++) {

  buttons[i].addEventListener("click", function() {
    onClickChange();
  });

}

function onClickChange() {

  if (currentProfile === "tanya") {
    currentProflieImg.setAttribute("src", "images/image-john.jpg");
    document.querySelector("p").innerHTML = 'John Tarkpor <span class = "desg">Junior Front-end Developer</span>'
    currentProfile = "john";
  } else {
    currentProflieImg.setAttribute("src", "images/image-tanya.jpg");
    document.querySelector("p").innerHTML = 'Tanya Sinclair <span class = "desg">UX Engineer</span>'
    currentProfile = "tanya";
  }
  johnTestimonials.classList.toggle("jsdisplayOff");
  tanyaTestimonials.classList.toggle("jsdisplayOff");
}

//
// “ If you want to lay the best foundation possible I’d recommend taking this course.
// The depth the instructors go into is incredible. I now feel so confident about
// starting up as a professional developer. ”
//
// John Tarkpor
// Junior Front-end Developer
