const values = [
  { item: "Nebula Saber", value: "1.8M", rarity: "Mythic", trend: "+8%" },
  { item: "Solar Cub", value: "520K", rarity: "Legendary", trend: "+3%" },
  { item: "Pixel Glider", value: "240K", rarity: "Epic", trend: "-2%" },
  { item: "Lunar Crown", value: "1.2M", rarity: "Mythic", trend: "+5%" },
  { item: "Crystal Fox", value: "780K", rarity: "Legendary", trend: "+1%" },
  { item: "Storm Rider", value: "410K", rarity: "Epic", trend: "+4%" },
  { item: "Aurora Blade", value: "960K", rarity: "Legendary", trend: "-1%" },
  { item: "Nova Egg", value: "150K", rarity: "Rare", trend: "+6%" },
];

const valuesBody = document.getElementById("valuesBody");
const valueSearch = document.getElementById("valueSearch");
const resultCount = document.getElementById("resultCount");

const renderRows = (items) => {
  valuesBody.innerHTML = "";

  items.forEach((entry) => {
    const row = document.createElement("div");
    row.className = "table-row";
    row.innerHTML = `
      <span>${entry.item}</span>
      <span>${entry.value}</span>
      <span><span class="tag">${entry.rarity}</span></span>
      <span class="trend ${entry.trend.startsWith("+") ? "up" : ""}">${entry.trend}</span>
    `;
    valuesBody.appendChild(row);
  });

  resultCount.textContent = `${items.length} results`;
};

const filterValues = (term) => {
  const lowerTerm = term.toLowerCase();
  const filtered = values.filter((entry) =>
    entry.item.toLowerCase().includes(lowerTerm)
  );
  renderRows(filtered);
};

valueSearch.addEventListener("input", (event) => {
  filterValues(event.target.value);
});

renderRows(values);
