/**
 * Gathers elements by ID and assigns onclick functions
 *
 */
function initialize() {
  // Gather elements by ID
  var openModal = $('openModal');
  var manageModal = $('manageModal');
  var closeModal = $('closeModal');

  // Add a click event listener. When clicked, modal is opened
  openModal.addEventListener("click", function() {
    changeDisplayValue(manageModal, 'block');
  });
  // Add a click event listener. When clicked, modal is closed
  closeModal.addEventListener("click", function() {
    changeDisplayValue(manageModal, 'none');
  });
  window.addEventListener("click", function(event) {
    if (event.target == manageModal) {
      manageModal.style.display = "none";
    }
  });
}

/**
 * Sets the display value for a given element.
 *
 * @param  {[Element object]} element the element to be changed
 * @param  {[String]} displayValue the new display value
 */
function changeDisplayValue(element, displayValue) {
  element.style.display = displayValue;
}

/**
 * Accepts an id parameter and returns the element that matches the id.
 *
 * @param  {[String]} id the id of the element to be returned
 * @return {[Element object]} the element that matches the id
 */
var $ = function(id) {
  return document.getElementById(id);
};


window.onpaint = initialize();