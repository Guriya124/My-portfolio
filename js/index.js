var heroText = document.getElementById("title-name");

var changeHero = heroText.addEventListener("mouseover", hell);
var changeHero = heroText.addEventListener("mouseout", hello1);

function hell (){
    // heroText.style.color = "#F86F03";
  
    heroText.style.borderBottom = "solid";
    // heroText.style.backgroundColor ="#fff";

}

function hello1(){
    // heroText.style.color = "white";
    heroText.innerHTML = "Guriya Kumari";
  heroText.style.borderBottom = "none";
  // heroText.style.backgroundColor ="transparent";
}

function filterItems(category) {
  var items = document.getElementsByClassName('filter-item');
  
  if (category === 'all') {
    // Display all items
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = 'block';
    }
  } else {
    // Hide all items and display items with the selected category
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = 'none';
    }
    var selectedItems = document.getElementsByClassName(category);
    for (var i = 0; i < selectedItems.length; i++) {
      selectedItems[i].style.display = 'block';
    }
  }
}