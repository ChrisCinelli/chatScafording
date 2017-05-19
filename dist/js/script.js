$('.landing').hide();
$('#thechat').on('click', function(e){
  $('.landing').hide();
  $('.chat').show();
});

$('#thelanding').on('click', function(e){
  $('.landing').show();
  $('.chat').hide();
});

$('#thelanding').on('click', function(e){
  $('.landing').show();
  $('.chat').hide();
});

$('#theemail').on('click', function(e){
  $('.email-confirm').toggle();
});

$('.left-pane').addClass('active');
$('#back').on('click', function(e){
  $('.right-pane').removeClass('active');
  $('.left-pane').addClass('active');
})

$('li').on('click', function(e){
  $('.right-pane').addClass('active');
  $('.left-pane').removeClass('active');
})
