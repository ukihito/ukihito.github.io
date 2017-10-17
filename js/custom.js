$(document).ready(function(){
  $('.type-it').typeIt({
    strings: ['Портфолио веб-разработчика']
  });
  kissuiScrollAnim.add(document.getElementById('specialelement'), {
      'in': 'fadeIn',
      'middle': 'pulse'
  });
});
$(document).ready(function() {
    $('.progress .progress-bar').progressbar({
        transition_delay: 10
    });
});
