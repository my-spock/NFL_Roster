var pokeService = {

    // getByAbility: function(ability, callback) {
    //     var apiUrl = "http://pokeapi.co/api/v2/ability/" + ability;
    //     var abilityArray = getData(apiUrl, callback);
    // },
    
    getByName: function(name, callback) {
        var apiUrl = "http://pokeapi.co/api/v2/pokemon/" + name;
        var nameArray = this.getData(apiUrl, callback);
    },
    
    // getByType: function(type, callback) {
    //     var apiUrl = "http://pokeapi.co/api/v2/type/" + type;
    //     var typeArray = getData(apiUrl, callback);
    // }, 
    
    getData: function(url, callback) {
        $.ajax({
            url: url,
            success: callback,
            error: function() {
                //Add error handling here.
            }
        })
    }
}