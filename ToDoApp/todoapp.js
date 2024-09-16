document.addEventListener("DOMContentLoaded", function () {
  const addbtn = document.getElementById("add");

  addbtn.addEventListener("click", () => {
    if (
      document.querySelector(".my-input") ||
      document.querySelector("input[type='text']")
    ) {
      return; // Exit if either element exists
    }
    const inputtab = document.createElement("input");
    const add = document.createElement("button");
    add.textContent = "Add";
    add.classList.add("my-input");
    inputtab.type = "text";
    inputtab.placeholder = "Enter your task here";

    const container = document.getElementById("container");
    container.appendChild(inputtab);
    container.appendChild(add);
    add.addEventListener("click", () => {
      const textinput = inputtab.value.trim();
      container.removeChild(inputtab);
      container.removeChild(add);
      addtask(container, textinput);
    });
  });

  function addtask(container, textinput) {
      if (textinput !== "") {
        const container1 = document.getElementById("container1");
      const todoitem = document.createElement("div");
      todoitem.classList.add("todo-item");
      todoitem.innerText = textinput;
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        container1.removeChild(todoitem);
      });
      todoitem.appendChild(deleteButton);
      container1.appendChild(todoitem);
    }
  }
});
