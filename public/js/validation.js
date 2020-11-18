//jshint esversion:6
function getValue(){
const deleteButton = document.getElementById('delete-btn');
const validation = document.getElementById('validationInp').value;
const titleForDeletion = document.getElementById("requestedTitleForDelete").innerText;
if (validation === titleForDeletion) {
  deleteButton.className = "btn btn-danger";
} else {
  deleteButton.className = "btn btn-danger btn-disable";
}
}

$(document).ready(function(){
    myVar = setInterval("getValue()", 100);
});
