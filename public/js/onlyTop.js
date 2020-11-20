//jshint esversion:6
// Set a variable for our button element.
const scrollToTopButton = document.getElementById('js-top');
// const goBackButton = document.getElementById('js-back');

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY;

const scrollHeight = $(document) .height ();// document height
const  scrollPosition = $(window) .height () + $(window) .scrollTop ();// current location
const footHeight = $("footer").innerHeight ();// footer height (= position to stop)

const scrolled = y > 0;
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!

  // console.log("footer pos = " + footHeight);
  // console.log("scroll pos = " + scrollPosition);
  // console.log("scroll hei = " + scrollHeight);

  if (scrolled && scrollHeight - scrollPosition > footHeight) {
    scrollToTopButton.className = "top-link show-btn";
    // goBackButton.className = "go-back-link show-btn";

  }

  else if (scrollHeight - scrollPosition < footHeight) {// If the difference between the document height and the current location is less than the footer height
        scrollToTopButton.className = "top-link show2";
        // goBackButton.className = "go-back-link show-btn";

      }


          else {
            scrollToTopButton.className = "top-link hide";
            // goBackButton.className = "go-back-link hide";

          }






};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '10' value to get a smoother/slower scroll!
    window.scrollTo(0, c - c / 10);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
};