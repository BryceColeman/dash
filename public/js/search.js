function search() {
  // Declare variables
  var filter, templates;
  // Content from users search is converted to all upper case letters
  filter = document.getElementById('searchBar').value.toUpperCase();
  templates = document.getElementsByClassName("template");

  // Loop through all list items, and hide what doesn't match the search filter
  for (k = 0; k < templates.length; k++) {
    content = templates[k].textContent || templates[k].innerText;
    if (content.toUpperCase().indexOf(filter) > -1) {
      templates[k].style.display = "";
    } else {
      templates[k].style.display = "none";
    } // end if statement
  } // End for loop
} // End search function