console.log('js sourced');

//object to be sent to the server with input1(first number input) and
//input2(second number input), and type of math operation to be completed.
var objectToSend = {
  input1: '',
  input2: '',
  type: ''
};

$(document).ready(function(){
  console.log('jq sourced');

// creating number inputs for object
  $('.numberButton').on('click', function() {
    console.log($(this).text());
    objectToSend.input1 = $(this).text();
    updateDisplay();
  }); //end of number on click

//clicking on a mathOperator button will set the type in the objectToSend
  $('.mathOperator').on('click', function() {
    console.log($(this).text());
    objectToSend.type = $(this).text();
    displayOperator();
    console.log(displayOperator());
//setting input2 to first value and then clearing input1 so that it can take another value
    objectToSend.input2 = objectToSend.input1;
    objectToSend.input1 = '';
  }); //end of mathOperator

// hitting the "calculate" button sends the object to the server.
  $('.calculateButton').on('click', function() {
    console.log('objectToSend: ', objectToSend);
    //if input1 and input2 are not empty, send object to server
    if (objectToSend.input1 !== '' && objectToSend.input2 !== '') {
      $.ajax({
        type: 'POST',
        url: '/calculation',
        data: objectToSend,
        success: function(response) {
          console.log('input sent to server to be calcuated');
          //display calculation response in the display input
          $('#display').val(response.calculation);
        } //end of success function
      }); //end of ajax POST
    } //end of if statement
  }); //end of calculate button




});//end of document ready

//number input is displayed on screen
function updateDisplay() {
  $('#display').val(objectToSend.input1);
}

//mathOperator is displayed on the screen
function displayOperator() {
  $('#display').val(objectToSend.type);
}
