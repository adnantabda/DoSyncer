let projects = [
    {
        projectName : "First Project", 
        description : "This the project of life that I am working on ", 
        todo : 
        [
        {   
            name : "First Todo Of Project one",
            date : "23-14-2024",
            done : false,
            description : "this the project that I will work on in the distance future if i allah wills", 
            priority : 2,
        },
        {
            name : "Second Todo of Project one",
            date : "23-14-2024",
            done : false,
            description : "this the project that I will work on in the distance future if i allah wills", 
            priority : 2,
        },

        {
            name : "Third Todo of Project one",
            date : "23-14-2024",
            done : false,
            description : "this the project that I will work on in the distance future if  allah wills", 
            priority : 2,
        }
        
        ]
    },
    {
        projectName : "Second Project", 
        description : "This the project of life that I am working on ", 
        todo : 
        [
        {   
            name : "First Todo Of Project Two",
            date : "23-14-2024",
            done : false,
            description : "this the project that I will work on in the distance future if i allah wills", 
            priority : 2,
        },
        {
            name : "Second Todo of Project two",
            date : "23-14-2024",
            done : false,
            description : "this the project that I will work on in the distance future if i allah wills", 
            priority : 2,
        }, 
        {
            name : "Third Todo of Project two",
            date : "23-14-2024",
            done : false,
            description : "this the project that I will work on in the distance future if  allah wills", 
            priority : 2,
        }


        ]
    },
    {
        projectName : "Third Project", 
        description : "This the project of life that I am working on ", 
        todo : 
        [
        {   
            name : "First Todo Of Project one",
            date : "23-14-2024",
            done : false,
            description : "this the project that I will work on in the distance future if i allah wills", 
            priority : 2,
        },
        {
            name : "Second Todo of Project one",
            date : "23-14-2024",
            done : false,
            description : "this the project that I will work on in the distance future if i allah wills", 
            priority : 2,
        },

        {
            name : "Third Todo of Project one",
            date : "23-14-2024",
            done : false,
            description : "this the project that I will work on in the distance future if  allah wills", 
            priority : 2,
        }


        ]
    },
    {
        projectName : "Fourth Project", 
        description : "This the project of life that I am working on ", 
        todo : 
        [
        {   
            name : "First Todo Of Project Two",
            date : "23-14-2024",
            done : false,
            description : "this the project that I will work on in the distance future if i allah wills", 
            priority : 2,
        },
        {
            name : "Second Todo of Project two",
            date : "23-14-2024",
            done : false,
            description : "this the project that I will work on in the distance future if i allah wills", 
            priority : 2,
        }, 
        {
            name : "Third Todo of Project two",
            date : "23-14-2024",
            done : false,
            description : "this the project that I will work on in the distance future if  allah wills", 
            priority : 2,
        }


        ]
    },
]

let habits = [
    {
        name : "1st habit exercise",
        day : ['Monday' , 'Tuesday' , 'Friday'],
        description : "This Habit serves as testimonial to my strength" , 

    } ,
    {
        name : "2nd habit Don't drink alcohol",
        day : ['Monday' , 'Tuesday' , 'Friday' , 'Thursday' , 'Saturday' , 'Sunday'],
        description : "This Habit serves as testimonial to my strength" , 

    },    
    {
        name : "1st habit exercise",
        day : ['Monday' , 'Tuesday' , 'Friday'],
        description : "This Habit serves as testimonial to my strength" , 

    } ,
    
]



let tasks = [
    {
        name : '1st task Taking care of baby', 
        range : [4 , "hr"], 
        description : "taking care of a baby for 4 hours after his mother went to super market", 
        done : false
    },
    {
        name : '2st task Taking care of baby', 
        range : [4 , "hr"], 
        description : "taking care of a baby for 4 hours after his mother went to super market", 
        done : false
    }, 
    {
        name : '1st task Taking care of baby', 
        range : [4 , "hr"], 
        description : "taking care of a baby for 4 hours after his mother went to super market", 
        done : false
    },
    

]


// export const projectsJSon = ()=>{
//     const projectsInJson = JSON.stringify(projects)
//     localStorage.setItem("projects" , projectsInJson)
//     return projectsInJson

// }


export const habitsJSon = ()=>{
    const tasksInJson = JSON.stringify(tasks)
    localStorage.setItem("habits" , tasksInJson)
    return tasksInJson
}

export const tasksJSon = ()=>{
    const habitsInJson = JSON.stringify(habits)
    localStorage.setItem("tasks" , habitsInJson)
    return habitsInJson
}
