// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('turbolinks:load', function(){
    console.log("document is ready", new Date());
  $('#task_name').focus();

  $('#save').click(function(event){
      //  event.preventDefault();
      //  console.log("It was click!");
       $('.actions input').click();
  });
});
