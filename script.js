const thingsToRemoveIfIGrad = document.querySelectorAll('.remove-after-graduation');

// Function to check if today's date is at the end of the 2024-2025 school year
function isEndOfSchoolYear() {
    // Define the end date of the 2024-2025 school year
    const endDate = new Date('2025-06-15'); // Example: June 15, 2025

    // Get today's date
    const today = new Date();

    // Set the time of endDate and today to the start of the day for accurate comparison
    endDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    // Check if today's date is on or after the end date
    if (today >= endDate) {
        thingsToRemoveIfIGrad.forEach( (item) => {item.innerHTML =""});
    } 
}

// Call the function to perform the check
isEndOfSchoolYear();


//Yes i made this using gpt