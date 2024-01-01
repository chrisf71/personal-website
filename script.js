// Change background color on mouseover
const headers = document.querySelectorAll('h2, h3');
headers.forEach(header => {
  header.addEventListener('mouseover', () => {
    header.style.color = '#F39C12';
  });

  header.addEventListener('mouseout', () => {
    header.style.color = '';
  });
});