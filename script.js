let button = document.querySelector("#btn");
let content = document.querySelector("#data");

async function dataHandler() {
  content.innerHTML = "Loading...";
  try {
    const res = await fetch("https://api.github.com/users/manzar-hassan");
    const data = await data.json();

    content.innerHTML = `
    id: ${data.id} <br>
    login: ${data.login} <br>
    node_id: ${data.node_id}`;
  } catch (err) {
    console.log(err);
  }
}

button.addEventListener("click", dataHandler);
