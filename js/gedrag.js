$(function(){
  var cosomn = "<iframe id='hohoooo' width='800' height='600' frameborder='0' src='http://duckduckgo.com/'></iframe>";
  var $cante = $('h2 span');
  var cante = 0;

  var metele = function(){
    $('#hohoooo').remove();
    $('body').append(cosomn);

    cante++
    $cante.text(cante)
  }

  metele();
  var amego = setInterval(metele, 60000);
})



