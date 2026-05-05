function toggleTheme() {
  document.body.classList.toggle("dark");
}

function saveMessage() {
  let name = document.querySelector("input[placeholder='Your name']").value;
  let email = document.querySelector("input[placeholder='Your email']").value;
  let message = document.querySelector("textarea").value;

  let data = { name, email, message };

  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.push(data);

  localStorage.setItem("messages", JSON.stringify(messages));

  alert("Message saved!");
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    showMessages();
  } else {
    alert("Wrong credentials");
  }
}

function showMessages() {
  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  let container = document.getElementById("messages");

  container.innerHTML = "";

  messages.forEach(msg => {
    container.innerHTML += `
      <p><b>${msg.name}</b> (${msg.email})<br>${msg.message}</p>
    `;
  });
}