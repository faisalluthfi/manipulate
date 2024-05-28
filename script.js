// script.js

// Daftar nama tamu
const guestList = ['tiearth', 'john', 'jane', 'alice', 'bob', 'partner'];

// Function to get the value of a query parameter by name
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get the 'to' parameter from the URL
const guestNamesParam = getQueryParam('to');

// Select the div with the class 'guest-name'
const guestNameDiv = document.querySelector('.guest-name');

// Function to validate guest names
function validateGuestNames(names) {
    return names.every(name => guestList.includes(name.toLowerCase()));
}

// Check if the guestNamesParam is present and valid
if (guestNamesParam) {
    // Split the parameter by '-' to get individual names
    const guestNames = guestNamesParam.split('-');
    
    // Validate the guest names
    if (validateGuestNames(guestNames)) {
        // Capitalize the first letter of each name and join them with ' and '
        const displayNames = guestNames.map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(' and ');
        guestNameDiv.textContent = `Welcome, ${displayNames}!`;
    } else {
        guestNameDiv.textContent = 'Welcome, Guest!';
    }
} else {
    guestNameDiv.textContent = 'Welcome, Guest!';
}
