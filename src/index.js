document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("input[type='submit']").addEventListener('click', function(event){
    event.preventDefault();
    const newToDo = document.querySelector("input[type='text']").value;
    const newDate = document.getElementById("duedate").value;
    let list = document.querySelector("ul#tasks");
    let newItem = document.createElement("LI");
    newItem.textContent = newToDo + " - " + newDate;
    list.appendChild(newItem);
  });
});
