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
import { deleteProject } from './todayLog'



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
    const projectsDivTitle = document.createElement("h2")
    projectsDivTitle.textContent = "Projects"
    projectsDivTitle.style.marginLeft = "30px"
    projects.appendChild(projectsDivTitle)
    const habits = document.createElement("div")
    const tasks = document.createElement("div")
    const listOfProjects = document.createElement("ul")
    const listOfHabits = document.createElement("ul")
    const listOfTasks = document.createElement("ul")


    const habitsDivTitle = document.createElement("h2")
    habitsDivTitle.classList.add("h2habits")
    habitsDivTitle.textContent = "Habits"
    habitsDivTitle.style.marginLeft = "30px"
    habits.appendChild(habitsDivTitle)


    const tasksDivTitle = document.createElement("h2")
    tasksDivTitle.textContent = "Tasks"
    tasksDivTitle.style.marginLeft = "30px"
    tasks.appendChild(tasksDivTitle)
    tasksDivTitle.classList.add("h2tasks")
    projectsDivTitle.classList.add("h2projects")




    actions.classList.add("actions")
    projects.classList.add("projects")
    habits.classList.add("habits")
    tasks.classList.add("tasks")
    actions.appendChild(projects)
    actions.appendChild(habits)
    actions.appendChild(tasks)

    let lenProjects = JSON.parse(localStorage.getItem("projects")).length
    let lenHabits = JSON.parse(localStorage.getItem("habits")).length

    for(let i = 0 ; i < lenProjects ; i++){
        const divInLi = document.createElement("div")
        const li = document.createElement("li")
        const textContainer = document.createElement("div")
        const spanTextProject = document.createElement("span")
        const deleteAndTitle = document.createElement("div")

        


        const deleteImage = new Image()
        deleteImage.src = deleteIcon
        spanTextProject.textContent = `Project  ${i + 1}`
        deleteAndTitle.appendChild(spanTextProject)
        deleteAndTitle.appendChild(deleteImage)
        deleteAndTitle.classList.add("delete-and-title-container")

        
        const projectTitle = document.createElement("p")

        let name = allProjectName()[i].projectName

        projectTitle.textContent = name

        li.appendChild(divInLi)
        divInLi.classList.add("project-name-container")
        textContainer.appendChild(projectTitle)
        textContainer.appendChild(deleteAndTitle)
        const projectImage = new Image()

        projectImage.src = projectIcon
        divInLi.appendChild(projectImage)
        divInLi.appendChild(textContainer)
        

        listOfProjects.appendChild(li)

        
        
        deleteImage.addEventListener("click" , ()=>{
            while(li.firstChild){

                li.removeChild(li.firstChild)
            }


            const current = JSON.parse(localStorage.getItem("projects"))
            const remainingProjects = []
            for (let j = 0 ; j < current.length; j++){
                if(current[j].projectName !== name){
                    remainingProjects.push(current[j])
                }
            }
            localStorage.setItem("projects" , JSON.stringify(remainingProjects))

        })

    }


    projects.appendChild(listOfProjects)

    appFace.appendChild(actions)


    for(let i =0 ; i <lenHabits ; i++)
    {

        let nameHabit = allHabitsName()[i].habitName

        const divInLiHabit = document.createElement("div")
        const textContainerHabit = document.createElement("div")
        const LiHabit = document.createElement("li")
        const spanTextHabit = document.createElement("span")
        spanTextHabit.textContent = `Habit  ${i + 1}`
        const habitTitle = document.createElement("p")
        habitTitle.textContent = nameHabit

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




        deleteImage.addEventListener("click" , ()=>{
            // console.log("clicked THis yahhoo")
            while(LiHabit.firstChild){

                LiHabit.removeChild(LiHabit.firstChild)
            }


            const currentHabits = JSON.parse(localStorage.getItem("habits"))
            // console.log(currentHabits[i].habitName)
            // console.log(`${allHabitsName()[i]} Function Array` )

            const remainingHabits = []
            for (let j = 0 ; j < currentHabits.length; j++){
                if(currentHabits[j].habitName !== nameHabit){
                    console.log(currentHabits[j].habitName)
                    console.log(allHabitsName()[i])

                    remainingHabits.push(currentHabits[j])
                }
            }


            // const current = JSON.parse(localStorage.getItem("projects"))
            // const remainingProjects = []
            // for (let j = 0 ; j < current.length; j++){
            //     if(current[j].projectName !== name){
            //         remainingProjects.push(current[j])
            //     }
            // }
            // localStorage.setItem("projects" , JSON.stringify(remainingProjects))
            localStorage.setItem("habits" , JSON.stringify(currentHabits))

        })
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
        const deleteImageTask = new Image()
        deleteImageTask.src = deleteIcon
        deleteAndTitleTask.classList.add("delete-and-title-container")
        deleteAndTitleTask.appendChild(spanTextTask)
        deleteAndTitleTask.appendChild(deleteImageTask)


        spanTextTask.textContent = `Task  ${i + 1}`


        



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

        deleteImageTask.addEventListener("click" , ()=>{
            console.log("clicked THis yahhoo")
            while(LiTask.firstChild){

                LiTask.removeChild(LiTask.firstChild)
            }


            // const current = JSON.parse(localStorage.getItem("projects"))
            // const remainingProjects = []
            // for (let j = 0 ; j < current.length; j++){
            //     if(current[j].projectName !== name){
            //         remainingProjects.push(current[j])
            //     }
            // }
            // localStorage.setItem("projects" , JSON.stringify(remainingProjects))

        })

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