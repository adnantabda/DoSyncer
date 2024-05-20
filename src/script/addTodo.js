const popUp = document.querySelector(".pop-up-div")
import { allProjectName } from "./todayLog"
import { addTodoDom } from "./AddProject"
import { createDomForAddProject } from "./AddProject"
import { todayPage } from "./today"



const toDoDetail = (projectName , projectDescription)=>{
    const todoDiv = document.createElement("div")
    const todoName = document.createElement("input")
    todoName.classList.add("todo-name")
    const date = document.createElement("input")
    const time = document.createElement("input")
    const timeLabel = document.createElement("label")
    time.setAttribute("type" , "time")
    date.classList.add("todo-date")
    const description = document.createElement("textarea")
    description.classList.add("todo-description")
    const priority = document.createElement("input")
    priority.classList.add("todo-priority")
    const saveTodo = document.createElement("button")
    // const addAnotherTodo = document.createElement("button")
    date.setAttribute("type" , "date")


    saveTodo.classList.add("save-todo-btn")
    saveTodo.textContent = "SAVE"
    // addAnotherTodo.textContent = "Add Another"


    todoDiv.classList.add("add-todo-div-section")
    time.classList.add("todo-time")

    time.addEventListener("change" , (e)=>{
        const timer = e.target.value;
        // console.log(timer)
    })
    time.addEventListener("focus", () => {
        time.style.border = ""; // Remove the border style when the input is focused
    });
    
    time.addEventListener("change", () => {
        time.style.border = ""; // Remove the border style when the input value changes
    });


    time.value = '12:00'


    const todoNameLabel = document.createElement("label")
    const todoDateLabel =  document.createElement("label")
    const todoDescriptionLabel =  document.createElement("label")
    const todoPriorityLabel =  document.createElement("label")

    todoNameLabel.textContent = "Todo Name"
    todoDateLabel.textContent = "Date"
    timeLabel.textContent = "Time"
    todoDescriptionLabel.textContent = "Description"
    todoPriorityLabel.textContent = "Priority"

    todoDiv.appendChild(todoNameLabel)
    todoDiv.appendChild(todoName)
    todoDiv.appendChild(timeLabel)
    todoDiv.appendChild(time)
    todoDiv.appendChild(todoDateLabel)
    todoDiv.appendChild(date)
    todoDiv.appendChild(todoDescriptionLabel)
    todoDiv.appendChild(description)
    todoDiv.appendChild(todoPriorityLabel)
    todoDiv.appendChild(priority)
    todoDiv.appendChild(saveTodo)
    // todoDiv.appendChild(addAnotherTodo)

    saveTodo.addEventListener("click" , ()=>{
        const newTodo = 
            {
                "name" : todoName.value, 
                "description" : description.value, 
                "date" : date.value, 
                "time" : `${time.value}`,
                "done": false,
                "priority" : priority.value
            }
        

        let lengthProj = allProjectName().length
        
        let projects = allProjectName()
        for (let i = 0 ; i < lengthProj ; i++){
            
            if (allProjectName()[i]["projectName"] === projectName){
                let listTodo  = allProjectName()[i]['todo']
                listTodo.push(newTodo)
                projects[i]['todo'] = listTodo
                
            }
        }

        const appFace = document.querySelector(".app-face")
        localStorage.setItem("projects" , JSON.stringify(projects))


        const pop = document.querySelector(".pop-up-div")

        while (appFace.firstChild){
            appFace.removeChild(appFace.firstChild)

        }
        while(pop.firstChild){
            pop.removeChild(pop.firstChild)
        }
        pop.appendChild(createDomForAddProject())
        todoName.value = ""
        time.value = "12:00"
        date.value = ""
        priority.value = ""
        description.value = ""
        pop.style.display = "none"
        appFace.style.display = "block"
        todayPage()
    })

    return todoDiv

}



export const addTodo = ()=>{
    while(popUp.firstChild){
        popUp.removeChild(popUp.firstChild)
    }
    popUp.style.display = "flex"
    popUp.style.flexDirection = "column"
    popUp.style.textAlign = "center"
    const ul = document.createElement("ul")
    const projectLength = allProjectName().length
    ul.classList.add("todo-lister")
    // console.log(projectLength)
    const h2 = document.createElement("h3")
    h2.textContent = "Choose Project! "
    h2.style.margin = "0"
    h2.style.color = "green"
    popUp.appendChild(h2)
    if (projectLength === 0 ){
        h2.textContent = "You Don't Have Any Project First Create Project "
        h2.style.padding = "24px"
    }else{

        for(let i = 0 ; i < projectLength ; i++){
            const li = document.createElement("li")
            li.textContent = allProjectName()[i]["projectName"]
            li.classList.add("todo-list")
            ul.appendChild(li)
            // console.log(allProjectName()[i].projectName)

            li.addEventListener("click" , ()=>{
                while(popUp.firstChild){
                    popUp.removeChild(popUp.firstChild)
                }
                let projectName = allProjectName()[i]["projectName"]
                let projectDescription = allProjectName()[i]["description"]

                popUp.appendChild(toDoDetail(projectName , projectDescription))
            })
        }
        popUp.appendChild(ul)
    }
}