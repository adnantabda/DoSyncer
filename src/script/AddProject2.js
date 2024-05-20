import returnIcon from "../imgs/returnIcon.svg"
import { todayPage } from "./today"



const addProjectValue = (name , description)=>{
    const currentProjects = JSON.parse(localStorage.getItem("projects"))
    const newProject = {
        "projectName" : name, 
        "description" : description,
        "todo" : []
    }
    currentProjects.push(newProject)
    localStorage.setItem("projects" , JSON.stringify(currentProjects))
    console.log(currentProjects)
}

export const addProjectDom = ()=>{
    const homeBody = document.querySelector("body")
    const appFace = document.querySelector(".app-face")
    const addProjectContainer = document.createElement("div")
    const projectNameLabel = document.createElement("label")
    const projectName = document.createElement("input")

    const descriptionLabel = document.createElement("label")
    const projectDescription = document.createElement("textarea")
    const button = document.createElement("button")
    // const todoButton = document.createElement("button")
    const returnImage = new Image()
    returnImage.src = returnIcon
    returnImage.classList.add("x-return-svg")

    button.textContent = "Save Project"
    // todoButton.textContent = "Add Todo"

    addProjectContainer.classList.add("add-task-container")
    projectNameLabel.textContent = "Project Name"
    descriptionLabel.textContent = "Project Description"

    appFace.style.display = "none"

    returnImage.addEventListener("click" , ()=>{
        const menu = document.querySelector(".menu-bar"); // Get the existing menu
        addProjectContainer.style.display = "none"
        appFace.style.display = "block"
        
        if (menu) {
            appFace.removeChild(menu); // Remove the existing menu
        }
    
    })



    addProjectContainer.appendChild(projectNameLabel)
    addProjectContainer.appendChild(projectName)
    addProjectContainer.appendChild(descriptionLabel)
    addProjectContainer.appendChild(projectDescription)
    addProjectContainer.appendChild(button)
    // addProjectContainer.appendChild(todoButton)
    addProjectContainer.appendChild(returnImage)
    homeBody.appendChild(addProjectContainer)


    button.addEventListener("click" , ()=>{
        addProjectValue(projectName.value , projectDescription.value)
        while(appFace.firstChild){
            appFace.removeChild(appFace.firstChild)
        }
        addProjectContainer.style.display = "none"
        appFace.style.display = "block"
        todayPage()


        

        
    })

    // todoButton.addEventListener("click" , ()=>{
    //     console.log("clicked")
    //     addTodoDom()
    // })

}