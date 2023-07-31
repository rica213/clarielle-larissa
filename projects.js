// query variables from index.html
const projectContainer = document.querySelector('.project-container');
const projectWindow = document.querySelector('.project-popup');
const closeProjectBtn = document.querySelector('.close-project');
const previous = document.querySelector(
  '.project_details__navigation_link-previous',
);
const next = document.querySelector('.project_details__navigation_link-next');
const projectName = document.querySelector('.project-details__name');
const technologies = document.querySelector('.project-details__technologies');
const featuredImage = document.querySelector('.project-details__featured-img');
const description = document.querySelector('.project-details__description');
const live = document.querySelector('.project-details__link_live');
const source = document.querySelector('.project-details__link_source');

// declaring projects data
const projectDetails = [
  {
    id: '1',
    name: 'VR-WORLD',
    description:
      'VR-WORLD is a cutting-edge platform that connects you with a curated selection of virtual reality studios and experiences. Our mission is to provide a seamless booking process for thrilling VR sessions, putting the power of choice in your hands.',
    featuredImage: 'assets/images/vr-world-landing.png',
    technologies: [
      'Ruby on Rails',
      'React',
      'Redux-Toolkit',
      'PostgreSQL',
      'JWT',
    ],
    live: 'https://vr-world23.netlify.app/',
    source: 'https://github.com/rica213/vr-world-front-end',
  },
  {
    id: '2',
    name: 'Save Sense',
    description:
      'Save Sense is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    featuredImage: 'assets/images/save-sense-dark.png',
    technologies: ['ruby on rails', 'postgresql', 'javascript', 'html/css'],
    live: 'https://save-sense.onrender.com/',
    source: 'https://github.com/rica213/Save-sense',
  },
  {
    id: '3',
    name: 'investIQ',
    description:
      'This is a mobile web application that renders on its homepage the list of US companies with market capitalizations greater than $10 billion. And you can search any company by its name or symbol. The configuration is offered in the modal feature. Each company can be clicked and we can see its profile, for example, its price, CEO, industry, etc.',
    featuredImage: 'assets/images/investIQ.png',
    technologies: ['React', 'Redux-Toolkit', 'API', 'Vite'],
    live: 'dev--lively-cobbler-cbe7de.netlify.app/',
    source: 'https://github.com/rica213/investIQ',
  },
  {
    id: '4',
    name: 'Wrestling Leaderboard',
    description:
      'This is a JavaScript-based leaderboard web app that displays scores and rankings for a game/activity. It is designed to be simple and easy to use, with a clean and intuitive user interface.',
    featuredImage: 'assets/images/wrestling.png',
    technologies: ['javascript', 'html/css', 'API', 'Webpack'],
    live: 'rica213.github.io/Leaderboard/dist/',
    source: 'https://github.com/rica213/Leaderboard',
  },
  {
    id: '5',
    name: 'Countries API',
    description:
      'This responsive and user-friendly web application uses the rest countries API for its data. User can browse all existing countries, search by name, and filter by region. The web application has light and dark theme ',
    featuredImage: 'assets/images/countries-light.png',
    technologies: ['javascript', 'html/css', 'API', 'Webpack'],
    live: 'https://rica213.github.io/REST-Countries-API/',
    source: 'https://github.com/rica213/REST-Countries-API',
  },
  {
    id: '6',
    name: 'Unicorn Con 2023',
    description:
      ' This is a website for the unicorn con 2023. The style guide was proposed by Cindy Shin in Behance ',
    featuredImage: 'assets/images/anime-conference.png',
    technologies: ['html5', 'bootstrap5'],
    live: 'https://rica213.github.io/anime-conference/',
    source: 'https://github.com/rica213/anime-conference',
  },
];

// functions

// capitalize name
const capitalize = (name) => name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

// create the project item dynamically
const createProject = (project) => {
  const projectItem = document.createElement('article');
  projectItem.classList.add('project__item', `project__item_${project.id}`);

  // create the technologies dynamically
  const techList = document.createElement('ul');
  techList.classList.add('project__technologies');
  project.technologies.forEach((tech) => {
    const techItem = document.createElement('li');
    techItem.innerText = tech;
    techList.appendChild(techItem);
  });

  // add preview image to project item
  const previewImage = document.createElement('div');
  previewImage.classList.add('project__preview');
  previewImage.style.backgroundImage = `url('${project.featuredImage}')`;

  // populate project item
  projectItem.innerHTML = `
    ${previewImage.outerHTML}
    <div class="project__description">
      <h3 class="project__name">${capitalize(project.name)}</h3>
      ${techList.outerHTML}
      <a href="#" class="project__visit-btn" id="${project.id}">
        See this project →
      </a>
        
    </div>`;

  return projectItem;
};

// populate the project container
projectDetails.forEach((project) => {
  projectContainer.appendChild(createProject(project));
});

const openProject = () => {
  projectWindow.classList.remove('hidden');
  projectContainer.style.filter = 'blur(10px)';
  projectWindow.style.animation = 'fadein 1s';
};

const closeProject = () => {
  projectWindow.classList.add('hidden');
  projectContainer.style.filter = 'blur(0px)';
};

const navigateProject = (id) => {
  if (id >= 0 && id < projectDetails.length) {
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
  }
};

closeProjectBtn.addEventListener('click', closeProject);

// open project details
projectContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('project__visit-btn')) {
    openProject();

    projectDetails.forEach((project) => {
      if (project.id === event.target.id) {
        projectName.innerText = capitalize(project.name);
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
    if (event.target.id === '1') previous.classList.add('disabled');
    else previous.classList.remove('disabled');

    // disable/enable next project button
    if (event.target.id === projectDetails.length.toString()) next.classList.add('disabled');
    else next.classList.remove('disabled');

    // navigate to previous project
    previous.addEventListener('click', () => {
      const previousProject = parseInt(event.target.id, 10) - 2;
      navigateProject(previousProject);
    });

    // navigate to next project
    next.addEventListener('click', () => {
      const nextProject = parseInt(event.target.id, 10);
      navigateProject(nextProject);
    });
  }
});
