const gridContainer = document.querySelector('.grid-container');
const listContainer = document.querySelector('.list-container');
const gridToggle = document.querySelector('.toggle-view .grid');
const listToggle = document.querySelector('.toggle-view .list');

gridToggle.addEventListener('click', function() {
  gridContainer.style.display = 'grid';
  listContainer.style.display = 'none';
  gridToggle.classList.add('l-active');
  listToggle.classList.remove('l-active');
});

listToggle.addEventListener('click', function() {
  gridContainer.style.display = 'none';
  listContainer.style.display = 'flex';
  gridToggle.classList.remove('l-active');
  listToggle.classList.add('l-active');
});
