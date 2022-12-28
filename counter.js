const subtract = document.querySelector("#subtract");
const add = document.querySelector("#add");

subtract.addEventListener("click", function () {
  const output = document.querySelector("#output");
  const result = Number(output.innerText) - 1;

  console.log(result);

  output.innerText = result;
});

add.addEventListener("click", function () {
  const output = document.querySelector("#output");
  const result = Number(output.innerText) + 1;

  output.innerText = result;
});
