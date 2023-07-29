
var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");
addBtn.addEventListener("click", function() {
  var taskText = taskInput.value;

  if (taskText.trim() !== "") {
    var li = document.createElement("li");
    li.innerText = taskText;

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function() {
      li.remove();
    });
    li.addEventListener("click", function() {
      li.classList.toggle("completed");
    });
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = "";
  }
});
