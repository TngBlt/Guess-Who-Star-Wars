var socket = io();
var person = $('.person');

$(document).ready(function () {
   person.flip({
       front: '.person_front',
       back: '.person_back'
   },'toggle');
});
person.click(function (event) {
    var height = $(this).children('.person_front').height();
    var target = $('#'+event.target.id)
    target.flip();
    target.toggleClass('eliminated');

});

person.on('flip:done', function () {
  console.log('Flipped');
});
