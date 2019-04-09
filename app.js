function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const deleteForm = document.getElementById('deleteForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create new li
    let newLi = document.createElement('li');

    //give li MDL class
    newLi.className = "mdl-list__item";

    //create new input
    let checkbox = document.createElement('input');

    //set input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //append checkbox to the li
    newLi.appendChild(checkbox);

    //create & set text of delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    //give delete button MDL class
    deleteBtn.className = "mdl-button mdl-js-button mdl-button--accent";

    //append delete button to li
    newLi.appendChild(deleteBtn);

    //attach li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    deleteBtn.addEventListener('click', function(event){
      toDoList.removeChild(this.parentElement);
    });

  });

}

window.onload = function() {
  onReady();
};
