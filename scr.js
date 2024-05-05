const scrollContainer = document.getElementById("scrollContainer");
const body = document.getElementById("body");
const booker = document.getElementById("booker")
const weather = document.getElementById("weather")
const projects = document.getElementById("projects")
const linkedin = document.getElementById("linkedin")
const github = document.getElementById("github")
const twitter = document.getElementById("twitter")
const resume = document.getElementById("download-resume")

// Function to scroll the container
function autoScroll() {
  if (scrollContainer.scrollTop < scrollContainer.scrollHeight - scrollContainer.clientHeight) {
    scrollContainer.scrollTop += 1; // Adjust the scrolling speed as needed
  } else {
    scrollContainer.scrollTop = 0; // Reset to the top once reached the bottom
  }
  // auto scroll for projects
}
function autoScrollx() {
  if (scrollContainer.scrollLeft < scrollContainer.scrollWidth - scrollContainer.clientWidth - 5) {
    scrollContainer.scrollLeft += 1; // Adjust the scrolling speed as needed
  } else {
    scrollContainer.scrollLeft = 0; // Reset to the top once reached the bottom
  }
}

class Scroll {
  interval = window.innerWidth > 768 ? setInterval(autoScroll, 50) : setInterval(autoScrollx, 50)
}

const scroll = new Scroll()

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    clearInterval(scroll.interval)
    scroll.interval = setInterval(autoScroll, 50); // Adjust the interval (in milliseconds) as needed
  } else {
    clearInterval(scroll.interval)
    scroll.interval = setInterval(autoScrollx, 50);
  }
})



const mode = document.getElementById("mode");

mode.addEventListener("click", ()=> {
  body.style.backgroundColor = body.style.color == "black" ?"var(--bg_color)" :"var(--bg_light_color)";
  linkedin.style.backgroundImage = body.style.color == "black" ?"url('icons/light-linkedin-logo.svg')" :"url('icons/dark-linkedin-logo.svg')";
  github.style.backgroundImage = body.style.color == "black" ?"url('icons/light-github-logo.svg')" :"url('icons/dark-github-logo.svg')";
  twitter.style.backgroundImage = body.style.color == "black" ?"url('icons/light-twitter-logo.svg')" :"url('icons/dark-twitter-logo.svg')";
  body.style.color = body.style.color == "black" ?"white": "black";
  mode.innerHTML = body.style.color == "white" ? "<img src='icons/dark.svg'>" : "<img src='icons/light.svg'>"
})

booker.addEventListener("click", () => {
  window.location.href = 'https://jindehao.github.io/aio_landing_page/landing_page.html'
})
weather.addEventListener("click", () => {
  window.location.href = 'https://jindehao.github.io/aio_landing_page/landing_page.html'
})
linkedin.addEventListener("click", () => {
  window.location.href = 'https://www.linkedin.com/in/omar-id-hmaid/'
})
github.addEventListener("click", () => {
  window.location.href = 'https://github.com/jinDeHao'
})
twitter.addEventListener("click", () => {
  window.location.href = 'https://twitter.com/O_idhmaid'
})
resume.addEventListener("click", () => {
  window.location.href = 'https://drive.google.com/file/d/1wUNsbDe6cm_onGZOk-cnUmVLBxaIb53O/view?usp=drive_link'
})
