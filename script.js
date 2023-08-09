"use strict";

const translateBtn = document.querySelector(".translatebtn");
const containerInfo = document.querySelector(".container-info");

let word;

const getAPI = async function () {
  let word = document.querySelector(".input").value;
  const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const res = await fetch(API_URL);
  const data = await res.json();

  const getInfo = `
  <p class="antonym">Antonym: ${data[0].meanings[0].antonyms}</p>
  <p class="synonym">Synonym: ${data[0].meanings[0].synonyms}</p>
  <p class="definition">Definiton: ${data[0].meanings[0].definitions[0].definition}</p>`;

  console.log(data[0].meanings[0].antonyms);

  containerInfo.insertAdjacentHTML("afterbegin", getInfo);
};

translateBtn.addEventListener("click", function (e) {
  e.preventDefault();
  containerInfo.innerHTML = "";
  getAPI();
});
