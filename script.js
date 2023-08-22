/* mobile menu */
// query variables
const body = document.querySelector('body');
const menu = document.querySelector('menu');
const popupMenu = document.querySelector('.popup-menu');
const closeBtn = document.querySelector('.close-btn');
const menuOption = document.querySelector('.popup-menu ul');

const openMenu = () => {
  popupMenu.style.display = 'block';
  body.classList.add('noscroll');
  popupMenu.style.animation = 'fadein 2s';
};

const closeMenu = () => {
  if (window.innerWidth < 768) {
    popupMenu.style.display = 'none';
    body.classList.remove('noscroll');
  } else {
    popupMenu.style.display = 'block';
  }
};

const updateOptionsInDesktop = () => {
  if (window.innerWidth >= 768) {
    popupMenu.style.display = 'block';
  } else {
    popupMenu.style.display = 'none';
  }
};

menu.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
menuOption.addEventListener('click', closeMenu);
window.addEventListener('resize', updateOptionsInDesktop);

// email validation local storage
const form = document.querySelector('form');
const email = document.querySelector('#email');
const error = document.querySelector('.error');

const isValidEmail = (email) => !/([A-Z])/g.test(email);

const savedUser = {};

const userName = document.querySelector('#name');

const save = () => {
  savedUser.name = userName.value;
  savedUser.email = email.value;

  localStorage.setItem('savedUser', JSON.stringify(savedUser));
};

const retrieve = () => {
  const retrievedUser = JSON.parse(localStorage.getItem('savedUser'));

  userName.value = retrievedUser.name || '';
  email.value = retrievedUser.email || '';
};

form.addEventListener('submit', (event) => {
  if (!isValidEmail(email.value)) {
    event.preventDefault();
    error.innerText = 'The email should be lowercased';
  } else {
    error.innerText = '';
    form.submit();
    save();
  }
});

window.addEventListener('load', () => {
  retrieve();
});

// Download Resume //
/* eslint-disable-next-line no-unused-vars */
const downloadResume = () => {
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/file/d/1ZS7KjpPrKSHCCBo0eW_6pf0027Tbnb3A/view?usp=sharing';
  link.download = 'Clarielle_Larissa_Resume.pdf';

  // Trigger the download by programmatically clicking the link
  link.dispatchEvent(new MouseEvent('click'));
};
