let tasks = [];
let completedTasks = [];

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const task = {
            text: taskText,
            date: new Date().toLocaleString()
        };
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
}

function completeTask(index) {
    const task = tasks.splice(index, 1)[0];
    task.completedDate = new Date().toLocaleString();
    completedTasks.push(task);
    renderTasks();
    renderCompletedTasks();
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task.text} <span>(${task.date})</span>
            <button onclick="completeTask(${index})">Complete</button>
        `;
        taskList.appendChild(li);
    });
}

function renderCompletedTasks() {
    const completedList = document.getElementById('completed-list');
    completedList.innerHTML = '';
    completedTasks.forEach(task => {
        const li = document.createElement('li');
        li.classList.add('completed');
        li.innerHTML = `
            ${task.text} <span>(${task.completedDate})</span>
        `;
        completedList.appendChild(li);
    });
}