let navButton = document.querySelector('.toggler');
let navList = document.querySelector('ul');

navButton.addEventListener('click', (e)=>{
    navList.classList.toggle('active');
})