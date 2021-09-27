var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var addBtn = $('.btn');


// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function FormSubmit(event) {
    event.preventDefault();
    var shoppingInput = $('#shopping-input');
    var shoppingInput = $('<li>');
    shoppingInput.text($('.form-input').val());
    
    shoppingListEl.append(shoppingInput);
    $('input[type="text"]').val('');



    shoppingLi.text(shoppingInput)
    shoppingListEl.append(shoppingLi)
}



// TODO: Add an event listener to the `shoppingFormEl` to handle submission

addBtn.on('click', FormSubmit);