document.addEventListener('DOMContentLoaded', () => {
    const tasksList = document.getElementById('tasks__list');
    const taskInput = document.getElementById('task__input');
    const taskForm = document.getElementById('tasks__form');

    function addTask(title) {
        const taskTemplate = `
      <div class="task">
        <div class="task__title">${title}</div>
        <a href="#" class="task__remove">&times;</a>
      </div>
    `;
        tasksList.insertAdjacentHTML('beforeend', taskTemplate);
        taskInput.value = '';
    }

    function removeTask(taskElement) {
        taskElement.remove();
    }

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskTitle = taskInput.value.trim();
        if (taskTitle !== '') {
            addTask(taskTitle);
        }
    });

    tasksList.addEventListener('click', (event) => {
        const clickedElement = event.target;
        if (clickedElement.classList.contains('task__remove')) {
            const taskElement = clickedElement.closest('.task');
            removeTask(taskElement);
        }
    });
});
