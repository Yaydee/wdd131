
import { syncItems } from "./items.mjs";
const items = syncItems();

// Makes a template for each item
function itemTemplate(item) {
    return `<section class="${item.id}">
                <img src="images/${item.itemImage}" alt="${item.itemName}">
                <button aria-label="Minus ${item.itemName}" class="item${item.id}-minus">-</button>
                <p class="item${item.id}-display">${item.itemCount}</p>
                <button aria-label="Plus ${item.itemName}" class="item${item.id}-plus">+</button>
            </section>`
}

// Inserts a template at the end of #maincontent
function buildItems(step) {
    main.insertAdjacentHTML("beforeend", itemTemplate(step));

    let itemDisplayElem = document.querySelector(`.item${step.id}-display`);
    let itemMinusElem = document.querySelector(`.item${step.id}-minus`);
    let itemPlusElem = document.querySelector(`.item${step.id}-plus`);

    itemPlusElem.addEventListener("click",()=>{
        step.itemCount = step.itemCount + step.itemMultiplier;
        updateItemDisplay(step);

    });
    
    itemMinusElem.addEventListener("click",()=>{
        if (step.itemCount == 0){return};
        step.itemCount = step.itemCount - step.itemMultiplier;
        updateItemDisplay(step);
    });

    function updateItemDisplay(item) {
        itemDisplayElem.innerHTML = item.itemCount;
        localStorage.setItem(`${step.itemName}`, step.itemCount);
    }
}

// QuerySelectors for the TotalRuns counter
let runsDisplayElem = document.querySelector('.runs-display');
let runsMinusElem = document.querySelector('.runs-minus');
let runsPlusElem = document.querySelector('.runs-plus');

// let itemDisplayElem = document.querySelector('.item-display');
// let itemMinusElem = document.querySelector('.item-minus');
// let itemPlusElem = document.querySelector('.item-plus');

let totalRuns = 0;
const main = document.getElementById("maincontent");

updateDisplay();
localStorage.setItem("Total Runs", totalRuns);

runsPlusElem.addEventListener("click",()=>{
    totalRuns++;
    updateDisplay();
});

runsMinusElem.addEventListener("click",()=>{
    if (totalRuns == 0) {return};
    totalRuns--;
    updateDisplay();
});

function updateDisplay(){
    localStorage.setItem("Total Runs", totalRuns);
    runsDisplayElem.innerHTML = totalRuns;
};

const itemsHtml = items.map(buildItems);