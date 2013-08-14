$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

  $('form').on('submit', function(event){
    event.preventDefault();
    var url = $(this).attr('action');

    $.post(url, function(rollObject){
      console.log(rollObject);
      $('#die').html(dieTemplate(rollObject));

      function dieTemplate(rollObject) {
        return "<img src='" + rollObject.roll.value +".png' title='" + rollObject.roll.value + "' alt='the roll'>"
      }
    }, "json");
  });

});
