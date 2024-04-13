const data = [
  {
    title: "Even temperature zone",
    path: "Simulation_of_EvenTempZone",
  },
  {
    title: "Calibration of Thermocouple",
    path: "Calibration_of_thermocouple_final",
  },
  {
    title: "Diffusion of zinc in copper",
    path: "CuZnDiffusion",
  },
  {
    title: "Roasting of sphalarite in the presence of Lime and Steam",
    path: "test_siml",
  },
  {
    title: "Heat Treatment of steel",
    path: "simulation",
  },
];
const filterInput = function (val) {
  const filteredArray = data.filter(
    (d) =>
      d.title.toLowerCase().includes(val.toLowerCase()) ||
      d.intern.toLowerCase().includes(val.toLowerCase())
  );
  displayExperiments(filteredArray);
};

const searchInput = document.querySelector(".search__input");
searchInput.addEventListener("input", function (e) {
  filterInput(e.target.value);
});

const row = document.querySelector(".row");
const displayExperiments = function (data) {
  row.innerHTML = "";
  data.forEach((d) => {
    const col = document.createElement("div");
    col.classList.add("col");
    col.textContent = d.title;
    const intern = document.createElement("p");
    intern.classList.add("intern");
    // intern.textContent = d.intern;
    const link = document.createElement("a");
    link.classList.add("link");
    link.href = `${d.path}/index.html`;
    link.target = "_blank";
    // link.textContent = "Click Here";
    // col.appendChild(intern);
    link.appendChild(col);
    row.appendChild(link);
  });
};
displayExperiments(data);

console.log(data.map((d) => d.title));
