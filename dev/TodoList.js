import { getFormattedDate, getStringOfCurrentDate } from './utils/date';
import { sortNumbers } from './utils/sort';
import { generateIdObject } from './utils/helpers';

class TodoList {
  constructor(todos, types) {
    TodoList.addTypes(types);

    this.todos = todos;
    this.types = generateIdObject(types);
    this.tasks = document.querySelector('.tasks');

    this.sort();
    this.addTaskDoneEvent();
    this.addNewTaskEvents();
  }

  static addTypes(types) {
    document.querySelector('.new-task__type').innerHTML = types.map(
      t => `<option value="${t.id}">${t.name}</option>`,
    ).join('');
  }

  addTaskDoneEvent() {
    this.tasks.addEventListener('click', (e) => {
      const target = e.target;
      if (!target.classList.contains('task__done')) return;

      const index = target.parentElement.dataset.index;

      const currentTask = this.todos[index];

      currentTask.done = !currentTask.done;
      target.classList.toggle('fa-check-square-o');
      target.classList.toggle('fa-square-o');
    });
  }

  addNewTaskEvents() {
    const newTask = document.querySelector('.new-task');
    const addTask = newTask.querySelector('.new-task__add');
    const taskName = newTask.querySelector('.new-task__name');
    const taskType = newTask.querySelector('.new-task__type');
    const taskDate = newTask.querySelector('.new-task__date');
    const taskTime = newTask.querySelector('.new-task__time');

    addTask.addEventListener('click', () => {
      const date = (taskDate.value || getStringOfCurrentDate()).replace(/-/g, '/');
      const time = taskTime.value || '00:00:00';

      this.todos.push({
        created_at: +new Date(),
        done: false,
        expires_at: +new Date(`${date} ${time}`),
        task: taskName.value,
        type: taskType.value,
      });

      taskName.value = '';
      taskDate.value = '';
      taskTime.value = '';
      taskType.value = 1;

      this.sort();
      this.build();
    });

    taskTime.addEventListener('change', () => {
      const val = taskTime.value;

      if (/^\d\d?:\d\d?:\d\d?$/.test(val)) {
        const parts = val.split(':');
        const h = parts[0] > 23 ? 23 : parts[0];
        const m = parts[1] > 59 ? 59 : parts[1];
        const s = parts[2] > 59 ? 59 : parts[2];
        taskTime.value = `${h}:${m}:${s}`;
        return;
      }
      taskTime.value = '';
    });

    taskDate.addEventListener('change', () => {
      const val = taskDate.value;
      if (!/^\d{4}-\d\d?-\d\d?$/.test(val)) {
        taskDate.value = '';
      }
    });
  }

  generateItemHTML(todo, index) {
    return `
      <div class="task" data-index="${index}">
        <div class="task__done fa fa-${todo.done ? 'check-' : ''}square-o"></div>
        <div class="task__date">${getFormattedDate(todo.created_at)}</div>
        <div class="task__date">${getFormattedDate(todo.expires_at)}</div>
        <div class="task__type">${this.types[todo.type].name}</div>
        <div class="task__name">${todo.task}</div>
      </div>
    `;
  }

  build() {
    const list = this.todos.map(this.generateItemHTML.bind(this));
    this.tasks.innerHTML = list.join('');
  }

  sort() {
    this.todos.sort((t1, t2) => sortNumbers(t1.expires_at, t2.expires_at));
  }
}

export default TodoList;
