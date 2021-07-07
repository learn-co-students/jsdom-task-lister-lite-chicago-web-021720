document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form")
  let ul = document.querySelector("#tasks")
  form.addEventListener("submit", function(event) {
    event.preventDefault()
    let li = document.createElement("li")
    li.innerHTML = `${form.elements["new-task-description"].value}<button data-description="${form.elements["new-task-description"].value}">X</button>`
    ul.appendChild(li)
    ul.addEventListener("click", function(event) {
      if (event.target.nodeName === "BUTTON") {
        let children = Array.from(ul.children)
        let remove_li = children.filter((task) => task.innerText === `${event.target.dataset.description}X`)
        ul.removeChild(remove_li[0])
      }
    })
  })
});
