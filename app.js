var name = $('input[name=playerName]').name();
var position = $('input[name=playerPosition]').name();
var number = $('input[name=playerNumber]').name();
var imgUrl = "http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/"

var image = $('<img>').attr('href', imgUrl);

$('form').on('submit', function() {
    event.preventDefault();
    
    console.log(name, position, number);
    
    
})