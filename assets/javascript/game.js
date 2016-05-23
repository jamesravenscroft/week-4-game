$(document).ready(function() {
	// Header sizing
	var fraction = 1/2;
	$('header').css('height', 618 * fraction + 'px');
	$('header').css('width', 1680 * fraction + 'px');
	// Pokemon
	var character = {
		pokemon: ['Pikachu','Squirtle','Bulbasaur','Charmander'],
		hp: [120,100,150,180],
		attack: [8,10,6,4]
	};
	// Loop for each pokemon
	for (var i=0; i<character.pokemon.length; i++) {
		// Create holder for each pokemon
		var pokemonHolder = $('<div>');
		pokemonHolder.addClass('characters-pokemon');
		pokemonHolder.attr('type',character.pokemon[i]);
		pokemonHolder.attr('hp',character.hp[i]);
		pokemonHolder.attr('attack',character.attack[i]);
		pokemonHolder.append('<img src="assets/images/' + character.pokemon[i] + '.png"/>');
		// Create level
		var level = $('<h6>');
		level.text('Lv30');
		pokemonHolder.append(level);
		// Create hp bar text
		var hp = $('<h6>');
		hp.text('HP');
		// Create color bar helper
		var colorHelper = $('<div>');
		colorHelper.addClass('hp-bar-color-helper');
		// Create hp bar
		var hpBar = $('<div>');
		hpBar.addClass('hp-bar');
		// Create color bar
		var color = $('<div>');
		color.addClass('hp-bar-color');
		// Append hp and color back to hp bar
		hpBar.append(colorHelper);
		hpBar.append(hp);
		hpBar.append(color);
		// Append hp bar to pokemon holder
		pokemonHolder.append(hpBar);
		// Create number hp
		var numberHP = $('<h6>');
		numberHP.text(character.hp[i] + ' / ' + character.hp[i]);
		pokemonHolder.append(numberHP);
		// Append holder to characters
		$('.characters').append(pokemonHolder);
	}
	// Show message
	var h1 = $('<h1>');
	h1.text('Choose Your Character');
	$('.characters').append(h1);

	// When character is clicked
	$('.position-characters').on('click', '.characters-pokemon', function() {
		// Remove 'choose your character'
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
		// Remove characters-pokemon class
		$('.characters').children().removeClass('characters-pokemon');
		// Add selected pokemon to selected
		var pokemon = $(this); 
		selected.append(pokemon);
		// Flip selected pokemon if bulbasaur or charmander
		if (pokemon.attr('type') == 'Bulbasaur' || pokemon.attr('type') == 'Charmander') {
			pokemon.children("img").addClass('flipped');
		}
		// Add others to unselected
		var otherPokemon = $(".characters").children();
		unselected.append(otherPokemon);
		// Remove original pokemon holder
		$('.position-characters .characters').remove();
		// Add proper sizing
		selected.children().addClass('selected-character-pokemon');
		unselected.children().addClass('unselected-character-pokemon');
		// Flip unselected pokemon if bulbasaur or charmander
		$('.unselected-character-pokemon').each(function() {
			var pokemon = $(this);
			if (pokemon.attr('type') == 'Pikachu' || pokemon.attr('type') == 'Squirtle') {
				pokemon.children("img").addClass('flipped');
			}
		});
		// Show 'your character'
		selected.append('<h1>Your Character</h1>');
		selected.last
		// Show 'choose your opponent'
		unselected.append('<h1>Choose Your Opponent</h1>');
	});

	// When unselected character is clicked
	$('.position-characters').on('click', '.unselected-character-pokemon', function() {
		// Remove 'your character'
		$('.selected-character h1').remove();
		// Show 'choose your opponent'
		$('.unselected-characters h1').remove();
		// Make positioning class for sideline characters
		var sidelines = $('<div>');
		sidelines.addClass('sidelines');
		// Make positioning class for battle field
		var battlefield = $('<div>');
		battlefield.addClass('battlefield');
		// Add divs to position characters
		$('.position-characters').append(sidelines);
		$('.position-characters').append(battlefield);
		// Remove selected and unselected character classes
		$('.selected-character').children().removeClass('selected-character-pokemon');
		$('.unselected-characters').children().removeClass('unselected-character-pokemon');
		// Add selected character and selected enemy to battlefield
		var pokemon = $(".selected-character").children();
		var enemy = $(this);
		battlefield.append(pokemon);
		battlefield.append(enemy);
		// Add others characters to sidelines
		var otherPokemon = $(".unselected-characters").children();
		sidelines.append(otherPokemon);
		// Remove original selected and unselected character holders
		$('.position-characters .selected-character').remove();
		$('.position-characters .unselected-characters').remove();
		// Add proper sizing
		battlefield.children().addClass('battle-pokemon');
		sidelines.children().addClass('sideline-pokemon');
		// Show 'click on enemy to attack'
		var h1 = $('<h1>');
		h1.text('Click On Enemy To Attack');
		battlefield.append(h1);
	});
	// When enemy is clicked
	var count = 0;
	var character;
	var enemy;
	var characterAttack;
	var enemyAttack;
	var characterHPTotal;
	var characterHP;
	var enemyHPTotal;
	var enemyHP;
	var characterHPText;
	var enemyHPText;
	$('.position-characters').on('click', '.battle-pokemon:eq(1)', function() {
		// Remove 'click on enemy to attack'
		$('.battlefield h1').remove();
		// Initialize variables
		if (count == 0) {
			character = $('.battle-pokemon:eq(0)').attr('type');
			enemy = $('.battle-pokemon:eq(1)').attr('type');
			characterAttack = $('.battle-pokemon:eq(0)').attr('attack');
			enemyAttack = $('.battle-pokemon:eq(1)').attr('attack');
			characterHPTotal = $('.battle-pokemon:eq(0)').attr('hp');
			characterHP = characterHPTotal;
			enemyHPTotal = $('.battle-pokemon:eq(1)').attr('hp');
			enemyHP = enemyHPTotal;
			characterHPText = $('.battle-pokemon:eq(0)').children('h6:eq(1)');
			enemyHPText = $('.battle-pokemon:eq(1)').children('h6:eq(1)');
		}
		// Calculate damage
		characterHP -= enemyAttack;
		enemyHP -= characterAttack;
		// See if either reaches to 0
		if (characterHP <= 0) {
			characterHP = 0;
			// Show fainted pokemon
			$('.battle-pokemon:eq(0)').children('img').attr('src','assets/images/fainted' + character + '.png');
			// Rotate fainted pokemon
			if (character == 'Bulbasaur' || character == 'Charmander') {
				$('.battle-pokemon:eq(0)').children("img").addClass('rotated-flipped-character');
			} else {
				$('.battle-pokemon:eq(0)').children("img").addClass('rotated');
			}
			// Show 'player has been defeated'
			var h1 = $('<h1>');
			h1.text('Player Has Been Defeated!');
			$('.battlefield').append(h1);
		}
		if (enemyHP <= 0) {
			enemyHP = 0;
			// Show fainted pokemon
			$('.battle-pokemon:eq(1)').children('img').attr('src','assets/images/fainted' + enemy + '.png');
			// Rotate fainted pokemon
			if (enemy == 'Pikachu' || enemy == 'Squirtle') {
				$('.battle-pokemon:eq(1)').children("img").addClass('rotated-flipped-enemy');
			} else {
				$('.battle-pokemon:eq(1)').children("img").addClass('rotated');
			}
			// Show 'enemy has been defeated'
			var h1 = $('<h1>');
			h1.text(enemy + ' Has Been Defeated!');
			$('.battlefield').append(h1);
		}
		// Update text
		characterHPText.text(characterHP + ' / ' + characterHPTotal);
		enemyHPText.text(enemyHP + ' / ' + enemyHPTotal)
		count++;
	});
});