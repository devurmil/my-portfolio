console.log("Javascript Connected");

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
 

const myButton = document.getElementById('submitButton');

    myButton.addEventListener("mouseover", () => {
        myButton.style.backgroundColor = "#5e5e5eff";
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

// Adding tech icon Animation
// document.addEventListener("DOMContentLoaded", () => {
//   const techIcons = document.querySelectorAll(".tech-icon");

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible");
//         observer.unobserve(entry.target); // Animate only once
//       }
//     });
//   }, { threshold: 1 });

//   techIcons.forEach(icon => observer.observe(icon));
// });