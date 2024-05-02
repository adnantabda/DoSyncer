import menuIcon from '../imgs/menu_icon.svg'
import calender from '../imgs/calender_icon.svg'
import clock from '../imgs/time_icon.svg'
import { allHabitsName, allProjectName, allTasksName} from './todayLog'
import projectIcon from '../imgs/project_icon.svg'
import habitIcon from '../imgs/habit_icon.svg'
import taskIcon from '../imgs/task_icon.svg'
import todayIcon from '../imgs/today_home_icon.svg'
import deleteIcon from '../imgs/delete_icon.svg'
const appFace = document.querySelector(".app-face")
import { menuShow } from './menu'



export const navCreate = ()=>{

    // const navBarReturn = document.createElement("div")

    const navBar = document.createElement("div")
    const todayText = document.createElement('h2')
    const navLeft = document.createElement("div")
    const navRight = document.createElement("div")

    const menuImage = new Image()
    const CalenderIcon = new Image()

    menuImage.src = menuIcon
    todayText.textContent = "TODAY"
    CalenderIcon.src = calender

    let menuOpen = false

    menuImage.addEventListener("mouseenter", ()=>{
        menuImage.style.cursor = "pointer"
        menuImage.addEventListener("click" , ()=>{
            appFace.appendChild(menuShow())
            menuOpen = true
        })
    }

)
    
    navLeft.appendChild(menuImage)
    navLeft.appendChild(todayText)
    navBar.appendChild(navLeft)
    navRight.appendChild(CalenderIcon)
    navBar.appendChild(navRight)


    // appFace.appendChild(navBar)

    todayText.classList.add("today-text")
    navBar.classList.add("nav-bar")
    navLeft.classList.add("nav-left")
    navRight.classList.add("nav-right")
    // return navBar

    // return navBar
    appFace.appendChild(navBar)
}


export const todayDate = ()=>{

    const timeDisplay = document.createElement("div")
    const time = document.createElement("p")



    const clockIcon = new Image()
    const currentTime = new Date()


    const month = currentTime.toDateString().slice(4,7)
    const day = currentTime.toDateString().slice(8,10)
    const year = currentTime.toDateString().slice(11,15)
    time.textContent = `${day} ${month} ${year}`
    clockIcon.src = clock


    timeDisplay.appendChild(clockIcon)
    timeDisplay.appendChild(time)
    appFace.appendChild(timeDisplay)


    timeDisplay.classList.add("time-section")
}


