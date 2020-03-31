document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const tasks = document.getElementById("tasks");
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let taskVal = document.getElementById('new-task-description').value

    const taskLi = document.createElement('li');

    const taskButton = document.createElement('button')
    taskButton.innerText = 'X'

    taskLi.innerText = taskVal;
    taskLi.appendChild(taskButton);
    tasks.appendChild(taskLi);

    taskButton.addEventListener('click', function() {
      taskLi.remove();
    });
  });
});


