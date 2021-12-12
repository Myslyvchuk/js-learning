/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

 const addListToMain = () => {
  const mainSelector = document.querySelector("main");

  const navigationMenu = `
<li><a href='#'>Home</a></li>
<li><a href='#'>About</a></li>
<li><a href='#'>Backpacks</a></li>
<li><a href='#'>Other things</a></li>
<li><a href='#'>Contact</a></li>
`;
  const navList = document.createElement("ul");
  navList.innerHTML = navigationMenu;
  mainSelector.append(navList);
}

const asd = (addListToMain());