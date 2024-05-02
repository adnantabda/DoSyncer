import  {navCreate}  from "./today.js";
import {todayDate} from "./today.js";
import {allTodoInProject, displayProjects }from './todayLog.js'
import { allTodoName } from "./todayLog.js";
import { allNameTodoInProject } from "./todayLog.js";
import { listOfActions } from "./today.js";
import { allHabitsName } from "./todayLog.js";
import { footer } from "./today.js";
import {menuShow } from "./menu.js"



const appFace = document.querySelector(".app-face")



navCreate()
console.log("working")
todayDate()
console.log("working 2")
console.log(allTodoInProject(0))

console.log(allTodoInProject.length)
console.log(allNameTodoInProject(allTodoInProject))
listOfActions()
console.log(allHabitsName())
footer()

