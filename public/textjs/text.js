$(document).ready(function(){
  $("#get-data-form").submit(function(e){
    var content = tinymce.get("texteditor").getContent();
    $("#dataContainer").html(content);
     console.log(content);
return content ;
  });
});
