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
    myButton.style.backgroundColor = "#454545ff";
});

myButton.addEventListener("mouseout", () => {
    myButton.style.backgroundColor = "";
});


function handleClick() {
    alert('Message Sent!');
}

myButton.addEventListener('click', (event) => {
    event.preventDefault();

    setTimeout(() => {
            alert(`Message Sent Successfully!`)
        }, 5000);
});
