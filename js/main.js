const tempDate = new Date();
const tempYear = tempDate.getFullYear();

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById('copyrights').innerHTML = `&copy; ${tempYear} @s_2010_119 All Rights Reserved.`
});