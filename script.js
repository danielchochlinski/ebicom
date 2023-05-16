const clients = [
  {
    id: "12",
    client: "Klient nr 1",
    to: "05-09-2022 17:28",
    from: "05-09-2022 17:32",
    user: "Jan Kowalski",
    stage: "4/4",
    completion: "100%",
    faulty: false,
  },
  {
    id: "12",
    client: "Klient nr 1",
    to: "05-09-2022 17:28",
    from: "05-09-2022 17:32",
    user: "Jan Kowalski",
    stage: "4/4",
    completion: "100%",
    faulty: false,
  },
  {
    id: "12",
    client: "Klient nr 1",
    to: "05-09-2022 17:28",
    from: "05-09-2022 17:32",
    user: "Jan Kowalski",
    stage: "4/4",
    completion: "100%",
    faulty: false,
  },
  {
    id: "12",
    client: "Klient nr 1",
    to: "05-09-2022 17:28",
    from: "05-09-2022 17:32",
    user: "Jan Kowalski",
    stage: "4/4",
    completion: "100%",
    faulty: false,
  },
];

const navToggle = document.querySelector(".hamburger");
const spanElements = document.querySelectorAll(".hamburger span");
const subNav = document.querySelector(".sub-nav");
const tBody = document.getElementById("t-body");

//toggle sub-navbar
navToggle.addEventListener("click", (e) => {
  spanElements.forEach((el) => {
    el.classList.toggle("open");
  });
  subNav.classList.toggle("openNav");
});

const rows = clients.map((el) => {
  const row = document.createElement("tr");
  row.classList.add("cs-table");

  const idCell = document.createElement("td");
  idCell.textContent = el.id;

  row.appendChild(idCell);

  const clientCell = document.createElement("td");
  clientCell.textContent = el.client;

  row.appendChild(clientCell);

  const toCell = document.createElement("td");
  toCell.textContent = el.to;

  row.appendChild(toCell);

  const fromCell = document.createElement("td");
  fromCell.textContent = el.from;

  row.appendChild(fromCell);

  const userCell = document.createElement("td");
  userCell.textContent = el.user;

  row.appendChild(userCell);

  const stageCell = document.createElement("td");
  stageCell.textContent = el.stage;

  row.appendChild(stageCell);

  const completionCell = document.createElement("td");
  completionCell.textContent = el.completion;

  row.appendChild(completionCell);

  const faultyCell = document.createElement("td");
  faultyCell.textContent = el.faulty;

  row.appendChild(faultyCell);

  const downloadCell = document.createElement("td");
  const iconElement = document.createElement("i");
  downloadCell.classList.add("text-primary", "gap-2");
  iconElement.setAttribute("data-feather", "download");
  iconElement.classList.add("icon", "text-primary");
  downloadCell.appendChild(iconElement);
  downloadCell.appendChild(document.createTextNode(" Pobierz"));
  row.appendChild(downloadCell);

  return row;
});

rows.forEach((row) => {
  tBody.appendChild(row);
});

const tdElements = document.querySelectorAll(".cs-table > td:nth-child(1)");
tdElements.forEach((td) => {
  td.style.width = `min-content`;
});
