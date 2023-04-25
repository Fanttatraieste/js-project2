//variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
//console.log(addTask);


//event listener for add button

addTask.addEventListener('click', () => {

    let task = document.createElement('div');
    task.classList.add('task');
    
    //console.log(task);
    //console.log(addTask);


    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.append(li);

    //Check button
    let checkButton = document.createElement('button');
    checkButton.innerHTML = `<svg class="fa-solid fa-tick">
    <use href="./img/symbol-defs.svg#icon-tick"></use>
        </svg>`
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    //delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<svg class="fa-solid fa-bin">
    <use href="./img/symbol-defs.svg#icon-bin"></use>
        </svg>`
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if (inputTask.value === "")
        alert('Please enter a task');
    else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkButton.addEventListener('click', () => {

        if (checkButton.parentElement.style.textDecoration === "line-through")
             checkButton.parentElement.style.textDecoration = "none";
        else 
             checkButton.parentElement.style.textDecoration = "line-through";
    
    });
    
    deleteButton.addEventListener('click', (e) => {
    
        let target = e.target;
        
        if (target.nodeName === "BUTTON")
            {
            target.parentElement.remove();
        }
        if (target.nodeName === "SVG")
            {
            target.parentElement.parentElement.remove();
        }
        if (target.nodeName === "use")
            {
            target.parentElement.parentElement.parentElement.remove();
        }
    })
    

});


