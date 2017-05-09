

export const allTodos = ({ todos }) => {
  let ids = Object.keys(todos).map(key => parseInt(key)).sort();
  return ids.map(id => todos[id]);
};
