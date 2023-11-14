/*it makes sure that the whole document is loaded before executing the code*/
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('favchap');//creates the input variable
    const addButton = document.querySelector('button');//creates the button variable
    const list = document.getElementById('list');//creates the list variable

    //all the code is based on the "click" event
    addButton.addEventListener('click', function() {
        if (input.value.trim() === '') {//checks if the input is empty
            alert('Please enter a book and chapter.');//displays an alert message if the input is empty
            input.focus();//focuses the input field if the input is empty
            return;//
        }

        const li = document.createElement('li');//creates the li variable based on the li element in the document
        const deleteButton = document.createElement('button');//creates the delete button variable 
        
        li.textContent = input.value;//sets the text content of the li element to the input value
        deleteButton.textContent = '❌';//sets the text content of the delete button to the ❌
        deleteButton.classList.add('delete');//adds the delete class to the delete button
        
        deleteButton.addEventListener('click', function() {//adds an event listener to the delete button
            li.remove();//removes the li element when the delete button is clicked
            input.focus();
        });
        
        li.appendChild(deleteButton);//appends the delete button to the li element 
        list.appendChild(li);//appends the li element to the list element 
        
        input.value = '';//empties the input field so that the user can enter another book and chapter
        input.focus();//focuses the input field so that the user can enter another book and chapter
    });
});
