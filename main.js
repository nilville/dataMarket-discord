const profileImg = document.getElementById('profileImg');
const expandedImg = document.getElementById('expandedImg');

profileImg.addEventListener('click', () => {
    expandedImg.style.display = 'flex';
});

expandedImg.addEventListener('click', () => {
    expandedImg.style.display = 'none';
});