document.addEventListener("DOMContentLoaded", () => {

});

function addTaskToList(task) {

  let tasksList = document.querySelector('#tasks');
  let newTaskItem = document.createElement('li');
  let removeButton = document.createElement('button');
  let editButton = document.createElement('button');

  newTaskItem.innerText = task;  // Add the task text to the new <li> tag
  tasksList.appendChild(newTaskItem);  // Add the <li> as a child of the <ul>
  
  newTaskItem.id = `task-${tasksList.getElementsByTagName('li').length}`;  // Give the <li> an id
  
  // Format the remove button
  removeButton.type = 'button';
  removeButton.name = 'remove';
  removeButton.innerText = 'X';
  removeButton.style.margin = "0px 5px";
  removeButton.onclick = function () { removeButton.parentNode.remove(); }

  // // Format the edit button
  // editButton.type = 'button';
  // editButton.name = 'edit';
  // editButton.innerText = 'Edit';
  // editButton.style.margin = "0px 5px";

  newTaskItem.appendChild(removeButton);  // Add the remove button as a child of the <li>
  // newTaskItem.appendChild(editButton);    // Add the edit button as a child of the <li>
}

// Submit button event listener
document.querySelector('input[type=submit][value="Create New Task"]').addEventListener('click', function(event) {
    // Prevent the form from submitting
    event.preventDefault();  
    
    // Grab the task string and add it to the <ul> as an <li>
    let formInput = document.querySelector('#new-task-description');
    addTaskToList(formInput.value);

    // Reset the form
    document.querySelector('#create-task-form').reset();
  }
);
