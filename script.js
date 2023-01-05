/* mobile menu */
// query variables
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const popupMenu = document.querySelector('.popup-menu');
const closeBtn = document.querySelector('.close-btn');
const menuOption = document.querySelector('.popup-menu ul');

const openMenu = () => {
  popupMenu.classList.remove('hidden');
  body.classList.add('noscroll');
  popupMenu.style.animation = 'fadein 2s';
};

const closeMenu = () => {
  popupMenu.classList.add('hidden');
  body.classList.remove('noscroll');
};

nav.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
menuOption.addEventListener('click', closeMenu);

/* Project details popup window */
// query variables

const projectDetails = [
  {
    id: '1',
    name: 'project name one',
    description: 'description for the project one',
    featuredImage: 'img/mobile/one.png',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: '#',
    source: '#',
  },
  {
    id: '2',
    name: 'project name two',
    description: 'description for the project two',
    featuredImage: 'img/mobile/two.png',
    technologies: ['html/css', 'javascript'],
    live: '#',
    source: '#',
  },
  {
    id: '3',
    name: 'project name three',
    description: 'description for the project three',
    featuredImage: 'img/mobile/three.png',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: '#',
    source: '#',
  },
  {
    id: '4',
    name: 'project name four',
    description: 'description for the project four',
    featuredImage: 'img/mobile/four.png',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: '#',
    source: '#',
  },
  {
    id: '5',
    name: 'project name five',
    description: 'description for the project five',
    featuredImage: 'img/mobile/five.png',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: '#',
    source: '#',
  },
  {
    id: '6',
    name: 'project name six',
    description: 'description for the project six',
    featuredImage: 'img/mobile/six.png',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: '#',
    source: '#',
  },
];

const seeProjectArr = document.querySelectorAll('.project__visit-btn');
const projectWindow = document.querySelector('aside');
const closeProjectBtn = document.querySelector('.close-project');
const projectName = document.querySelector('.project-details__name');
const technologies = document.querySelector('.project-details__technologies');
const featuredImage = document.querySelector('.project-details__featured-img');
const description = document.querySelector('.project-details__description');
const live = document.querySelector('.project-details__link_live');
const source = document.querySelector('.project-details__link_source');

const openProject = () => {
  projectWindow.classList.remove('hidden');
  projectWindow.style.animation = 'fadein 1s';
};

const closeProject = () => {
  projectWindow.classList.add('hidden');
};

/* seeProject.addEventListener('click', openProject); */
closeProjectBtn.addEventListener('click', closeProject);

seeProjectArr.forEach((seeProject) => {
  seeProject.addEventListener('click', () => {
    openProject();

    // update the project details
    projectDetails.forEach((project) => {
      if (project.id === seeProject.id) {
        projectName.innerText = project.name;
        technologies.textContent = '';
        project.technologies.forEach((tech) => {
          const techList = document.createElement('li');
          techList.innerText = tech;
          technologies.appendChild(techList);
        });
        featuredImage.src = project.featuredImage;
        description.innerText = project.description;
        live.href = project.live;
        source.href = project.source;
      }
    });
  });
});
