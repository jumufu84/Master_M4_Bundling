const randomNumer = Math.random();
const text = `Avergae number: ${randomNumer}`;

const title = document.createElement("h1");
title.innerText = text;
document.body.appendChild(title);
