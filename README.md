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

* **Matthew Bajorek** - [Matthew Bajorek](https://github.com/mattbajorek)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Free code camp for the styling idea