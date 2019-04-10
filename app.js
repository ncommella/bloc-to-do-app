function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  let toDos = [];
  let idCounter = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if(!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: idCounter
    });

    newToDoText.value = '';
    idCounter += 1;

    renderTheUI();
    console.log(toDos);
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteBtn = document.createElement('button');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      deleteBtn.textContent = "Delete";
      newLi.appendChild(deleteBtn);

      deleteBtn.addEventListener('click', event => {
        toDos = toDos.filter( x => x.id != toDo.id);
        renderTheUI();
      });

    });


  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}
//onReady end bracket

window.onload = function() {
  onReady();
};
