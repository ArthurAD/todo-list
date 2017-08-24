import { getTypes, getTodos } from './requests';
import TodoList from './TodoList';

(async function main() {
  try {
    const types = await getTypes();
    const todos = await getTodos();

    const todoList = new TodoList(todos, types);

    todoList.build();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}());

if (module.hot) {
  module.hot.accept();
}