export const listOfActions = ()=>{
    const actions = document.createElement("div")
    const projects = document.createElement("div")
    const habits = document.createElement("div")
    const tasks = document.createElement("div")
    const listOfProjects = document.createElement("ul")
    const listOfHabits = document.createElement("ul")
    const listOfTasks = document.createElement("ul")


    actions.classList.add("actions")
    projects.classList.add("projects")
    habits.classList.add("habits")
    tasks.classList.add("tasks")
    actions.appendChild(projects)
    actions.appendChild(habits)
    actions.appendChild(tasks)

    for(let i = 0 ; i < allProjectName().length ; i++){
        const divInLi = document.createElement("div")
        const li = document.createElement("li")
        const textContainer = document.createElement("div")
        const spanTextProject = document.createElement("span")
        const deleteAndTitle = document.createElement("div")


        const deleteImage = new Image()
        deleteImage.src = deleteIcon
        spanTextProject.textContent = "Project"
        deleteAndTitle.appendChild(spanTextProject)
        deleteAndTitle.appendChild(deleteImage)
        deleteAndTitle.classList.add("delete-and-title-container")


        const projectTitle = document.createElement("p")

        projectTitle.textContent = allProjectName()[i]

        li.appendChild(divInLi)
        divInLi.classList.add("project-name-container")
        textContainer.appendChild(projectTitle)
        textContainer.appendChild(deleteAndTitle)
        const projectImage = new Image()

        projectImage.src = projectIcon
        divInLi.appendChild(projectImage)
        divInLi.appendChild(textContainer)
        

        listOfProjects.appendChild(li)
    }


    projects.appendChild(listOfProjects)

    appFace.appendChild(actions)
    // console.log(allHabitsName())


    for(let i =0 ; i <allHabitsName().length ; i++)
    {
        const divInLiHabit = document.createElement("div")
        const textContainerHabit = document.createElement("div")
        const LiHabit = document.createElement("li")
        const spanTextHabit = document.createElement("span")
        spanTextHabit.textContent = "Habit"
        const habitTitle = document.createElement("p")
        habitTitle.textContent = allHabitsName()[i]

        const deleteAndTitleHabit = document.createElement("div")
        const deleteImage = new Image()
        deleteImage.src = deleteIcon
        deleteAndTitleHabit.classList.add("delete-and-title-container")
        deleteAndTitleHabit.appendChild(spanTextHabit)
        deleteAndTitleHabit.appendChild(deleteImage)


        LiHabit.appendChild(divInLiHabit)
        divInLiHabit.classList.add("habit-name-container")
        textContainerHabit.appendChild(habitTitle)
        textContainerHabit.appendChild(deleteAndTitleHabit)
        const habitImage = new Image()
        habitImage.src = habitIcon
        divInLiHabit.appendChild(habitImage)
        divInLiHabit.appendChild(textContainerHabit)

        listOfHabits.appendChild(LiHabit)
    }
    habits.appendChild(listOfHabits)

    for(let i =0 ; i <allTasksName().length ; i++)
    {

        // console.log("we are inside " + i)
        const divInLiTask = document.createElement("div")
        const textContainerTask = document.createElement("div")
        const LiTask = document.createElement("li")
        const spanTextTask = document.createElement("span")


        const deleteAndTitleTask = document.createElement("div")
        const deleteImage = new Image()
        deleteImage.src = deleteIcon
        deleteAndTitleTask.classList.add("delete-and-title-container")
        deleteAndTitleTask.appendChild(spanTextTask)
        deleteAndTitleTask.appendChild(deleteImage)


        spanTextTask.textContent = "Task"
        



        const taskTitle = document.createElement("p")
        taskTitle.textContent = allTasksName()[i]



        LiTask.appendChild(divInLiTask)
        divInLiTask.classList.add("task-name-container")
        


        textContainerTask.appendChild(taskTitle)
        textContainerTask.appendChild(deleteAndTitleTask)
        const taskImage = new Image()
        taskImage.src = taskIcon
        divInLiTask.appendChild(taskImage)
        divInLiTask.appendChild(textContainerTask)

        listOfTasks.appendChild(LiTask)

    }
    tasks.appendChild(listOfTasks)
}


export const footer = ()=>{
    const footerContainer = document.createElement("div")
    const iconContainer = document.createElement("div")
    const textContainer = document.createElement("div")


    const todayDiv = document.createElement("div")
    const projectDiv = document.createElement("div")
    const habitDiv = document.createElement("div")
    const taskDiv = document.createElement("div")


    const todayImage = new Image()
    const projectImage = new Image()
    const habitImage = new Image()
    const taskImage = new Image()

    const pToday = document.createElement("p")
    const pProject = document.createElement("p")
    const pTask = document.createElement("p")
    const pHabit = document.createElement("p")

    pToday.textContent = "Today"
    pTask.textContent = "Task"
    pHabit.textContent = "Habit"
    pProject.textContent = "Project"


    iconContainer.classList.add("icon-footer-container")
    textContainer.classList.add("text-footer-container")


    todayImage.src = todayIcon
    projectImage.src = projectIcon
    habitImage.src = habitIcon
    taskImage.src = taskIcon

    todayDiv.appendChild(todayImage)
    todayDiv.appendChild(pToday)
    projectDiv.appendChild(projectImage)
    projectDiv.appendChild(pProject)

    habitDiv.appendChild(habitImage)
    habitDiv.appendChild(pHabit)

    taskDiv.appendChild(taskImage)
    taskDiv.appendChild(pTask)



    iconContainer.appendChild(todayDiv)
    iconContainer.appendChild(projectDiv)
    iconContainer.appendChild(habitDiv)
    iconContainer.appendChild(taskDiv)


    footerContainer.appendChild(iconContainer)
    appFace.appendChild(footerContainer)

}