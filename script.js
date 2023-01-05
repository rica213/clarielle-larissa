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

const projectDetails= [
  {
    id: '1',
    name: 'project name one',
    description: 'project description one',
    featuredImage: 'img/mobile/one.png',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: 'link/to/live',
    source: 'link/to/source',
  },
  {
    id: '2',
    name: 'project name two',
    description: 'project description two',
    featuredImage: 'path/to/featured/image',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: 'link/to/live',
    source: 'link/to/source',
  },
  {
    id: '3',
    name: 'project name three',
    description: 'project description three',
    featuredImage: 'path/to/featured/image',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: 'link/to/live',
    source: 'link/to/source',
  },
  {
    id: '4',
    name: 'project name four',
    description: 'project description four',
    featuredImage: 'path/to/featured/image',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: '#',
    source: '#',
  },
  {
    id: '5',
    name: 'project name five',
    description: 'project description five',
    featuredImage: 'path/to/featured/image',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: '#',
    source: '#',
  },
  {
    id: '6',
    name: 'project name six',
    description: 'project description six',
    featuredImage: 'path/to/featured/image',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: '#',
    source: '#',
  },
];

const seeProjectArr = document.querySelectorAll('.project__visit-btn');
const projectWindow = document.querySelector('aside');
const closeProjectBtn = document.querySelector('.close-project');
const projectName = document.querySelector('.project-details__name');
const featuredImage = document.querySelector('.project-details__featured-img');
const description = document.querySelector('.project-details__description');
const live = document.querySelector('.project-details__link_live');
const source = document.querySelector('.project-details__link_source');

const openProject = () => {
  projectWindow.classList.remove('hidden');
  projectWindow.style.animation= 'fadein 1s';
};

const closeProject = () => {
  projectWindow.classList.add('hidden');
};

/* seeProject.addEventListener('click', openProject); */
closeProjectBtn.addEventListener('click', closeProject);

seeProjectArr.forEach((seeProject) =>
{
  seeProject.addEventListener('click', () => {
    openProject();

    //update the project details
    projectDetails.forEach((project) => {
      if(project['id'] === seeProject.id) {
        projectName.innerText = project.name;
      }
    })
  })
}
);
























/* const projectDetailsWindow = document.querySelector('aside');
const projectName = document.querySelector('.project-details__name');
const technologies = document.querySelector('.project-details__technologies');

const closeProjectBtn = document.querySelector('.close-project');

const firstProject = document.querySelector('.project__item_one .project__visit-btn');
const secondProject = document.querySelector('.project__item_two .project__visit-btn');
const thirdProject = document.querySelector('.project__item_three .project__visit-btn');
const fourthProject = document.querySelector('.project__item_four .project__visit-btn');
const fifthProject = document.querySelector('.project__item_five .project__visit-btn');
const sixthProject = document.querySelector('.project__item_six .project__visit-btn');

const openProject = () => {
  projectDetailsWindow.style.display = 'block';
  projectName.innerText = projectDetails[0].name;
};

const closeProject = () => {
  projectDetailsWindow.style.display = 'none';
};

firstProject.addEventListener('click', openProject());
secondProject.addEventListener('click', openProject(1));
thirdProject.addEventListener('click', openProject(2));
fourthProject.addEventListener('click', openProject(3));
fifthProject.addEventListener('click', openProject(4));
sixthProject.addEventListener('click', openProject(5));

closeProjectBtn.addEventListener('click', closeProject);
 */