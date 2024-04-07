const LS_KEY = "TASKS-ts-tutorial-base";

const taskForm = document.querySelector<HTMLFormElement>(".form")!;
const formInput = document.querySelector<HTMLInputElement>(".form-input")!;

const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask);

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem(LS_KEY);

  return storedTasks ? JSON.parse(storedTasks) : [];
}

function createTask(event: SubmitEvent) {
  event.preventDefault();

  const taskDescription = formInput.value;

  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };

    //   add task to list
    addTask(task);

    //   render task
    renderTask(task);

    //   update local storage
    updateStorage();

    formInput.value = "";
    return;
  }

  alert("Please enter a task description");
}

taskForm.addEventListener("submit", createTask);

function addTask(task: Task): void {
  tasks.push(task);

  console.log("Tasks: ", tasks);
}

function renderTask(task: Task): void {
  const TaskElement = document.createElement("li");
  TaskElement.textContent = task.description;

  // checkbox
  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;

  // toggle checkbox
  taskCheckbox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  TaskElement.appendChild(taskCheckbox);

  taskListElement?.appendChild(TaskElement);
}

function updateStorage(): void {
  localStorage.setItem(LS_KEY, JSON.stringify(tasks));
}
