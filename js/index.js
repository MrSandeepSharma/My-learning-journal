import { projectsData } from "/js/data.js";

const postSectionInner = document.getElementById("post-section-inner");

document.addEventListener("click", handleClick);

function handleClick(e) {
  if (e.target.dataset.project) {
    saveProjectDetails(e.target.dataset.project);
  } else if (e.target.id === "view-more") {
    renderAllProjects();
  } else if (e.target.id === "view-less") {
    removeProjects();
  }
}

function saveProjectDetails(projectId) {
  const project = projectsData.filter((project) => project.id == projectId);
  localStorage.clear();
  localStorage.setItem("project", JSON.stringify(project));
  window.location.href = "./post-page.html";
}

function renderAllProjects() {
  const viewMoreBtn = document.getElementById("view-more");
  postSectionInner.innerHTML = renderProjects(projectsData.length);
  viewMoreBtn.id = "view-less";
  viewMoreBtn.innerText = "View Less";
}

function removeProjects() {
  const viewMoreBtn = document.getElementById("view-less");
  postSectionInner.innerHTML = renderProjects(6);
  viewMoreBtn.id = "view-more";
  viewMoreBtn.innerText = "View More";
}

// render projects
function renderProjects(lenght) {
  return projectsData
    .map((project) => {
      if (project.id <= lenght) {
        return `
    <article class="post-container">
      <img
        src="${project.image}"
        alt="${project.alt}"
      />
      <time class="time-text" datetime="${project.dateNum}">${project.date}</time>
      <h2>${project.title}</h2>
      <p class="desc">${project.desc}</p>
      <button class="primary-btn" data-project="${project.id}">View Details</button>
    </article>
    `;
      }
    })
    .join("");
}

postSectionInner.innerHTML += renderProjects(6);
