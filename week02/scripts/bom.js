const input = document.querySelector("#favchap");

const button = document.querySelector("button");

const list = document.querySelector("__________");

const li = document.createElement("li");

const deleteButton = document.createElement("button");

li.textContent = input.value;

deleteButton.textContent = "x";

li.append(deleteButton);

list.append(li);

button.addEventListener("click", function () {
  //code to execute when the button is clicked
  if(input.value.trim() != '') {...}
});


deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
})