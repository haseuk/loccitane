$(document).on('click', '.layout-over', function(){
  var bg = $(this).next().css('background-image');
  bg = bg.replace(/^url\("https?:/,'').replace(/"\)$/,'');
  var input = document.createElement('input');
  document.body.appendChild(input);
  input.value = bg;
  input.select();
  document.execCommand('copy');
});

