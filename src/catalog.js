function toggleFilter() {
    let filterBox = document.getElementById("filterBox");
    if (filterBox.classList.contains("hidden")) {
      filterBox.classList.remove("hidden");
      filterBox.style.opacity = "0";
      filterBox.style.transform = "translateY(-100px)";
      setTimeout(() => {
        filterBox.style.opacity = "1";
        filterBox.style.transform = "translateY(0)";
      }, 50);
    } else {
      filterBox.style.opacity = "0";
      filterBox.style.transform = "translateY(-100px)";
      setTimeout(() => {
        filterBox.classList.add("hidden");
      }, 300);
    }
  }