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
  - [x] Project 9 (REQUIRED FEATURE) — refactored to accept person object
***/

const rsvpButton = document.getElementById('rsvp-button');
let count = 3;

// Step 1-B: addParticipant now accepts a person object instead of reading DOM inputs directly
const addParticipant = (person) => {
    let newParticipant = document.createElement('p');
    newParticipant.textContent = `🪨 ${person.name} from ${person.city} has RSVP'd.`;
    newParticipant.classList.add('new-participant');  // triggers green highlight animation

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
  - [x] Project 9 (REQUIRED FEATURE) — build person object, pass to addParticipant and toggleModal
***/

// Step 1: We don't need to select the form button again — we already did in Form Handling

// Step 2: Write the callback function
const validateForm = () => {
    let containsErrors = false;
    var rsvpInputs = document.getElementById("rsvp-form").elements;

    // Step 1-A: Build a person object from form inputs
    let person = {
        name: rsvpInputs[0].value,
        city: rsvpInputs[1].value,
        email: rsvpInputs[2].value
    };

    // Loop through all inputs and validate the value of each input
    for (let i = 0; i < rsvpInputs.length; i++) {
        if (rsvpInputs[i].value.length < 2) {
            containsErrors = true;
            rsvpInputs[i].classList.add("error");
        } else {
            rsvpInputs[i].classList.remove("error");
        }
    }

    // Stretch: Validate that the email contains an @ symbol
    let email = document.getElementById("rsvp-email");
    if (!person.email.includes("@")) {
        containsErrors = true;
        email.classList.add("error");
    } else {
        email.classList.remove("error");
    }

    // If no errors, add participant, show modal, and clear fields
    if (containsErrors == false) {
        addParticipant(person);
        toggleModal(person);
        for (let i = 0; i < rsvpInputs.length; i++) {
            rsvpInputs[i].value = "";
        }
    }
}

// Step 3: Register the form button's event listener to call validateForm
rsvpButton.addEventListener('click', validateForm);


/*** Success Modal ***
  Purpose:
  - Pop-up overlay shown after a valid RSVP submission
  - Displays a personalized thank-you message using the person object
  - Animates the logo image (waving rotation effect)
  - Auto-dismisses after 5 seconds
  Done:
  - [x] Project 9 (REQUIRED FEATURE)
  - [x] Project 9 (STRETCH FEATURE) — Close button + Reduce Motion toggle
***/

// Animation state variables
let rotateFactor = 0;
let motionEnabled = true;
const modalImage = document.getElementById('modal-image');

// animateImage: toggles rotateFactor between 0 and -10 degrees to create a waving effect
const animateImage = () => {
    rotateFactor = rotateFactor === 0 ? -10 : 0;
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};

// toggleModal: shows the modal with a personalized message, starts animation, auto-hides after 5s
const toggleModal = (person) => {
    const modal = document.getElementById('success-modal');
    const modalText = document.getElementById('modal-text');

    // Show modal and set personalized message
    modal.style.display = 'flex';
    document.getElementById('modal-title').textContent = `🧗 RSVP Confirmed!`;
    modalText.textContent = `Thanks for RSVPing, ${person.name}! We can't wait to see you on the wall.`;

    // Start animation only if motion is enabled
    let intervalId = null;
    if (motionEnabled) {
        intervalId = setInterval(animateImage, 500);
    }

    // Auto-hide after 8 seconds and clean up animation
    setTimeout(() => {
        modal.style.display = 'none';
        rotateFactor = 0;
        modalImage.style.transform = 'rotate(0deg)';
        if (intervalId) clearInterval(intervalId);
    }, 8000);
};

// Stretch: Close button dismisses modal before timeout
const closeModalButton = document.getElementById('close-modal-button');
closeModalButton.addEventListener('click', () => {
    const modal = document.getElementById('success-modal');
    modal.style.display = 'none';
    rotateFactor = 0;
    modalImage.style.transform = 'rotate(0deg)';
});

// Stretch: Reduce Motion toggle
const reduceMotionButton = document.getElementById('reduce-motion-button');
const reduceMotion = () => {
    motionEnabled = !motionEnabled;
    reduceMotionButton.textContent = motionEnabled ? 'Reduce Motion OFF' : 'Reduce Motion ON';
};
reduceMotionButton.addEventListener('click', reduceMotion);


/*** Scroll Fade-in ***
  Purpose:
  - Fade in sections as they scroll into view using IntersectionObserver
  Done:
  - [x] Project 9 (Going Further)
***/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);  // only animate once
        }
    });
}, { threshold: 0.15 });

// Small delay so elements near the top also animate on first load
setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}, 100);