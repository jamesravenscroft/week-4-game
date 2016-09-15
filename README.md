# Pokemon RPG
Week 4 homework for Rutgers Coding Bootcamp.

LIVE PREVIEW --> https://pokemon-rpg.herokuapp.com/

## Screenshots

Main | Selection
-------------|--------
![Main Image](/readme_images/main.png?raw=true"main.png") | ![Selection Image](/readme_images/selection.png?raw=true"selection.png")

Battle | Next Opponent
-------------|--------
![Battle Image](/readme_images/battle.png?raw=true"battle.png") | ![Next Opponent Image](/readme_images/nextopponent.png?raw=true"nextopponent.png")

Win | Lose
-------------|--------
![Win Image](/readme_images/win.png?raw=true"win.png") | ![Lose Image](/readme_images/lose.png?raw=true"lose.png")

## Objective
* This is a combat based RPG Game, the player will fight with a character of their choice against the computer.
* At the start of the game the player will choose a character by clicking on the character's picture. The player will play as that character for the rest of the game.
* Every character that was not picked is now an enemy that the player must defeat. Enemies should be moved to a different area of the screen.
* The player chooses which enemy they will attack by clicking on that enemy's picture.
* Once the player picks an enemy to fight, that enemy is moved to a "defender area" to do battle with the player.
* The player will now be able to hit the attack button to fight against that defender.
* Whenever the attack button is hit, the player character is going to attack the defender character once. The defender character will now counter attack the player character once.
* When the player character "attacks", the defender will lose "Health Points" displayed at the bottom of the defender's picture.
* When the defender "counter attacks", the player character will lose hp displayed at the bottom of the player character's picture.
* Keep hitting the attack to try and defeat the defender
* When the defender's "Health Points" are reduced to 0 or below, they are removed from the "defender area". The player character can now pick a new enemy to attack.
* The player wins the game by defeating all enemy characters, and loses the game the game if the player character's "Health Points" are 0 or below.

## Game Design
* Each character in the game has 3 attributes: `Health Points`, `Attack Power`, and `Counter Attack Power`.
* Each time the player attacks, their character's Attack Power increases by its base Attack Power. So if the base Attack Power is 6, each attack will increase the Attack Power by 6. (12, 18, 24, 30 etc...)
* The enemy character only has `Counter Attack Power` and their `Counter Attack Power` never changes.
* The `Health Points`, `Attack Power`, and `Counter Attack Power` of each character will be different.
* None of the characters in the game can heal or recover Health Points, so the point of the game is to pick a character and fight an enemy that has low `Counter Attack Power` first and build up your own `Attack Power` before you lose all your `Health Points`.
* Depending on game play, you can win or lose with any of the characters in the game.

## Technologies used
- HTML
- CSS (media queries)
- JavaScript/jQuery

## How to Play

1. Click on your character
2. Click on opponent character
3. Click on opponent character to attack
4. If opponent defeat, click on next opponent character

## Built With

* Sublime Text
* Gimp

## Deployed With

* Heroku (PHP)

## Walk throughs of code

Most interesting JavaScript code
```
// Show 'has been defeated'
$('.battlefield').append(h2);
// Show fainted pokemon
$('.battle-pokemon:eq(' + num + ')').children('img').attr('src','assets/images/fainted' + show + '.png');
// Rotate fainted pokemon
if (show == objPokemon.pokemon[first] || show == objPokemon.pokemon[second]) {
    $('.battle-pokemon:eq(' + num + ')').children("img").addClass('rotated-flipped-' + person);
} else {
    $('.battle-pokemon:eq(' + num + ')').children("img").addClass('rotated-' + person);
}
```
Most interesting CSS code
```
.rotated-character {
    transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -khtml-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
}

.rotated-enemy {
    transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -khtml-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
}

.rotated-flipped-character {
    transform: scale(-1, 1) rotate(90deg);
    -moz-transform: scale(-1, 1) rotate(90deg);
    -webkit-transform: scale(-1, 1) rotate(90deg);
    -o-transform: scale(-1, 1) rotate(90deg);
    -khtml-transform: scale(-1, 1) rotate(90deg);
    -ms-transform: scale(-1, 1) rotate(90deg);
}

.rotated-flipped-enemy {
    transform: scale(-1, 1) rotate(-90deg);
    -moz-transform: scale(-1, 1) rotate(-90deg);
    -webkit-transform: scale(-1, 1) rotate(-90deg);
    -o-transform: scale(-1, 1) rotate(-90deg);
    -khtml-transform: scale(-1, 1) rotate(-90deg);
    -ms-transform: scale(-1, 1) rotate(-90deg);
}

/* Character animation */

@keyframes attackRight {
  0%   {left: 0px}
  25%  {left: 8vw}
  75%  {left: 2vw}
  100% {left: 4vw}
}

.animation-character {
  animation-name: attackRight;
  animation-duration: 0.5s; 
  animation-timing-function: ease-out; 
  animation-delay: 0s;
  animation-direction: normal; 
}

/* Enemy animation */

@keyframes attackLeft {
  0%   {right: 0px}
  25%  {right: 8vw}
  75%  {right: 2vw}
  100% {right: 4vw}
}

.animation-enemy {
  animation-name: attackLeft;
  animation-duration: 0.5s; 
  animation-timing-function: ease-out; 
  animation-delay: 0s;
  animation-direction: normal; 
}
```

## Author

* [Matthew Bajorek](https://www.linkedin.com/in/matthewbajorek)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Free code camp for the styling idea