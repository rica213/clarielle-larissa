/* mobile menu */
// query variables
const body = document.querySelector('body');
const nav = document.querySelector('nav');
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

nav.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
menuOption.addEventListener('click', closeMenu);

/* Project details popup window */
// query variables

const projectDetails = [
  {
    name: 'project name one',
    description: 'project description one',
    featuredImage: 'img/mobile/one.png',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: 'link/to/live',
    source: 'link/to/source',
  },
  {
    name: 'project name two',
    description: 'project description two',
    featuredImage: 'path/to/featured/image',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: 'link/to/live',
    source: 'link/to/source',
  },
  {
    name: 'project name three',
    description: 'project description three',
    featuredImage: 'path/to/featured/image',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: 'link/to/live',
    source: 'link/to/source',
  },
  {
    name: 'project name four',
    description: 'project description four',
    featuredImage: 'path/to/featured/image',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: '#',
    source: '#',
  },
  {
    name: 'project name five',
    description: 'project description five',
    featuredImage: 'path/to/featured/image',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: '#',
    source: '#',
  },
  {
    name: 'project name six',
    description: 'project description six',
    featuredImage: 'path/to/featured/image',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: '#',
    source: '#',
  },
];

const projectDetailsWindow = document.querySelector('aside');
const projectName = document.querySelector('.project-details__name');

const firstProject = document.querySelector('.project__item_one .project__visit-btn');

const openProject = () => {
  projectDetailsWindow.style.display = 'block';
  projectName.innerText = projectDetails[0].name;
};

firstProject.addEventListener('click', openProject);