$(function(){
  var cosomn = "<iframe id='hohoooo' width='800' height='600' src='http://duckduckgo.com/'></iframe>"
  var $vodi = $('body')
  var metele = function(){
    $('#hohoooo').remove();
    $('body').append(cosomn);
  }
  metele();
  var amego = setInterval(metele, 60000);
})



