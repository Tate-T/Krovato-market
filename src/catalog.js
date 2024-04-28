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

  const filterBox = document.getElementById("filterBox");
      const catalog = document.getElementById("catalog");

      filterBox.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
          event.preventDefault();

          const sortOption = event.target.textContent.trim();

          sortCatalogItems(sortOption);
        }
      });

      function sortCatalogItems(sortOption) {
        const catalogItems = catalog.getElementsByClassName("catalog__item");

        const catalogItemsArray = Array.from(catalogItems);

        catalogItemsArray.sort((a, b) => {
          switch (sortOption) {
            case "За зростанням ціни":
              const priceA1 = parseFloat(
                a
                  .getElementsByClassName("catalog__price")[0]
                  .textContent.replace(/\s+/g, "")
                  .replace("грн.", "")
              );
              const priceB1 = parseFloat(
                b
                  .getElementsByClassName("catalog__price")[0]
                  .textContent.replace(/\s+/g, "")
                  .replace("грн.", "")
              );
              return priceA1 - priceB1;

            case "За спаданням ціни":
              const priceA2 = parseFloat(
                a
                  .getElementsByClassName("catalog__price")[0]
                  .textContent.replace(/\s+/g, "")
                  .replace("грн.", "")
              );
              const priceB2 = parseFloat(
                b
                  .getElementsByClassName("catalog__price")[0]
                  .textContent.replace(/\s+/g, "")
                  .replace("грн.", "")
              );
              return priceB2 - priceA2;

            case "За рейтингом":
              const ratingA =
                a.getElementsByClassName("rating")[0]?.textContent || "0";
              const ratingB =
                b.getElementsByClassName("rating")[0]?.textContent || "0";
              return parseInt(ratingB) - parseInt(ratingA);

            case "Новинки":
              const dateA = a.getAttribute("data-date") || "0";
              const dateB = b.getAttribute("data-date") || "0";
              return new Date(dateB) - new Date(dateA);

            default:
              return 0;
          }
        });

        catalog.innerHTML = "";
        catalogItemsArray.forEach((item) => {
          catalog.appendChild(item);
        });
      }