// Global constants
const fontFeatures = ['calt', 'case', 'ccmp', 'cv01', 'cv02', 'cv03', 'cv04', 'cv05', 'cv06', 'cv07', 'cv08', 'cv09', 'cv10', 'dnom', 'frac', 'liga', 'locl', 'numr', 'pnum', 'ss01', 'ss02', 'ss03', 'ss05', 'ss06', 'ss07', 'ss12', 'ss13', 'ss14', 'ss15', 'ss16', 'ss17', 'subs', 'sups', 'tnum', 'kern'];
const textTransformOptions = ['uppercase', 'lowercase', 'capitalize', 'none'];
const ids = ['heading', 'subtitle'];
const classes = ['version', 'letter'];
const cheekySubtitles = [
    "Changing the world one log at a time.",
    "Log it like it's hot: the change log edition.",
    "Logging the good, the bad, and the funky.",
    "Changelog: Where the magic happens!",
    "Log on, log strong, change even stronger.",
    "The chronicles of change: a log story.",
    "For a log-ical approach to change.",
    "Brace yourselves, changes are coming!",
    "Log your changes, change your logs.",
    "If you log it, they will change.",
    "Once upon a log, changes happened.",
    "Changing the logs, logging the changes.",
    "The log awakens: a change saga.",
    "Change is in the logs of the beholder.",
    "Logarithmic changes for the win!",
    "To log or not to log? Change is the answer.",
    "Embrace the log, embrace the change.",
    "A logful of changes makes the world go round.",
    "Logging: the ultimate change agent.",
    "Keeping it log-cally changing.",
    "Change logs: where the plot thickens!",
    "When life gives you logs, make changes.",
    "Log-eat-log: the chronicles of change.",
    "From logs to riches: the change log story."
];

// Function to generate a random number within a specific range
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to generate random font feature settings
function generateRandomStyle() {
    const randomFeature = fontFeatures[Math.floor(Math.random() * fontFeatures.length)];
    const randomTransform = textTransformOptions[Math.floor(Math.random() * textTransformOptions.length)];
    const randomOpsz = getRandomNumber(17, 28);
    const randomWght = Math.floor(getRandomNumber(1, 1000));
    const randomWdth = Math.floor(getRandomNumber(30, 150));

    return `font-feature-settings: '${randomFeature}' 1; text-transform: ${randomTransform}; font-variation-settings: 'opsz' ${randomOpsz}, 'wght' ${randomWght}, 'wdth' ${randomWdth}`;
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const context = this;
        const args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Function to update font
function updateFont(ids, classes) {
    ids.forEach(id => {
        const element = document.getElementById(id);
        const styleString = generateRandomStyle();
        element.setAttribute('style', styleString);
    });

    classes.forEach(className => {
        const elements = document.getElementsByClassName(className);
        Array.from(elements).forEach(element => {
            const styleString = generateRandomStyle();
            element.setAttribute('style', styleString);
        });
    });
}

// Function to update the subtitle text
function updateSubtitleText() {
    const subtitle = document.getElementById('subtitle');
    const randomSubtitle = cheekySubtitles[Math.floor(Math.random() * cheekySubtitles.length)];
    subtitle.textContent = randomSubtitle;
}

// Applying the throttled function to the scroll event
const throttledUpdateSubtitle = throttle(updateSubtitleText, 5000);

// Applying the throttled function to the scroll event
const throttledUpdateFont = throttle(() => updateFont(ids, classes), 500);

// Calling updateFont when the page has completely loaded
window.onload = function() {
    updateFont(ids, classes);
    updateSubtitleText()
};

// Adding the throttled function to the scroll event
window.addEventListener('scroll', throttledUpdateSubtitle);

// Adding the throttled function to the scroll event
window.addEventListener('scroll', throttledUpdateFont);
