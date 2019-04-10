function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  //changed from const to allow filter to work in delete event handler
  let toDos = [];
  //called idCounter for clarity
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

      //delete button event listener
      deleteBtn.addEventListener('click', event => {
        //filters toDos by comparing id to toDo.id
        toDos = toDos.filter( x => x.id != toDo.id);
        renderTheUI();
      });

      checkbox.addEventListener('change', event => {
        toDo.complete = (!toDo.complete);
      });

    });


  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}


window.onload = function() {
  onReady();
};
