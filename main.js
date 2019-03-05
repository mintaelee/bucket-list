// Global variables ftw
let bucket = [];

let isStack = true;

// Set init to run when the window loads.
window.onload = init;

function init() {

    // Set event handlers.
    document.querySelector('#submit')
        .addEventListener('click', addNewItem)

    document.querySelector('#remove')
        .addEventListener('click', removeItem);

    document.querySelector('#toggle')
            .addEventListener('click', toggleQueueAndStack);
}

function addNewItem(event) {
    // Prevent page reload.
    event.preventDefault()
    
    // Get the value from the input field.
    const newItem = document.querySelector('#new-item').value;
    

    // Set the input field back to blank.
    resetInput();

    // Add the item to the <ul>.
    displayItem(newItem);

    // Now comes your part: add the item to the list.
    bucket.push(newItem);

    //Display List Info
    displayList();
}

function displayList(){
    // Display it in next-item if it's the first item:
    // if(bucket.length === 1) { // definitely change that condition!
    //     document.querySelector('#next-item').innerText = newItem; // Replace that empty string with the actual item!
    // } else {
    //     
    if (isStack) {
        document.querySelector('#currentToggle').innerText = 'Stack';
        document.querySelector('#newest-item').innerText = 'Next item to be removed: ' + bucket[bucket.length-1]; // Replace that empty string with the actual item!
    } else {
        document.querySelector('#currentToggle').innerText = 'Queue';
        document.querySelector('#newest-item').innerText = 'Next item to be removed: ' + bucket[0]; // Replace that empty string with the actual item!

    }
    document.querySelector('#next-item').innerText = 'First item on the list: ' + bucket[0];
    
    document.querySelector('#number-of-items').innerText = 'Number of items on the list: ' + bucket.length; // Replace that with the number of items!

}

function removeItem(event) {
    // Prevent page reload.
    event.preventDefault()

    if(isStack) {
        removeLastFromPage();
        // Your code to remove it from the array  goes here!
        bucket.pop();
    } else {
        removeFirstFromPage();
        // Your code to remove it from the array goes here!
        bucket.shift();
    }
    displayList();
}

function toggleQueueAndStack(event) {
    // Prevent page reload.
    event.preventDefault()

    // How can we toggle whether it's a stack or a queue?
    // Your code below!
    if (isStack) {
        isStack = false;
    } else {
        isStack = true;
    }
    displayList();
}

/*

No need to touch anything below!
Feel free to check it out though.

*/

function removeLastFromPage() {
    const items = document.querySelectorAll('li');
    const lastItem = items[items.length - 1];
    lastItem.parentNode.removeChild(lastItem);
}

function removeFirstFromPage() {
    const items = document.querySelectorAll('li');
    const firstItem = items[0];
    firstItem.parentNode.removeChild(firstItem);
}

function resetInput() {
    // Resets input field to blank. No need to add anything here!
    document.querySelector('#new-item').value = '';
}

function displayItem(itemText) {
    // Displays item on list. No need to add anything here!
    const newItem = document.createElement('li');
    newItem.innerText = itemText;
    document.querySelector('#items').appendChild(newItem);
}
