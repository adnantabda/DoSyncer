// import { projectsJSon } from "./data"
import { tasksJSon } from "./data"
import { habitsJSon } from "./data"


// const projects = JSON.parse(projectsJSon())
// const tasks = JSON.parse(tasksJSon())
// const habits = JSON.parse(habitsJSon())



let projectsData = [
    {
        projectName : "Study", 
        description : "Studying for the Final Exam", 
        todo : 
        [
        {  
            name : "Geography",
            date : "23-14-2024",
            time: "12:6 PM",
            done : false,
            description : "", 
            priority : 2,
        },
        {
            name : "Mathematics",
            date : "23-14-2024",
            time: "12:6 PM",

            done : false,
            description : "", 
            priority : 2,
        },
        
        ]
    },
    {
        projectName : "Goto Super market", 
        description : "I will go to the super market after my exam", 
        todo : 
        [
        {   
            name : "Buy shoes",
            date : "23-14-2024",
            time: "12:6 PM",

            done : false,
            description : "By nike shoes", 
            priority : 2,
        }]
    }
 
]


let habits = [
    {
        habitName : "Exercise",
        description : "Exercising Every morning" , 

    },
]


let tasks = [
    {
        name : 'Taking care of the baby', 
        description : "taking care of a baby for 4 hours after his mother went to super market", 
        done : false
    },
    {
        name : 'Cleaning My room', 
        description : "", 
        done : false
    }, 
]


if (localStorage.getItem("projects") || localStorage.getItem("habit") || localStorage.getItem("tasks")){
    ""
}else{
    localStorage.setItem("projects" , JSON.stringify(projectsData))
    localStorage.setItem("habits" , JSON.stringify(habits))
    
    localStorage.setItem("tasks" , JSON.stringify(tasks))

}



export const allProjectName = ()=>{
    let projectsList = JSON.parse(localStorage.getItem("projects"))
    return projectsList
}

export const allTodoInProject = (projectName)=>{
    const projects = JSON.parse(localStorage.getItem("projects"))
    for (let i = 0 ; i < projects.length ; i++){
        if (projectName == projects[i].projectName)
            {
            return projects[i].todo
        }
    }
}


export const allNameTodoInProject = (allTodoInProject)=>{
    const vav = allTodoInProject(0)
    const nameNumber = allTodoInProject.length
    const nameList = []
    for( let i = 0 ; i < nameNumber; i++){
        nameList.push(vav[i].name)
    }
    return nameList

}

export const allHabitsName = ()=>{
    let HabitList = JSON.parse(localStorage.getItem("habits"))
    // let habitList = []
    // for (let i =0; i < HabitList.length; i++){
    //     habitList.push(HabitList[i].habitName)
    // }
    return HabitList

}


export const allTasksName = ()=>{
    let taskList = JSON.parse(localStorage.getItem("tasks"))
    return taskList
}

