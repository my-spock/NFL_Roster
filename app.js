var name = jQuery('input[name=playerName]').text();
var position = jQuery('input[name=playerPosition]').text();
var number = jQuery('input[name=playerNumber]').text();

$('form').on('submit', function() {
    event.preventDefault();
    
    console.log(name, position, number);
})