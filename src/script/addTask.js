import returnIcon from "../imgs/returnIcon.svg"
import { todayPage } from "./today"
import { todayPageUpdated } from "./today"



const addTaskValue = (name , description , state )=>{
    const currentTasks =JSON.parse(localStorage.getItem("tasks"))

    const newTask = {
        "name" : name,
        "description" : description,
        "done":state,
    }

    currentTasks.push(newTask)
    localStorage.setItem("tasks" , JSON.stringify(currentTasks))


}

export const addTaskDom = ()=>{
    const homeBody = document.querySelector("body")
    const appFace = document.querySelector(".app-face")
    const addTaskContainer = document.createElement("div")
    const taskNameLabel = document.createElement("label")
    const taskName = document.createElement("input")

    const descriptionLabel = document.createElement("label")
    const taskDescription = document.createElement("textarea")
    const doneState = document.createElement("input")
    doneState.setAttribute("type" , "checkbox")
    const doneStateLabel = document.createElement("label")
    const doneStateDiv = document.createElement("div")
    const button = document.createElement("button")
    const returnImage = new Image()
    returnImage.src = returnIcon
    returnImage.classList.add("x-return-svg")

    button.textContent = "Save Task"

    doneStateLabel.textContent = "Is this Task Done ?"
    addTaskContainer.classList.add("add-task-container")
    taskNameLabel.textContent = "Task Name"
    descriptionLabel.textContent = "Task Description"

    appFace.style.display = "none"

    returnImage.addEventListener("click" , ()=>{
        const menu = document.querySelector(".menu-bar"); // Get the existing menu
        addTaskContainer.style.display = "none"
        appFace.style.display = "block"
        
        if (menu) {
            appFace.removeChild(menu); // Remove the existing menu
        }
    
    })




    addTaskContainer.appendChild(taskNameLabel)
    addTaskContainer.appendChild(taskName)
    addTaskContainer.appendChild(descriptionLabel)
    addTaskContainer.appendChild(taskDescription)
    doneStateDiv.appendChild(doneStateLabel)
    doneStateDiv.appendChild(doneState)
    addTaskContainer.appendChild(doneStateDiv)
    addTaskContainer.appendChild(button)
    addTaskContainer.appendChild(returnImage)
    homeBody.appendChild(addTaskContainer)


    button.addEventListener("click" , ()=>{

        addTaskValue( taskName.value , taskDescription.value , doneState.value )
        addTaskContainer.style.display = "none"
        appFace.style.display = "block"
        while(appFace.firstChild){
            appFace.removeChild(appFace.firstChild)
        }
        todayPage()
    })

}

