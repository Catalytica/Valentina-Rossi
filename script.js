const title = document.getElementById("mainTitle");
const content = document.getElementById("contentArea");

const startButton = document.getElementById("valentinesButton");

if (startButton) {
  startButton.addEventListener("click", () => {
    title.innerText = "Would you like to be entertained by a pick up line? Curated to charm your heart.";
    startButton.style.display = "none";

    content.innerHTML = `
      <button onclick="goToPirate()">Yes.</button>
      <button onclick="goToPirate()">YES but in caps because you have no other option mwaah</button>
    `;
  });
}

function goToPirate() {
  title.innerText = "Can I be your Pirate?";

  content.innerHTML = `
    <button onclick="finalLine()">Yes ((No questions asked)).</button>
    <button onclick="finalLine()">YAASSS QUEENNNN. Why tf tho.</button>
  `;
}

function finalLine() {
  title.innerText = "bEcAUsE I wAnT To tREaSurE yOuR cHEsT & bOOty";
  content.innerHTML = "";
}
