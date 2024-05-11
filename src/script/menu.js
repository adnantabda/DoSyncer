import DoSyncerHeaderLogo from '../imgs/DoSyncer_header_logo.png'
import githubIcon from '../imgs/github_icon.svg'
import todayIcon from '../imgs/today_home_icon.svg'
import projectIcon from '../imgs/add_project_icon.svg'
import todoIcon from '../imgs/add_todo_icon.svg'
import taskIcon from '../imgs/task_icon.svg'
import habitIcon from '../imgs/habit_icon.svg'
import { todayPage } from './today'



const todayName = ()=>{
    const currentDay = new Date()

    const days= {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        0: "Sunday",
   }


   return days[`${currentDay.getDay()}`]
    
}


export const menuShow = ()=>
    {
    const menu = document.createElement("div")
    const addList = document.createElement("div")
    const addTodayContainer = document.createElement("div")
    const addProjectContainer = document.createElement("div")
    const addToDoContainer = document.createElement("div")
    const addTasksContainer = document.createElement("div")
    const addHabitContainer = document.createElement("div")

    menu.classList.add("menu-bar")


    const DoSyncerHeaderImage = new Image
    DoSyncerHeaderImage.classList.add("logo-menu")
    DoSyncerHeaderImage.src = DoSyncerHeaderLogo  // 1


    const dayContainer = document.createElement("div")
    const dayName = document.createElement("h2")
    const developerNameContainer = document.createElement("div")
    const githubImage = new Image()
    githubImage.src = githubIcon


    githubImage.classList.add("github-icon")

    githubImage.addEventListener("click" , ()=>{
        window.open("https://github.com/adnantabda", "_blank")
    })

    const developerName = document.createElement("span")
    developerName.textContent = "Developed by Adnan Tahir"
    developerNameContainer.appendChild(developerName)
    developerNameContainer.appendChild(githubImage)

    dayName.textContent = todayName()

    dayContainer.appendChild(dayName)
    dayContainer.appendChild(developerNameContainer) // 2


    dayContainer.classList.add("day-container")

    const todayImage = new Image()
    const projectImage = new Image()
    const todoImage = new Image()
    const taskImage = new Image()
    const habitImage = new Image()

    const todaySpan = document.createElement("span")
    const projectSpan = document.createElement("span")
    const todoSpan = document.createElement("span")
    const taskSpan = document.createElement("span")
    const habitSpan = document.createElement("span")


    todayImage.src = todayIcon
    projectImage.src = projectIcon
    todoImage.src = todoIcon
    taskImage.src = taskIcon
    habitImage.src = habitIcon

    todaySpan.textContent = "Today"
    projectSpan.textContent = "Add Project"
    todoSpan.textContent = "Add To-do"
    taskSpan.textContent = "Add Task"
    habitSpan.textContent = "Add Habit"

    todaySpan.classList.add("add-list-text-hover")
    projectSpan.classList.add("add-list-text-hover")
    todoSpan.classList.add("add-list-text-hover")
    taskSpan.classList.add("add-list-text-hover")
    habitSpan.classList.add("add-list-text-hover")


    addTodayContainer.appendChild(todayImage)
    addTodayContainer.appendChild(todaySpan)


    addTodayContainer.classList.add("add-list-individual-container")
    addProjectContainer.classList.add("add-list-individual-container")
    addToDoContainer.classList.add("add-list-individual-container")
    addTasksContainer.classList.add("add-list-individual-container")
    addHabitContainer.classList.add("add-list-individual-container")

    addProjectContainer.appendChild(projectImage)
    addProjectContainer.appendChild(projectSpan)

    addToDoContainer.appendChild(todoImage)
    addToDoContainer.appendChild(todoSpan)

    addTasksContainer.appendChild(taskImage)
    addTasksContainer.appendChild(taskSpan)

    addHabitContainer.appendChild(habitImage)
    addHabitContainer.appendChild(habitSpan)



    addList.appendChild(addTodayContainer)
    addList.appendChild(addProjectContainer)
    addList.appendChild(addToDoContainer)
    addList.appendChild(addTasksContainer)
    addList.appendChild(addHabitContainer)

    addList.classList.add("add-list")


    menu.appendChild(DoSyncerHeaderImage)
    menu.appendChild(dayContainer)
    menu.appendChild(addList)

    projectSpan.addEventListener("click" , ()=>{
        const appFace = document.querySelector(".app-face");
        const menu = document.querySelector(".menu-bar"); // Get the existing menu
        if (menu) {
            appFace.removeChild(menu); // Remove the existing menu
        }

        appFace.style.display = "none"
        const div = document.querySelector(".pop-up-div")
        div.style.display = "flex"
    })


    todaySpan.addEventListener("click", () => {
        const appFace = document.querySelector(".app-face");
        const menu = document.querySelector(".menu-bar"); // Get the existing menu
        if (menu) {
            appFace.removeChild(menu); // Remove the existing menu
        }
    });
    
    return menu


}


