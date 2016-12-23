$(document).ready(function() {
let result;

$.get( "http://slack-server.elasticbeanstalk.com/messages", function(data) {

  result = data;
  console.log(result);
});


$('#button1').click(function() {
const messages = result[result.length - 1].message;
result.pop();
  $('#messages-box').append(`<div class="message">${messages}</div>`);
});

$('#post-button').click(function() {

  let inputText = $('#input').val();
  console.log(inputText);

  let messageObj = {
    message: inputText,
    date: Date.now()
  }
  $.post('/messages', messageObj);

  });

let getData = () => {
  $.get('/messages', function(newMessage) {
    let messages1 = newMessage;
    $("#our-database").html(JSON.stringify(newMessage[1].message));
  });
}

  setInterval(getData, 5000);
});
