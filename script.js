// Change image border color on mouseover
function changeBorderColor() {
    const avatar = document.querySelector('.avatar');
    avatar.style.borderColor = '#F39C12';
  }
  
  function resetBorderColor() {
    const avatar = document.querySelector('.avatar');
    avatar.style.borderColor = '';
  }

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