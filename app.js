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

    //create new input
    let checkbox = document.createElement('input');

    //set input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //append checkbox to the li
    newLi.appendChild(checkbox);

    //attach li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

  });

  deleteForm.addEventListener('click', event => {
    //create list of all li's
    let items = toDoList.getElementsByTagName('li');

    //iterate through li's
    for (var i = 0; i < items.length; i++){
      //get input child
      let todoCheck = items[i].getElementsByTagName('input');

      //print checked status
      alert(todoCheck.checked);
    };


  });
}

window.onload = function() {
  onReady();
};
