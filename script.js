let candyCount = 0;

document.getElementById('clicker').addEventListener('click', () => {
  candyCount++;
  document.getElementById('candy-count').innerText = `Candies: ${candyCount}`;
});
