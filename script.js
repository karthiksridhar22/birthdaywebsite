const game = new Puzzle({
  tileSize: 100, // width and height of the tile
  columns: 3,
  rows: 3,
  difficulty: 2,
  scale: 0.996, // Determines the scale of the tiles. As scale value less than 1 reveals gridlines
  image: {
      url: 'media/Burj_Khalifa.jpg', // Replace with the path to your image
      preserve: 'width', //['width', 'height'] the width or height will be preserved
      offset: 0,
  },
});

// Render the game inside the 'game' div
game.render('game');

// Start the game
game.start();

// Add event listener for when the puzzle is solved
game.onSolve(function(event) {
  const message = `You solved the puzzle in ${event.time}s! Great job!`;
  document.getElementById('message').innerText = message;
});

// Optionally, update the timer
game.onTimeUpdate(function(event) {
  const time = event.time;
  // You can update a timer display if you wish
});
