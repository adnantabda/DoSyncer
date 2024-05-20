import "../style/today.scss"
import  {navCreate}  from "./today.js";
import {todayDate} from "./today.js";
import {allTodoInProject, displayProjects }from './todayLog.js'
import { allTodoName } from "./todayLog.js";
import { allNameTodoInProject } from "./todayLog.js";
import { listOfActions } from "./today.js";
import { allHabitsName } from "./todayLog.js";
import { footer } from "./today.js";
import {menuShow } from "./menu.js"
import { todayPage } from "./today.js";
import { createDomForAddProject } from "./AddProject.js";
import { addTaskDom } from "./addTask.js";



const popUp = document.querySelector(".pop-up-div")


const appFace = document.querySelector(".app-face")

todayPage()
popUp.appendChild(createDomForAddProject())

