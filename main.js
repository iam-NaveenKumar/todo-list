const todolist = [];

to_do_list();

function to_do_list() {
  let list_shown = "";

  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];

    const { name, date } = todo;

    const html = `
    <div class="name">${name}</div>
    <div class="date">${date}</div>
    <button onclick=" todolist.splice(${i},1); to_do_list();" class="delete-btn" >delete</button>
    `;

    list_shown += html;
  }

  document.querySelector(".todo-list").innerHTML = list_shown;
}

function toadd() {
  const inputelement = document.querySelector(".input-todo");
  const name = inputelement.value;

  const date = document.querySelector(".todo-date").value;

  todolist.push({ name, date });

  inputelement.value = "";

  to_do_list();
}
