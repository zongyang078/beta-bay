/*** Dark Mode ***
  Purpose:
  - Toggle dark mode theme on the website
  Done:
  - [x] Project 5 (REQUIRED FEATURE)
***/

let themeButton = document.getElementById('theme-button');

const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    document.documentElement.classList.toggle('dark-mode');
}

themeButton.addEventListener('click', toggleDarkMode);


/*** Form Handling ***
  Purpose:
  - When the user submits the RSVP form, the name and city they
    entered should be added to the list of participants.
  Done:
  - [x] Project 6 (REQUIRED FEATURE)
  - [x] Project 6 (STRETCH FEATURE)
  - [x] Project 7 (REQUIRED FEATURE) — removed event listener, moved to Form Validation
  TODO:
  - [ ] Project 9 (REQUIRED FEATURE)
***/

const rsvpButton = document.getElementById('rsvp-button');
let count = 3;

// addParticipant() is now called by validateForm() instead of directly by the event listener
const addParticipant = () => {
    let name = document.getElementById('rsvp-name').value;
    let city = document.getElementById('rsvp-state').value;

    let newParticipant = document.createElement('p');
    newParticipant.textContent = '🪨 ' + name + ' from ' + city + ' has RSVP\'d.';

    let participantsDiv = document.querySelector('.rsvp-participants');
    participantsDiv.appendChild(newParticipant);

    // Update the RSVP count
    let oldCount = document.getElementById('rsvp-count');
    oldCount.remove();

    count = count + 1;

    let newCount = document.createElement('p');
    newCount.id = 'rsvp-count';
    newCount.textContent = '🧗 ' + count + ' climbers are signed up!';
    participantsDiv.appendChild(newCount);
};

// Event listener removed here — now handled in Form Validation section below


/*** Form Validation ***
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants
  - Validates that all inputs are at least 2 characters long
  - Validates that the email input contains an @ symbol (stretch feature)
  Done:
  - [x] Project 7 (REQUIRED FEATURE)
  - [x] Project 7 (STRETCH FEATURE)
  TODO:
  - [ ] Project 9 (REQUIRED FEATURE)
***/

// Step 1: We don't need to select the form button again — we already did in Form Handling

// Step 2: Write the callback function
const validateForm = () => {
    let containsErrors = false;
    var rsvpInputs = document.getElementById("rsvp-form").elements;

    // Loop through all inputs and validate the value of each input
    for (let i = 0; i < rsvpInputs.length; i++) {
        if (rsvpInputs[i].value.length < 2) {
            // Input is too short — mark as error
            containsErrors = true;
            rsvpInputs[i].classList.add("error");
        } else {
            // Input is valid — remove error if it was there before
            rsvpInputs[i].classList.remove("error");
        }
    }

    // Stretch: Validate that the email contains an @ symbol
    let email = document.getElementById("rsvp-email");
    if (!email.value.includes("@")) {
        containsErrors = true;
        email.classList.add("error");
    } else {
        email.classList.remove("error");
    }

    // If no errors, call addParticipant() and clear fields
    if (containsErrors == false) {
        addParticipant();
        for (let i = 0; i < rsvpInputs.length; i++) {
            rsvpInputs[i].value = "";
        }
    }
}

// Step 3: Register the form button's event listener to call validateForm
rsvpButton.addEventListener('click', validateForm);


/*** Animations
  TODO:
  - [ ] Project 8 (REQUIRED FEATURE)
***/

/*** Success Modal
  TODO:
  - [ ] Project 9 (REQUIRED FEATURE)
***/