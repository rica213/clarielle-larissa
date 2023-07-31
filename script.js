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
  popupMenu.style.display = 'none';
  body.classList.remove('noscroll');
};

menu.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
menuOption.addEventListener('click', closeMenu);

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
function downloadResume() {
  const link = document.createElement('a');
  link.href = "https://drive.google.com/uc?export=download&id=138xKvAXNeFHdG3M3P7d9Nu90YYp-uOHS";
  link.download = "Clarielle_Larissa_Resume.pdf";

  // Trigger the download by programmatically clicking the link
  link.dispatchEvent(new MouseEvent('click'));
}                               