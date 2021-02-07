//First Deliverable: As a user, I should see the timer increment every second once the page has loaded.
    //Step 1: Find the node where the numbers are displayed:
const counterView = document.getElementById('counter');
    //Step 2: display the numbers inside on the h1 node with the id of 'counter'
    //Step 4: counterNumber is coming in as a string, therefore we need to use parseInt to convert that string into an integer 
let counterNumber = parseInt(counterView.innerText);
let likesCounter = 0

function likeReset() {
    likesCounter = 0
}
    //Step 3: we work on the counter function, what do we want it to do:
        //increment +=1
        //display that number inside of h1 node
function incrementCounter() {
    counterNumber += 1;
    counter.innerText = counterNumber;
}

    //Step 9: We need to create a function for the minus button
function decrementCounter() {
    counterNumber -= 1;
    counter.innerText = counterNumber;
}

    //Step 13: create a function to display likes
function displayLikes() {
    if (likesCounter == 0) {
        likesCounter += 1;
        let newLi = document.createElement('li')
        newLi.innerText = `${counterNumber} has ${likesCounter} likes`
        likesContainer.appendChild(newLi)
    } else {
        likesCounter += 1;
        likesContainer.lastChild.innerText = `${counterNumber} has ${likesCounter} likes`
    }
}

    //Step 5: Because we want it to increment every second we need to add setinterval which will call the function until clearinterval is called or the window is closed
setInterval(function() {
    incrementCounter(),
    likeReset()
}, 1000)

    //Step 6: Find the node where the + button is
const plusBtn = document.getElementById('plus')
//Step 8: Find the node where the - button is
const minusBtn = document.getElementById('minus')
//Step 12: Grab the ul node with a CLASS of likes
const likesContainer = document.querySelector('.likes')
//Step 11: Find the node where the like button is
const heartBtn = document.getElementById('heart')



    //Step 7: Give that button an action
plusBtn.addEventListener('click', incrementCounter)
    //Step 10: Give the - button an action
minusBtn.addEventListener('click', decrementCounter)
//Step 13: Give the heartBtn an action
heartBtn.addEventListener('click', displayLikes)
//Step 15: give the pause button an action



