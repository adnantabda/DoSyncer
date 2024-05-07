

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


const addTodoDom = ()=>{
    const todoDiv = document.createElement("div")
    const todoName = document.createElement("input")
    const date = document.createElement("input")
    const description = document.createElement("textarea")
    const priority = document.createElement("input")
    const saveTodo = document.createElement("button")
    const addAnotherTodo = document.createElement("button")


    saveTodo.classList.add("save-todo-btn")
    saveTodo.textContent = "SAVE"
    addAnotherTodo.textContent = "Add Another"


    todoDiv.classList.add("add-todo-div")


    const todoNameLabel = document.createElement("label")
    const todoDateLabel =  document.createElement("label")
    const todoDescriptionLabel =  document.createElement("label")
    const todoPriorityLabel =  document.createElement("label")

    todoNameLabel.textContent = "Todo Name"
    todoDateLabel.textContent = "Date"
    todoDescriptionLabel.textContent = "Description"
    todoPriorityLabel.textContent = "Priority"

    todoDiv.appendChild(todoNameLabel)
    todoDiv.appendChild(todoName)
    todoDiv.appendChild(todoDateLabel)
    todoDiv.appendChild(date)
    todoDiv.appendChild(todoDescriptionLabel)
    todoDiv.appendChild(description)
    todoDiv.appendChild(todoPriorityLabel)
    todoDiv.appendChild(priority)
    todoDiv.appendChild(saveTodo)
    todoDiv.appendChild(addAnotherTodo)



    return todoDiv


}



const addTodoForValue = () =>{

}

export const createDomForAddProject = ()=>{
    const addProject = document.createElement("div")
    const nameProjectDiv = document.createElement("div")
    const projectLabel = document.createElement("label")
    const projectNameInput = document.createElement("input")


    nameProjectDiv.classList.add("add-name-div")
    projectLabel.textContent = "Project Name"



    nameProjectDiv.appendChild(projectLabel)
    nameProjectDiv.appendChild(projectNameInput)

    const descriptionProjectDiv = document.createElement("div")
    const projectLabelDescription = document.createElement("label")
    const projectNameInputDescription = document.createElement("textarea")

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



        }





    });


    addTodoProjectButton.addEventListener("click" , ()=>{            
        
        console.log("We Entered 1")

        const popUP = document.querySelector(".pop-up-div")

        while(popUP.firstChild){
            console.log("We Entered")
            popUP.removeChild(popUP.firstChild)
        }
        console.log("We Entered 2")

        popUP.appendChild(addTodoDom())

    })

    return addProject




}

