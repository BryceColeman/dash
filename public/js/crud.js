var submitModal = document.getElementById('submitModal');
submitModal.addEventListener("click", function() {

  var formElements = document.getElementsByClassName('templateFormField');
  console.log(formToJSON(formElements));
  $.post('/createTemplate', formToJSON(formElements));

});

function formToJSON(formElements) {
  var data = {};
  for (var i = 0; i < formElements.length; i++) {
    var item = formElements[i];
    if (formElements[i].type == 'checkbox') {
      data[item.name] = item.checked;
    } else {
      data[item.name] = item.value;
    }
  }
  return data;
}