document.addEventListener("DOMContentLoaded", function () {
  // yaha se sab ko access kiya
  const todoinput = document.getElementById("todo-input");
  const tododate = document.getElementById("todo-date");
  const addbutton = document.getElementById("add-button");
  const todolist = document.getElementById("todo-list");

  addbutton.addEventListener("click", () => {
    const todoText = todoinput.value.trim();
    const todoDate = tododate.value;
    if (todoText !== "") {
      const listitem = document.createElement("li");
      listitem.innerText = todoText + "     at     " + todoDate;
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        todolist.removeChild(listitem);
      });
      listitem.appendChild(deleteButton);
      todolist.appendChild(listitem);

      todoinput.value = "";
      tododate.value = "";
    }
  });
});
