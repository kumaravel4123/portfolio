
// Navbar

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});




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

// Say hello btn
document.getElementById("helloBtn").addEventListener("click", function () {
  alert("Hello! 👋 Thanks for visiting my portfolio.");
});

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

const card_details = [
  { img: 'html-5.png', title: 'HTML' },
  { img: 'css-3.png', title: 'CSS' },
  { img: 'bs.png', title: 'Bootstrap' },
  { img: 'js.jpg', title: 'JavaScript' },
  { img: 'react.png', title: 'React' },
  { img: 'sql.png', title: 'SQL' },
];

function renderCard(card) {
  return `
  <div class ="card skill-card">
  <img src ="assets/images/skills/${card.img}" alt="${card.title}">
  <h5>${card.title}</h5>
  </div>
  `;
}
function renderProducts(cards) {
  const cards_container = document.getElementById('cards');
  let result = '';
  for (let card of cards) {
    result += renderCard(card);
  }
  cards_container.innerHTML = result;
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(card_details);
});


// Project section
const projects = [
  {
    title: "E-Commerce",
    img: "assets/images/projects/E-commerce img.avif",
    desc:
      "Fully responsive online store using React.js. Includes product listing, search, cart management and checkout features.",
    live: "https://react-e-commerce-5sew.vercel.app/",
    github: "https://react-e-commerce-1ewmtmf04-kumaravels-projects-6aad2830.vercel.app"
  },
  {
    title: "Thumbnail Popup's",
    img: "assets/images/projects/Thumbnail_img.png",
    desc:
      "Responsive gallery layout with hover effects and animations are popup in big screen when the user click the picture.",
    live: "https://kumaravel4123.github.io/thumbnails-using-html-and-css/",
    github: "https://kumaravel4123.github.io/thumbnails-using-html-and-css/"
  },
  {
    title: "Responsive Website",
    img: "assets/images/projects/Responsive-web-design-devices.jpg",
    desc: "A clean and responsive multi-device website with simple flexbox and grid layout and the bootstrap is used for responsive.",
    live: "https://frontend-projects-ohpa2o3vs-kumaravels-projects-6aad2830.vercel.app",
    github: "https://frontend-projects-ohpa2o3vs-kumaravels-projects-6aad2830.vercel.app"
  },
  {
    title: "Instagram Clone",
    img: "assets/images/projects/Instagram_img.png",
    desc: "A simple Instagram UI clone built with modern layouts with the React components like hooks, router and page navigation.",
    live: "http://react-instagram-clone-git-main-kumaravels-projects-6aad2830.vercel.app",
    github: "http://react-instagram-clone-git-main-kumaravels-projects-6aad2830.vercel.app"
  },
  {
    title: "Portfolio",
    img: "assets/images/projects/Portfolio_img.png",
    desc: "A responsive personal portfolio website with the frontend tools like HTML5, CSS3, Bootstrap and Javascript",
    live: "https://portfolio-eight-azure-33.vercel.app/",
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
        <h4 class="card-title">${project.title}</h4>
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
const form = document.getElementById('mail');

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