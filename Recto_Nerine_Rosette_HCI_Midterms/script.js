
// Accessibility enhancement functions

// Screen Reader simulation logic
function toggleScreenReader() {
    const demoArea = document.getElementById('demo-area');
    demoArea.innerText = demoArea.innerText ? '' : 'Screen Reader Simulation Active';
}

// Color blindness simulation logic
function toggleColorBlindness() {
    const body = document.body;
    body.classList.toggle('color-blind-mode');
}

// Keyboard navigation test mode
function toggleKeyboardNav() {
    const body = document.body;
    body.classList.toggle('keyboard-nav-mode');
}

// Reset all accessibility settings
function resetAccessibility() {
    // Reset text size to default
    document.getElementById('font-size').value = 16;
    adjustFontSize(16);

    // Reset contrast to default
    document.getElementById('contrast').value = 1;
    adjustContrast(1);

    // Reset speech rate to default
    document.getElementById('speech-rate').value = 1;
    adjustSpeechRate(1);

    // Reset volume to default
    document.getElementById('volume').value = 0.5;
    console.log('Volume reset to 0.5'); // Replace this with actual volume reset if applicable

    // Clear demo area text and reset classes
    document.getElementById('demo-area').innerText = '';
    document.body.classList.remove('color-blind-mode', 'keyboard-nav-mode', 'audio-enabled');
}

// Audio feedback system: Toggle sound on/off
function toggleSound() {
    const audioStatus = document.body.classList.toggle('audio-enabled');
    console.log(`Sound ${audioStatus ? 'enabled' : 'disabled'}`);
}

// Adjust styles based on user inputs
    function adjustFontSize(size) {
    document.documentElement.style.fontSize = `${size}px`;
}

function adjustContrast(contrast) {
    document.documentElement.style.filter = `contrast(${contrast})`;
}

function adjustSpeechRate(rate) {
    // Placeholder for speech rate adjustment (for screen reader)
    console.log(`Speech rate set to ${rate}`);
}

// Event listeners for range inputs
document.getElementById('font-size').addEventListener('input', (e) => adjustFontSize(e.target.value));
document.getElementById('contrast').addEventListener('input', (e) => adjustContrast(e.target.value));
document.getElementById('speech-rate').addEventListener('input', (e) => adjustSpeechRate(e.target.value));
document.getElementById('volume').addEventListener('input', (e) => {
// Adjust volume level
console.log(`Volume set to ${e.target.value}`);
});

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', () => {
    // Set default values for input ranges if necessary
    adjustFontSize(document.getElementById('font-size').value);
    adjustContrast(document.getElementById('contrast').value);
    adjustSpeechRate(document.getElementById('speech-rate').value);
});
