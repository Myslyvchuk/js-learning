/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import backpackObjectArray from "./components/data.js";

const contentFunc = function (backpack) {
  return `
    <figure class="backpack__image">
      <img src=${backpack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">
        Volume:
        <span> ${backpack.volume} </span>
      </li>
      <li class="packprop backpack__color">
        Color:
        <span> ${backpack.color}</span>
      </li>
      <li class="backpack__age">
        Age:
        <span> ${backpack.backpackAge()} days old</span>
      </li>
      <li class="packprop backpack__pockets">
      Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        backpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        backpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>`;
};

for (const item of backpackObjectArray) {
  const main = document.querySelector(".maincontent");

  const newArticle = document.createElement("article");
  newArticle.classList.add("backpack");
  newArticle.setAttribute("id", item.id);
  newArticle.innerHTML = contentFunc(item);

  main.append(newArticle);
}
