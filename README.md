# Tic-Tac-Toe
Odin Project Assignment: https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe

Play the game here:
https://melanie-j-baker.github.io/tic-tac-toe/

A Tic Tac Toe game to be played in the browser, created using HTML, CSS and JavaScript.

The main goal here was to have as little global code as possible, tucking as much as I could inside factories. If I only needed a single instance of something (e.g. the gameboard, the displayController etc.) then I wrapped the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances.

Checks for all winning 3-in-a-rows and ties. 

Players can put in their names, there is a button to start/restart the game and a display element that shows the results upon game end.

![image](https://github.com/Melanie-J-Baker/Tic-Tac-Toe/assets/104843873/be045e47-ccb1-4bab-ace1-8e8b96728390)
