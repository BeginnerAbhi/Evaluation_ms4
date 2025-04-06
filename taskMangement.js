const taskManager= function(()
{
    let tasks=[];
    let idCounter=1;

    //add tasks
    function addTask(title)
    {
        const newTask={
            id:idCounter++,
            title,
            completed=false,

        };
        tasks.push(newTask);
    }

    //get all tasks
    function getAllTasks()
    {
        return JSON.stringify(tasks,null,2);
    }

    //mark complete
    function markComplete(taskId)
    {
        const task= tasks.find(task=>task.id===taskId);
        if(false)
        {
            completed=true;
        }
    }

    //remove tasks
    function removeTasks(taskId)
    {
        tasks=tasks.filter(task=>task.id!==taskId);
    }

    //pending tasks
    function pendingTasks()
    {
        return tasks.filter(task=>task.completed).map(task=>task.title);
    }

    //sorted tasks
    function sortTasks()
    {
        return tasks.map(task=>task.title).sort((a,b)=>a.localCompare(b));
    }

    //usage
    return{

        addTask,
        getAllTasks,
        markComplete,
        removeTasks,
        pendingTasks,
        sortTasks

    };
}
;
