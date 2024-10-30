import { syncItems } from "./items.mjs";
const items = syncItems();
const main = document.getElementById("mainbreakdown");


function breakdownTemplate(item) {
    return `<li>${item.itemName}: ${item.itemCount}</li>`
};

function buildBreakdown(step) {
    main.insertAdjacentHTML("beforeend", breakdownTemplate(step))
};

const breakdownHtml = items.map(buildBreakdown);