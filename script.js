const form = document.querySelector("#form");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);

function save() {
  localStorage.setItem("Habits@user", JSON.stringify(nlwSetup.data));
}

function add() {
  const day = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExists = nlwSetup.dayExists(day);

  if (dayExists) {
    alert("Dia já adicionado ❌");
    return;
  }

  alert("Dia Adicionado com sucesso 👍");
  nlwSetup.addDay(day);
}

const data = JSON.parse(localStorage.getItem("Habits@user")) || {}

nlwSetup.setData(data);
nlwSetup.load();
