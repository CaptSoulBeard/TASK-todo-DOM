// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];

// REMOVE ME: SAMPLE FILLING
tasks = [
  { id: 0, title: "Game of thrones", category: "Movies", done: false },
  { id: 1, title: "Toy Story 4", category: "Movies", done: false },
];

categories = ["Movies", "Groceries"];

// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  // implement the delete task.
  // You are given the task id
  a = tasks.find((task) => task.id === taskId);
  a.done = checked;

  renderTasks(tasks, "tasks-list");
  console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  const idNumber = tasks.length;
  const task = {
    id: idNumber,
    title: taskTitle,
    category: selectedCategory,
    done: false,
  };
  tasks.push(task);
  renderTasks(tasks, "tasks-list");

  // alert(`Category: ${selectedCategory} | Task: ${taskTitle}`);
}

function addCategory() {
  const newCategory = getNewCategoryText();
  // continue the code here
  categories.push(newCategory);

  renderCategories(categories, "categories-list");
  renderCategories(categories, "categories-list-filter");

  // alert(`New category was added: ${newCategory}`);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  // continue the code here
  // REMOVE ME: sample alert
  alert(`Category: ${selectedCategory} | done: ${done}`);
}
