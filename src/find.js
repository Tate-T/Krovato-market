document.addEventListener("DOMContentLoaded", function () {
    var searchResultsContainer = document.getElementById("searchResults");
  
    document.getElementById("headerFind").addEventListener("input", function () {
      var searchTerm = this.value.trim().toLowerCase();
      searchResultsContainer.innerHTML = "";
      if (searchTerm.length >= 3 && searchTerm !== "") {
        var catalogItems = document.querySelectorAll(".catalog__name");
        var uniqueResults = new Set();
        
        catalogItems.forEach(function (item) {
          var itemName = item.textContent.toLowerCase();
          if (itemName.includes(searchTerm)) {
            uniqueResults.add(item.textContent);
          }
        });
        var uniqueResultsArray = Array.from(uniqueResults);
        uniqueResultsArray.forEach(function (result) {
          var resultItem = document.createElement("div");
          resultItem.textContent = result;
          resultItem.addEventListener("click", function() {
            var clickedItemText = this.textContent;
            window.location.href = "./card-catalog-page.html";
        });
        
          searchResultsContainer.appendChild(resultItem);
        });
  
        searchResultsContainer.classList.remove("hidden");
      } else {
        searchResultsContainer.classList.add("hidden");
      }
    });
  });
  