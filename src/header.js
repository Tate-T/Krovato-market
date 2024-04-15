// link menu

function toggleMenu() {
  let menu = document.getElementById("mobileMenu");
  let menuIcon = document.getElementById("menuIcon");
  let body = document.body;

  if (menu.style.display === "flex") {
    menu.style.transform = "translateY(-100%)";
    menu.style.opacity = "0";
    setTimeout(function () {
      menu.style.display = "none";
    }, 300);
    menuIcon.setAttribute(
      "href",
      "../../images/symbol-defs.svg#icon-mobile-menu"
    );
    body.classList.remove("no-scroll");
    removeBlurOverlay();
  } else {
    menu.style.display = "flex";
    setTimeout(function () {
      menu.style.transform = "translateY(0)";
      menu.style.opacity = "1";
    }, 10);
    menuIcon.setAttribute("href", "../../images/symbol-defs.svg#icon-cross");
    body.classList.add("no-scroll");
    createBlurOverlay();
  }
}

function createBlurOverlay() {
  let overlay = document.createElement("div");
  overlay.classList.add("blur-overlay");
  document.body.appendChild(overlay);
}

function removeBlurOverlay() {
  let overlay = document.querySelector(".blur-overlay");
  if (overlay) {
    overlay.remove();
  }
}

// find menu

function createBlurOverlayFind() {
  let overlay = document.createElement("div");
  overlay.classList.add("blur-overlay-find");
  document.body.appendChild(overlay);
}

function removeBlurOverlayFind() {
  let overlay = document.querySelector(".blur-overlay-find");
  if (overlay) {
    overlay.remove();
  }
}

function toggleDropdownMenu() {
  let dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.classList.toggle("hidden");
  let menuIcon = document.getElementById("searchIcon");

  if (!dropdownMenu.classList.contains("hidden")) {
    dropdownMenu.style.opacity = "0";
    dropdownMenu.style.transform = "translateY(-20px)";
    menuIcon.setAttribute("href", "../../images/symbol-defs.svg#icon-cross");
    setTimeout(() => {
      dropdownMenu.style.opacity = "1";
      dropdownMenu.style.transform = "translateY(0)";
    }, 10);
    createBlurOverlayFind();
    addNoScroll();
  } else {
    dropdownMenu.style.opacity = "0";
    dropdownMenu.style.transform = "translateY(-20px)";
    menuIcon.setAttribute("href", "../../images/symbol-defs.svg#icon-search");
    removeBlurOverlayFind();
    removeNoScroll();
  }
}

function addNoScroll() {
  document.body.classList.add("no-scroll");
}

function removeNoScroll() {
  document.body.classList.remove("no-scroll");
}

// number menu

function toggleAdditionalNumbers() {
  let additionalNumbersBox = document.getElementById("additionalNumbersBox");
  if (additionalNumbersBox.classList.contains("hidden")) {
    additionalNumbersBox.classList.remove("hidden");
    additionalNumbersBox.style.opacity = "0";
    additionalNumbersBox.style.transform = "translateY(-100px)";
    setTimeout(() => {
      additionalNumbersBox.style.opacity = "1";
      additionalNumbersBox.style.transform = "translateY(0)";
    }, 50);
  } else {
    additionalNumbersBox.style.opacity = "0";
    additionalNumbersBox.style.transform = "translateY(-100px)";
    setTimeout(() => {
      additionalNumbersBox.classList.add("hidden");
    }, 300);
  }
}

function toggleLanguage() {
  let languageBox = document.getElementById("languageDrop");

  if (languageBox.classList.contains("hidden")) {
    languageBox.classList.remove("hidden");
  } else {
    languageBox.classList.add("hidden");
  }
}
