$(document).ready(function(){
  $('.type-it').typeIt({
    strings: ['Портфолио веб-разработчика']
  });
  kissuiScrollAnim.add(document.getElementById('specialelement'), {
      'in': 'fadeIn',
      'middle': 'pulse',
      'autoReset': true,
      'triggerOnInit': false
  });
});
$(document).ready(function() {

    $('.progress .progress-bar').progressbar({
        transition_delay: 10
    });
    $('#myTabs li a').click(function(){

    });

    $('.progress-bar').each(function() {
      var bar_value = $(this).attr('aria-valuenow') + '%';
      $(this).animate({ width: bar_value }, { duration: 2000 });
    });

    // Shine text
    var scrollSpeed = 70;
    var current = 0;
    function bgscroll(){
        current -= 10;
        // move the background with backgrond-position css properties
        $('body').css("backgroundPosition", 1 ? current+"px 0" : "0 " + current+"px");
    }
    setInterval(bgscroll, scrollSpeed);
});
