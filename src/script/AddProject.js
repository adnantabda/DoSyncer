import { todayPage } from "./today"

const addProjectValue = (name , description)=>{

    const projects = JSON.parse(localStorage.getItem("projects"))


    const newProject = {
        projectName : name,
        description : description,
        todo : [],
    }

    projects.push(newProject)
    localStorage.setItem("projects" , JSON.stringify(projects))
}


const addTodoForValue = (projectName , projectDescription) =>{
    const todoName = document.querySelector(".todo-name")
    const descriptionTodo = document.querySelector(".todo-description")
    const date = document.querySelector(".todo-date")
    const priority = document.querySelector(".todo-priority")
    const timeValue = document.querySelector(".todo-time")


    if (todoName.value === "" && descriptionTodo.value === "" &&  date.value  === "" && priority.value === ""){

        todoName.style.border = "1px solid red";

        descriptionTodo.style.border = "1px solid red";

        date.style.border = "1px solid red";

        priority.style.border = "1px solid red";

    } else if ( todoName.value === ""){

        todoName.style.border = "1px solid red";

    } else if (descriptionTodo.value === "" ){
        descriptionTodo.style.border = "1px solid red";
    } else if( date.value === ""){

        date.style.border = "1px solid red";

    }else if (priority.value === ""){
        priority.style.border = "1px solid red";

    }
    else{
        return {
                projectName : projectName, 
                description : projectDescription,
                todo : [
                        {
                            name : todoName.value, 
                            description : descriptionTodo.value, 
                            date : date.value, 
                            time : `${timeValue.value}`,
                            done: false,
                            priority : priority.value
                        }
                    ]
            }
        


        }

    }




const addTodoDom = (projectName , projectDescription)=>{
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
    const addAnotherTodo = document.createElement("button")
    date.setAttribute("type" , "date")


    saveTodo.classList.add("save-todo-btn")
    saveTodo.textContent = "SAVE"
    addAnotherTodo.textContent = "Add Another"


    todoDiv.classList.add("add-todo-div")
    time.classList.add("todo-time")

    time.addEventListener("change" , (e)=>{
        const timer = e.target.value;
        console.log(timer)
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
    todoDiv.appendChild(addAnotherTodo)

    saveTodo.addEventListener("click" , ()=>{
        const newProject = addTodoForValue(projectName , projectDescription)
        const appFace = document.querySelector(".app-face")
        const currentProjects = JSON.parse(localStorage.getItem("projects"))
        currentProjects.push(newProject)
        localStorage.setItem("projects" , JSON.stringify(currentProjects))
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
        // createDomForAddProject()

        appFace.style.display = "block"
        todayPage()

        // console.log(addTodoForValue(projectName, projectDescription))
    })

    return todoDiv


}

export const createDomForAddProject = ()=>{
    const addProject = document.createElement("div")
    const nameProjectDiv = document.createElement("div")
    const projectLabel = document.createElement("label")
    const projectNameInput = document.createElement("input")
    projectNameInput.classList.add("project-name")
    const pop = document.querySelector(".pop-up-div")


    nameProjectDiv.classList.add("add-name-div")
    projectLabel.textContent = "Project Name"



    nameProjectDiv.appendChild(projectLabel)
    nameProjectDiv.appendChild(projectNameInput)

    const descriptionProjectDiv = document.createElement("div")
    const projectLabelDescription = document.createElement("label")
    const projectNameInputDescription = document.createElement("textarea")
    projectNameInputDescription.classList.add("project-description")

    descriptionProjectDiv.classList.add("add-description-div")
    projectLabelDescription.textContent = "Description"

    


    descriptionProjectDiv.appendChild(projectLabelDescription)
    descriptionProjectDiv.appendChild(projectNameInputDescription)



    const buttonProjectDiv = document.createElement("div")
    const addProjectButton = document.createElement("button")
    const addTodoProjectButton = document.createElement("button")


    buttonProjectDiv.classList.add("add-btn-div")
    addProjectButton.textContent = "SAVE"
    addTodoProjectButton.textContent = "Add Todo"
    const appFace = document.querySelector(".app-face")



    buttonProjectDiv.appendChild(addProjectButton)
    buttonProjectDiv.appendChild(addTodoProjectButton)


    addProject.appendChild(nameProjectDiv)
    addProject.appendChild(descriptionProjectDiv)
    addProject.appendChild(buttonProjectDiv)



    projectNameInput.required = true
    projectNameInputDescription.required = true

    addProjectButton.addEventListener("click", () => {

        if (projectNameInput.value === "" && projectNameInputDescription.value === ""){

            projectNameInput.style.border = "1px solid red";

            projectNameInputDescription.style.border = "1px solid red";

        } else if ( projectNameInputDescription.value === ""){

            projectNameInputDescription.style.border = "1px solid red";
        } else if (projectNameInput.value === "" ){

            projectNameInput.style.border = "1px solid red";

            

        } else{

            let name = projectNameInput.value
            let description = projectNameInputDescription.value

            addProjectValue(name , description)
            projectNameInput.value = ""
            projectNameInputDescription.value = ""





        while (appFace.firstChild){
            appFace.removeChild(appFace.firstChild)

        }
        while(pop.firstChild){
            pop.removeChild(pop.firstChild)
        }
        pop.appendChild(createDomForAddProject())
        pop.style.display = "none"

        
        appFace.style.display = "block"
        todayPage() 
        }
    });


    addTodoProjectButton.addEventListener("click" , ()=>{            
        


        const projectName = projectNameInput.value
        const projectDescription = projectNameInputDescription.value
        const popUP = document.querySelector(".pop-up-div")


        if (projectNameInput.value === "" && projectNameInputDescription.value === ""){

            projectNameInput.style.border = "1px solid red";

            projectNameInputDescription.style.border = "1px solid red";

        } else if ( projectNameInputDescription.value === ""){

            projectNameInputDescription.style.border = "1px solid red";
        } else if (projectNameInput.value === "" ){

            projectNameInput.style.border = "1px solid red";

            

        } else{

            while(popUP.firstChild){
                popUP.removeChild(popUP.firstChild)
            }
    
            popUP.appendChild(addTodoDom(projectName , projectDescription))
        }

    })

    return addProject

}

