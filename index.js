let mainNavigation = document.getElementById('mainNavigation')
let brandLink = document.getElementById('brandLink')
  window.onscroll = function() {
    if (window.pageYOffset > mainNavigation.offsetHeight) {
      if (brandLink.innerText !== "S & M") brandLink.innerText = "S & M"
    } else {
      if (brandLink.innerText !== "SerMar") brandLink.innerText = "SerMar"
    }
  }
  window.onresize = function() {
    if (window.innerWidth < 660) {
      if (brandLink.innerText !== "S & M") brandLink.innerText = "S & M"
    } else {
      if (brandLink.innerText !== " SerMar ") brandLink.Text = "SerMar"
    }
  }
//showing the menu-content when clicking the hamburger icon
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const navMenu = document.getElementById("nav-menu");
  
  hamburgerIcon.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // cart functionality
  let cartValue = 0;
  const cartButtons = document.querySelectorAll(".add-item");
  const cartIcon = document.getElementById("cartIcon");
  cartButtons.forEach(cartButton => {
      cartButton.addEventListener("click", function() {
          cartValue += 1;
          cartIcon.setAttribute("data-count", cartValue);
      });
  });
  

