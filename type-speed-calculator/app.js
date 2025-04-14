// Select the balloon and town elements
const balloon = document.getElementById('balloon');
const town = document.getElementById('town');

// Event listener for mouse movement
document.addEventListener('mousemove', function (e) {
  // Update balloon position to track the cursor
  balloon.style.left = e.pageX + 'px';
  balloon.style.top = e.pageY + 'px';

  // Change background based on cursor position
  // Example: switch to night if the cursor moves to the right half of the screen
  if (e.pageX > window.innerWidth / 2) {
    town.classList.add('night');
  } else {
    town.classList.remove('night');
  }
});
