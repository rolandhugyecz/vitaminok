$(document).ready(function(){
    // Collapse All
    $('#collapseAll').click(function(){
      $('.collapse').collapse('hide');
    });

    // Open All
    $('#openAll').click(function(){
      $('.collapse').collapse('show');
    });
  });