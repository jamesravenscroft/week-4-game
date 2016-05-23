$(document).ready(function() {
	// Header sizing
	var fraction = 1/2;
	$('header').css('height', 618 * fraction + 'px');
	$('header').css('width', 1680 * fraction + 'px');
	// Pokemon
	var pokemon = ['pikachu','squirtle','bulbasaur','charmander'];
	// Loop for each pokemon
	for (var i=0; i<pokemon.length; i++) {
		// Create holder for each pokemon
		var pokemonHolder = $('<div>');
		pokemonHolder.addClass('characters-pokemon');
		pokemonHolder.attr('type',pokemon[i]);
		pokemonHolder.append('<img src="assets/images/' + pokemon[i] + '.png"/>');
		// Create level
		var level = $('<h6>');
		level.text('Lv30');
		pokemonHolder.append(level);
		// Create hp bar text
		var hp = $('<h6>');
		hp.text('HP');
		// Create hp bar
		var hpBar = $('<div>');
		hpBar.addClass('hp-bar');
		// Create color bar
		var color = $('<div>');
		color.addClass('hp-bar-color');
		// Append hp and color back to hp bar
		hpBar.append(hp);
		hpBar.append(color);
		// Append hp bar to pokemon holder
		pokemonHolder.append(hpBar);
		// Append holder to characters
		$('.characters').append(pokemonHolder);
	}
	// Show message
	var h1 = $('<h1>');
	h1.text('Choose Your Character');
	$('.characters').append(h1);


	// When character is clicked
	$('.characters').one('click', '.characters-pokemon', function() {
		// Remove choose your character
		h1.remove();
		// Make positioning class for character selection
		var selected = $('<div>');
		selected.addClass('selected-character');
		// Make positioning class for other characters
		var unselected = $('<div>');
		unselected.addClass('unselected-characters');
		// Add divs to position characters
		$('.position-characters').append(selected);
		$('.position-characters').append(unselected);
		// Add selected pokemon to selected
		var pokemon = $(this); 
		selected.append(pokemon);
		// Add others to unselected
		var otherPokemon = $(".characters").children();
		unselected.append(otherPokemon);
		// Remove original pokemon holder
		$('.position-characters .characters').remove();
		// Add proper sizing
		selected.children().addClass('selected-character-pokemon');
		unselected.children().addClass('unselected-character-pokemon');
		// Show your character
		selected.append('<h1>Your Character</h1>');
		// Show your enemy
		unselected.append('<h1>Choose Your Opponent</h1>');
	});
});