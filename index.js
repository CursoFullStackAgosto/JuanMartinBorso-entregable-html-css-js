const inputTask = document.getElementById ("todo-input")
const buttonAddTask = document.getElementById ("add-task")
const todolist = document.getElementById("todo-list")

const createTask = () => {
    //console.log (inputTask.value)
    if (inputTask.value.trim() === "") {
        inputTask.value = ""
        return alert("Rellenar el Campo")
    }

    const liElement = document.createElement("li")
    liElement.innerHTML= `
    <input type="checkbox" /> 
    <span>${inputTask.value}</span> 
    <button class="delete-button">Eliminar</button>
    `
    todolist.appendChild(liElement)

    const checkbox = liElement.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", () => {
        const taskText = liElement.querySelector("span");
        taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
    })

    const deleteButton = liElement.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
        todolist.removeChild(liElement)
    })

    inputTask.value = ""
}

buttonAddTask.addEventListener("click", createTask)

