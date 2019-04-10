function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  //changed from const to allow filter to work in delete event handler
  let toDos = [];
  //called idCounter for clarity
  let idCounter = 0;

  function checkStorage(){
    if (localStorage.getItem("currentList") !== null){
      let arrString = localStorage.getItem("currentList");
      toDos = JSON.parse(arrString);

      //correctly updates idCounter to avoid double deleting
      idCounter = toDos[toDos.length-1].id + 1;
    }
  }

  checkStorage();

  //puts current toDos array into local storage
  function storeToDos() {
    let arrString = JSON.stringify(toDos);
    localStorage.setItem("currentList", arrString);
  }

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

    storeToDos();
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

      //renders checks correctly upon loading from storage
      toDo.complete ? checkbox.checked = true : checkbox.checked = false;

      //delete button event listener
      deleteBtn.addEventListener('click', event => {
        //filters toDos by comparing id to toDo.id
        toDos = toDos.filter( x => x.id != toDo.id);

        storeToDos();
        renderTheUI();
      });

      checkbox.addEventListener('change', event => {
        toDo.complete = (!toDo.complete);
        storeToDos();
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
