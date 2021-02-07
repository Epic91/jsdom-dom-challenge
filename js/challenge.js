//As a user, I should see the timer increment every second once the page has loaded.
    //Step 1: Find the node where the numbers are displayed:
const counterView = document.getElementById('counter');
    //Step 2: display the numbers inside on the h1 node with the id of 'counter'
    //Step 4: counterNumber is coming in as a string, therefore we need to use parseInt to convert that string into an integer 
let counterNumber = parseInt(counterView.innerText);
//console.log(counterNumber);

    //Step 3: we work on the counter function, what do we want it to do:
        //increment every second
        //display that number inside of h1 node
function incrementCounter() {
    counterNumber += 1;
    counter.innerText = counterNumber;
}


// setInterval(incrementCounter, 1000)





// //this section get the plus element
// //we need to get the plus element
// const plusButton = document.getElementById('plus')
// // this section adds action 
// plusButton.addEventListener('click', incrementCounter)
