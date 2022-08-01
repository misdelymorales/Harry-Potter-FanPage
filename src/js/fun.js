import data from "../data/harrypotter/data.js";

const funFact = document.getElementById('funFacts');
const { funFacts } = data;

function sortAsc(x, y) {
  return x.type.localeCompare(y.type);
}

function sortDesc(x, y) {
  return y.type.localeCompare(x.type);
}

export const funData = (ordered = 'asc') => {
  funFact.innerHTML = "";
  ordered === 'asc' ? funFacts.sort(sortAsc) : funFacts.sort(sortDesc);
  funFacts.forEach((item) => {
    const { id, type, content } = item;
    funFact.innerHTML +=
      `<div class="col-3">
        <div class="card-fun">
          <div class="card-fun-content" data-id="fun-${id}">
            <h3 class="center">${type}</h3>
            <p class="p-card-fun">${content}</p>
          </div>
        </div>
      </div>`;
  });
}
