import menuIcon from '../imgs/menu_icon.svg'
import calender from '../imgs/calender_icon.svg'
import clock from '../imgs/time_icon.svg'
import { allHabitsName, allNameTodoInProject, allProjectName, allTasksName, allTodoInProject} from './todayLog'
import projectIcon from '../imgs/project_icon.svg'
import habitIcon from '../imgs/habit_icon.svg'
import taskIcon from '../imgs/task_icon.svg'
import todayIcon from '../imgs/today_home_icon.svg'
import deleteIcon from '../imgs/delete_icon.svg'
import todoIcon from '../imgs/todo_icon.svg'

const appFace = document.querySelector(".app-face")
const body = document.querySelector("body")
import { menuShow } from './menu'
import { deleteProject } from './todayLog'



appFace.appendChild(menuShow())
const menuFirst = document.querySelector(".menu-bar")
menuFirst.style.display = "none"

export const navCreate = ()=>{

    // const navBarReturn = document.createElement("div")

    const navBar = document.createElement("div")
    const todayText = document.createElement('h2')
    const navLeft = document.createElement("div")
    const navRight = document.createElement("div")

    const menuImage = new Image()
    const CalenderIcon = new Image()
    menuImage.classList.add("menu-image-svg")

    menuImage.src = menuIcon
    todayText.textContent = "TODAY"
    CalenderIcon.src = calender


    menuImage.addEventListener("click", ()=>{
        const menu = document.querySelector(".menu-bar")
        if(appFace.contains(menu)){

            menu.style.display = "flex"
        }else{
            appFace.appendChild(menuShow())
        }

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
    let lenTasks = JSON.parse(localStorage.getItem("tasks")).length

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
        const todoContainer = document.createElement("div")

        let open = false
        projectTitle.addEventListener("click" , ()=>{
            if(!open){

            

                const ulLI = document.createElement("ul")
                for (let j = 0 ; j < allTodoInProject(name).length ; j ++){

                
                    const todoImage = new Image()
                    const liDiv = document.createElement("div")
                    liDiv.classList.add("li-div-todo")
                    const timeTodo = document.createElement("span")
                    const DateTodo = document.createElement("span")
                    DateTodo.classList.add("span-text-date")
                    timeTodo.classList.add("span-text-time")
                    const spanLiTodo = document.createElement("p")


                    const divTodoText = document.createElement("div")

                

                    divTodoText.appendChild(spanLiTodo)
                    divTodoText.appendChild(timeTodo)
                    divTodoText.appendChild(DateTodo)






                    timeTodo.textContent = allTodoInProject(name)[j].time
                    DateTodo.textContent = allTodoInProject(name)[j].date


                    todoImage.src = todoIcon
                    const liTodo = document.createElement("li")
                    spanLiTodo.textContent = allTodoInProject(name)[j].name

                    liDiv.appendChild(todoImage)
                    liDiv.appendChild(divTodoText)
        
                    liTodo.appendChild(liDiv)
                        ulLI.appendChild(liTodo)
                        console.log("This is working")

                }
                todoContainer.appendChild(ulLI)
                todoContainer.classList.add("todo-container")
    
                open = true

            }else{
                while(todoContainer.firstChild){
                    todoContainer.removeChild(todoContainer.firstChild)
                }
                open = false

            }
        



            
        })
        li.appendChild(todoContainer)
        
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
                    remainingHabits.push(currentHabits[j])
                }
            }

            localStorage.setItem("habits" , JSON.stringify(remainingHabits))

        })
    }
    habits.appendChild(listOfHabits)



    for(let i =0 ; i < lenTasks ; i++)
    {

        let nameTask = allTasksName()[i].name

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
        taskTitle.textContent = nameTask



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

            const currentTasks = JSON.parse(localStorage.getItem("tasks"))
            // console.log(currentHabits[i].habitName)
            // console.log(`${allHabitsName()[i]} Function Array` )

            const remainingTasks = []
            for (let j = 0 ; j < currentTasks.length; j++){
                if(currentTasks[j].name !== nameTask){
                    remainingTasks.push(currentTasks[j])
                }
            }

            localStorage.setItem("tasks" , JSON.stringify(remainingTasks))


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


export const todayPage = ()=>{

    navCreate()
    todayDate()
    listOfActions()
    footer()

}