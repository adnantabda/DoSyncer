import {projects , habits , tasks } from './data.js'



export const allProjectName = ()=>{
    const projectsNumber = projects.length
    const projectsList = []
    for(let i = 0 ; i < projectsNumber ; i++){
        projectsList.push(projects[i].projectName)
    }

    return projectsList

}

export const allTodoInProject = (projectNumber)=>{
    return projects[projectNumber].todo
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
    let habitList = []
    for (let i =0;i< habits.length; i++){
        habitList.push(habits[i].name)
    }
    return habitList

}


export const allTasksName = ()=>{
    let taskList = []
    for (let i =0;i< tasks.length; i++){
        taskList.push(tasks[i].name)
    }
    return taskList
}

