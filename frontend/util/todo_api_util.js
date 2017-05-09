export const getTodos =  () => (
  $.ajax({
    url: 'api/todos',
    method: 'GET'
  })
);
