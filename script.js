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
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi ex, expedita corrupti illo commodi minima incidunt fuga voluptas voluptatum! Magnam eveniet unde modi aliquam accusamus esse magni, adipisci nostrum?',
    featuredImage: 'img/mobile/one.png',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: '#',
    source: '#',
  },
  {
    id: '2',
    name: 'project name two',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi ex, expedita corrupti illo commodi minima incidunt fuga voluptas voluptatum! Magnam eveniet unde modi aliquam accusamus esse magni, adipisci nostrum?',
    featuredImage: 'img/mobile/two.png',
    technologies: ['html/css', 'javascript'],
    live: '#',
    source: '#',
  },
  {
    id: '3',
    name: 'project name three',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi ex, expedita corrupti illo commodi minima incidunt fuga voluptas voluptatum! Magnam eveniet unde modi aliquam accusamus esse magni, adipisci nostrum?',
    featuredImage: 'img/mobile/three.png',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: '#',
    source: '#',
  },
  {
    id: '4',
    name: 'project name four',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi ex, expedita corrupti illo commodi minima incidunt fuga voluptas voluptatum! Magnam eveniet unde modi aliquam accusamus esse magni, adipisci nostrum?',
    featuredImage: 'img/mobile/four.png',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: '#',
    source: '#',
  },
  {
    id: '5',
    name: 'project name five',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi ex, expedita corrupti illo commodi minima incidunt fuga voluptas voluptatum! Magnam eveniet unde modi aliquam accusamus esse magni, adipisci nostrum?  ',
    featuredImage: 'img/mobile/five.png',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: '#',
    source: '#',
  },
  {
    id: '6',
    name: 'project name six',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nisi ex, expedita corrupti illo commodi minima incidunt fuga voluptas voluptatum! Magnam eveniet unde modi aliquam accusamus esse magni, adipisci nostrum?',
    featuredImage: 'img/mobile/six.png',
    technologies: ['html/css', 'ruby on rails', 'javascript'],
    live: '#',
    source: '#',
  },
];

const seeProjectArr = document.querySelectorAll('.project__visit-btn');
const projectWindow = document.querySelector('aside');
const closeProjectBtn = document.querySelector('.close-project');
const previous = document.querySelector('.project_details__navigation_link-previous');
const next = document.querySelector('.project_details__navigation_link-next');
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

const navigateProject = (id) => {

  projectName.innerText = projectDetails[id].name;
  technologies.textContent = '';
  projectDetails[id].technologies.forEach((tech) => {
    const techList = document.createElement('li');
    techList.innerText = tech;
    technologies.appendChild(techList);
  });
  featuredImage.src = projectDetails[id].featuredImage;
  description.innerText = projectDetails[id].description;
  live.href = projectDetails[id].live;
  source.href = projectDetails[id].source;
};

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

    // disable/enable previous project button
    if (seeProject.id === '1') previous.classList.add('disabled');
    else previous.classList.remove('disabled');

    // disable/enable next project button
    if (seeProject.id === (projectDetails.length).toString()) next.classList.add('disabled');
    else next.classList.remove('disabled');

    previous.addEventListener('click', navigateProject((seeProject.id) - 2));
    next.addEventListener('click', navigateProject(seeProject.id));
  });
});

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

  userName.value = retrievedUser.name;
  email.value = retrievedUser.email;
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
