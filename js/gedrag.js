$(function(){
  var cosomn = "<iframe id='hohoooo' width='800' height='600' frameborder='0' src='http://duckduckgo.com/'></iframe>";
  var $cante = $('#cante');
  var $happy = $('#happy');
  var $sad = $('#sad');
  var cante = -1;
  window.happy = 0;
  window.sad = -1;

  var metele = function(){
    $('#hohoooo').remove();
    $('body').append(cosomn);

    window.sad++;
    cante++;
    $('#moribus').append("<script src='http://mcdlr.com/sup-brah/lupites.js'></script>");

    $cante.text(cante);
    $happy.text(window.happy)
    $sad.text(window.sad)
  }

  metele();
  var amego = setInterval(metele, 60*1000);
})



