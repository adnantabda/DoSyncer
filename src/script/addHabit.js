import returnIcon from "../imgs/returnIcon.svg"
import { todayPage } from "./today"



const addHabitValue = (name, description )=>{
    const currentHabits =JSON.parse(localStorage.getItem("habits"))

    const newHabit = {
        "habitName" : name,
        "description" : description,
        }
    currentHabits.push(newHabit)
    localStorage.setItem("habits" , JSON.stringify(currentHabits))

}

export const addHabitDom = ()=>{
    const homeBody = document.querySelector("body")
    const appFace = document.querySelector(".app-face")
    const addHabitContainer = document.createElement("div")
    const habitNameLabel = document.createElement("label")
    const habitName = document.createElement("input")
    const descriptionLabel = document.createElement("label")
    const habitDescription = document.createElement("textarea")
    const button = document.createElement("button")
    const returnImage = new Image()
    returnImage.src = returnIcon
    returnImage.classList.add("x-return-svg")
    button.textContent = "Save habit"

    addHabitContainer.classList.add("add-habit-container")
    habitNameLabel.textContent = "habit Name"
    descriptionLabel.textContent = "habit Description"

    appFace.style.display = "none"

    returnImage.addEventListener("click" , ()=>{
        const menu = document.querySelector(".menu-bar"); // Get the existing menu
        addHabitContainer.style.display = "none"
        appFace.style.display = "block"
        
        if (menu) {
            appFace.removeChild(menu); // Remove the existing menu
        }
    
    })


    addHabitContainer.appendChild(habitNameLabel)
    addHabitContainer.appendChild(habitName)
    addHabitContainer.appendChild(descriptionLabel)
    addHabitContainer.appendChild(habitDescription)
    addHabitContainer.appendChild(button)
    addHabitContainer.appendChild(returnImage)
    homeBody.appendChild(addHabitContainer)

    button.addEventListener("click" , ()=>{
        addHabitValue(habitName.value, habitDescription.value)
        addHabitContainer.style.display = "none"
        appFace.style.display = "block"
        while(appFace.firstChild){
            appFace.removeChild(appFace.firstChild)
        }
        todayPage()

    })
}