

//  Hero section 
const roles = [
    "Frontend Developer..."
];

let index = 0;
const roleText = document.getElementById("role-text");

function typeRole() {
    roleText.textContent = roles[index];

    // Restart animation
    roleText.style.animation = "none";
    void roleText.offsetWidth;  // trick to restart CSS animation
    roleText.style.animation = null;

    index = (index + 1) % roles.length;
}

typeRole(); // first run
setInterval(typeRole, 4000); // every 2.5 seconds

// 

// Download Button
    
  // Path/URL to your PDF file
  const pdfUrl = "assets/Resume/Kumaravel resume.pdf"; 
  const pdfFileName = "Kumaravel resume.pdf";    

  document.getElementById("downloadBtn").addEventListener("click", function () {
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = pdfFileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
  });


// 


// Skill Section

const skillRoot = document.getElementById("skill-section");


const skillsDiv = document.createElement("div");
skillsDiv.className = "skills";

const heading = document.createElement("h1");
heading.className = "text-center name";
heading.textContent = "Skills";

skillsDiv.appendChild(heading);


const toolsWrapper = document.createElement("div");
toolsWrapper.className = "tools m-1";


const row = document.createElement("div");
row.className = "tools-skill row row-cols-1 row-cols-md-2 g-4";

     // Skills data
const skillsData = [
  { title: "HTML 5", img: "/assets/images/skills/html.png", padding: "p-3" },
  { title: "CSS 3", img: "/assets/images/skills/css.png", padding: "p-4" },
  { title: "JS", img: "/assets/images/skills/javascript.webp", padding: "p-3 js-img" },
  { title: "Bootstrap", img: "/assets/images/skills/bootstrap.png", padding: "p-3" },
  { title: "React", img: "/assets/images/skills/react.png", padding: "" },
  { title: "SQL", img: "/assets/images/skills/sql.png", padding: "p-3" },
  { title: "MY SQL", img: "/assets/images/skills/mysql.png", padding: "p-3" }
];

skillsData.forEach(skill => {
    const col = document.createElement("div");
    col.className = "col col-6 col-sm-6 col-md-4 col-lg-3";

    const card = document.createElement("div");
    card.className = "card card-skill text-center";

    const img = document.createElement("img");
    img.src = skill.img;
    img.className = `card-img-top tool-img ${skill.padding}`;
    img.alt = skill.title;

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = skill.title;

    body.appendChild(title);
    card.appendChild(img);
    card.appendChild(body);
    col.appendChild(card);
    row.appendChild(col);
});

toolsWrapper.appendChild(row);
skillsDiv.appendChild(toolsWrapper);
skillRoot.appendChild(skillsDiv);


// 


// Project section
const projects = [
  {
    title: "E-Commerce",
    img: "/assets/images/projects/E-commerce img.avif",
    desc:
      "Fully responsive online store using React.js. Includes product listing, search, cart management and checkout features.",
    live: "https://react-e-commerce-1ewmtmf04-kumaravels-projects-6aad2830.vercel.app",
    github: "https://react-e-commerce-1ewmtmf04-kumaravels-projects-6aad2830.vercel.app"
  },
  {
    title: "Thumbnail Popup's",
    img: "/assets/images/projects/Thumbnail_img.png",
    desc:
      "Responsive gallery layout with hover effects and animations are popup in big screen when the user click the picture.",
    live: "https://kumaravel4123.github.io/thumbnails-using-html-and-css/",
    github: "https://kumaravel4123.github.io/thumbnails-using-html-and-css/"
  },
  {
    title: "Responsive Website",
    img: "/assets/images/projects/Responsive-web-design-devices.jpg",
    desc: "A clean and responsive multi-device website with simple flexbox and grid layout and the bootstrap is used for responsive.",
    live: "https://frontend-projects-ohpa2o3vs-kumaravels-projects-6aad2830.vercel.app",
    github: "https://frontend-projects-ohpa2o3vs-kumaravels-projects-6aad2830.vercel.app"
  },
  {
    title: "Instagram Clone",
    img: "/assets/images/projects/Instagram_img.png",
    desc: "A simple Instagram UI clone built with modern layouts with the React components like hooks, router and page navigation.",
    live: "http://react-instagram-clone-git-main-kumaravels-projects-6aad2830.vercel.app",
    github: "http://react-instagram-clone-git-main-kumaravels-projects-6aad2830.vercel.app"
  },
  {
    title: "Portfolio",
    img: "/assets/images/projects/Portfolio_img.png",
    desc: "A responsive personal portfolio website with the frontend tools like HTML5, CSS3, Bootstrap and Javascript",
    live: "http://react-instagram-clone-rcjy.vercel.app",
    github: "http://react-instagram-clone-rcjy.vercel.app"
  }
];

const container = document.getElementById("projects");

projects.forEach(project => {
  const col = document.createElement("div");
  col.className = "col col-12 col-sm-6 col-md-4 col-lg-3";

  col.innerHTML = `
    <div class="card">
      <img src="${project.img}" class="card-img-top" alt="${project.title}">
      <div class="card-body">
        <h3 class="card-title">${project.title}</h3>
       <p><small class="card-text">${project.desc}</small></p> 
        <a href="${project.live}" class="btn btn-primary">Live Link</a>
        <a href="${project.github}" class="btn btn-primary">GH Link</a>
      </div>
    </div>
  `;

  container.appendChild(col);
});


// 

// Send Message Button
const form = document.getElementById('reach');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop page reload

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
    .then(response => {
      if (response.ok) {
        alert("Message sent successfully!");
        form.reset(); // clear form
      } else {
        alert("Oops! Something went wrong.");
      }
    })
    .catch(error => alert("Error sending message: " + error));
});