$(document).ready(function() {
  $('body').keyup(function(event) {
    if ((event.target == event.currentTarget) && (event.which == 191)) {
      $('a[data-target=#search-menu]').click();
    }
  });
  $('a[data-target]').click(function() {
    target = $(this).data("target");
    if ($(target).is(':visible')) {
      $(this).removeClass('expanded');
      $(target).animate({'margin-left': '-6in'},{ 'duration': 400, 'complete': function(){ $(target).hide()}});
    } else {
      $(this).addClass('expanded');
      $(target).show().animate({'margin-left': '0in'},400);
      if ($(this).data("focus")) {
	$($(this).data("focus")).val('').focus();
      }
    }
  });
});
