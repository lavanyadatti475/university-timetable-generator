// Get the form and timetable elements
const form = document.getElementById('subject-form');
const timetable = document.getElementById('timetable');

// Function to update the timetable with the subject
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form inputs
    const time = document.getElementById('time').value;
    const day = document.getElementById('day').value;
    const subject = document.getElementById('subject').value;

    // Find the corresponding table cell based on the selected day and time
    const dayColumn = timetable.querySelectorAll(`.${day}`);
    let targetCell = null;
    
    // Match the time slot to the correct row
    dayColumn.forEach(cell => {
        if (cell.parentElement.querySelector('td').textContent === time) {
            targetCell = cell;
        }
    });

    // If the cell is found, update it with the subject
    if (targetCell) {
        targetCell.textContent = subject;
        targetCell.style.backgroundColor = '#aaffaa'; // Optional: Change background on input
    }
});
