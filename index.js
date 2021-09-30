// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];

// REMOVE ME: SAMPLE FILLING
tasks = [
  { id: 0, title: "Game of thrones", category: "Movies", done: false },
  { id: 1, title: "Toy Story 4", category: "Groceries", done: false },
];

categories = ["Movies", "Groceries"];

// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  selectedTask = tasks.find((task) => task.id === taskId);
  selectedTask.done = checked;

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
  categories.push(newCategory);

  renderCategories(categories, "categories-list");
  renderCategories(categories, "categories-list-filter");

  // alert(`New category was added: ${newCategory}`);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();

  complete = tasks.filter(
    (task) => task.category === selectedCategory && task.done === done
  );

  renderTasks(complete, "tasks-list");
}
