const addNewTask=()=>{
    let task=document.createElement("li")
    task.innerText=document.querySelector("#newTask").value
    task.classList.add("task")
    document.querySelector("#newTask").value=""
    //console.log("task",task)
    document.querySelector("#myTaskList").appendChild(task)
}

const removeLast=()=>{
    document.querySelector("#myTaskList").lastChild.remove()
}

const removeFirst=()=>{
    document.querySelector("#myTaskList").firstChild.remove()
}

const getTasksAsArray=()=>{
    let tasks=document.querySelector("#myTaskList").children
    for (const task in tasks) {
    //   console.log(task)
    }
    return tasks
}

const changeTaskBackgroundColor=(color)=>{
    let sheet=document.createElement("style")
    sheet.innerHTML=".task{background-color:"+color+"}"
    //console.log(typeof(document.createElement("body")))
    document.querySelector("body").appendChild(sheet)
}

const bubbleSort=()=>{
    const tasks=getTasksAsArray()
    console.log(tasks)
    let sorted
    do {
        sorted=true
        for (let i = 1; i < tasks.length; i++) {
            if(tasks[i].innerText<tasks[i-1].innerText){
                //let aux
                tasks[i].parentNode.insertBefore(tasks[i],tasks[i-1])
                sorted=false
            }
        }
        for (let i = 0; i < tasks.length; i++) {
            console.log(tasks[i].innerText) 
        }
    } while (!(sorted));
        
}