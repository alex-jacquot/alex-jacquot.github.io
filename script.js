const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.addEventListener("DOMContentLoaded", () => {
    const h1Element = document.querySelector("h1");
    const initialText = h1Element.dataset.value;
    let iteration = 0;
    let interval = null;

    // Generate a random initial text
    const randomInitialText = Array.from({ length: initialText.length }, () =>
        letters[Math.floor(Math.random() * 26)]
    ).join("");

    h1Element.innerText = randomInitialText;

    // Delay the start of the hacker effect by 1 second (1000 milliseconds)
    setTimeout(() => {
        interval = setInterval(() => {
            h1Element.innerText = h1Element.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return initialText[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= initialText.length) {
                clearInterval(interval); // Stop the interval when the effect is complete
            }

            iteration += 1 / 3;

            if (iteration >= initialText.length * 3) {
                clearInterval(interval); // Ensure the interval stops even if it runs longer than expected
            }
        }, 30);
    }, 1000); // Wait for 1 second before starting the effect
});

/** LOADING SCREEN */
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Add a setTimeout to remove the loading screen entirely after a specified time (e.g., 2 seconds)
    setTimeout(() => {
        loadingScreen.remove(); // Remove the entire loading screen
    }, 2000); // Wait for 2 seconds before removing the loading screen
});


/* Add your other interactive functionality here */
