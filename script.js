console.log("Javascript Connected");
ScrollReveal().reveal('.project-card', { delay: 200, distance: '50px', origin: 'bottom' });

const greeting = document.getElementById("greet");
    const hour = new Date().getHours();
    let message;

    if(hour < 12){
        message = `Good Morning, I'm Urmil Ramani!`;
    }else if (hour < 18){
        message = `Good Afternoon, I'm Urmil Ramani!`;
    }else {
        message = `Good Evening, I'm Urmil Ramani!`;
    }

greeting.innerHTML = message;

const intro = document.getElementById("intro");
const text = "A Passionate Web Developer and Designer.";
let index = 0;
intro.innerHTML = "";
function typeWriter() {
    if (index < text.length) {
        intro.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 75);
    }
}
typeWriter();

const myButton = document.getElementById('submitButton');

    myButton.addEventListener("mouseover", () => {
        myButton.style.backgroundColor = "#4e4e4eff";
    });
    myButton.addEventListener("mouseout", () => {
        myButton.style.backgroundColor = "";
    });

const form = document.querySelector(".contact-form");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if(!name || !email || !message == null){
         alert("Please fill in all fields before sending your message.");
        return;
    }else{
        setTimeout(() => {
            alert(`Message Sent Successfully!`);
            form.reset();
        }, 1500);
    }
});

document.querySelector("footer p").innerHTML = `&copy; ${new Date().getFullYear()} Urmil Ramani. All rights reserved.`;

// ===== Loading Animation =====
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hidden");

    const techIcons = document.querySelectorAll(".tech-icon");
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% visible

    techIcons.forEach(icon => observer.observe(icon));
  }, 2000); // delay for smoother fade-out
});


const theme = document.getElementById("theme");
theme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    theme.textContent = 
        document.body.classList.contains("dark")? "☀️ Light Mode" : "🌙 Dark Mode";
});


// Code for current link highlighting based on scroll position

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === `#${current}`){
            link.classList.add("active");
        }
    });
});
// End of current link highlighting code