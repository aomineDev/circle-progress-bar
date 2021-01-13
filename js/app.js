const rootStyle = document.documentElement.style;

const percent = document.getElementById("percent");
const btnPlus = document.getElementById("btn-plus");
const btnLess = document.getElementById("btn-less");

btnPlus.addEventListener("click", () => handleProgress(100, "plus"));

btnLess.addEventListener("click", () => handleProgress(0, "less"));

function handleProgress(limit, interaction) {
  const percentValue = parseInt(document.getElementById("percent").textContent);

  if (percentValue === limit) return;

  let newValue = percentValue;

  if (interaction === "plus") newValue += 10;
  if (interaction === "less") newValue -= 10;

  rootStyle.setProperty("--percent", newValue);
  percent.textContent = newValue;
}
