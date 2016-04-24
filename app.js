$('form').on('submit', function(event) {
    event.preventDefault();
    
    var name = $('input[name=pokemonName]').val();
// var type = $('input[name=pokemonType]').val();
// var ability = $('input[name=pokemonAbility]').val();

    selectGetter(name);  
})

function selectGetter(name, type, ability) {
    if (name !== "") {
        pokeService.getByName(name.toLowerCase(), handleResponse);
    // } else if (type !== "") {
    //     pokeService.getByType(type, handleResponse);
    // } else if (ability !== "") {
    //     pokeService.getByAbility(ability, handleResponse);
    } else {
        $('#button').after("<span class='error'>Sorry, that's not a valid pokemon.<span>");
        $('#button').removeClass('btn-primary').addClass('btn-warning');
    }
}

function handleResponse(array) {
    $('.error').remove();
    $('#button').removeClass('btn-warning').addClass('btn-primary');
    
    var source = $('#card-template').html();
    var template = Handlebars.compile(source);
    var typeArray = [];
    
    $.each(array.types, function(index, item) {
        typeArray.push(item.type.name);
    });

    var card = {
        imgUrl: array.sprites["front_default"],
        name: array.name.toUpperCase(),
        types: typeArray.join(', '),
    };
    
    console.log(card);
    
    var html = template(card);
    console.log(html);
    $('#roster-display').append(html);
};
