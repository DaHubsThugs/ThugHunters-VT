// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Create and style a button dynamically
    const messageButton = document.createElement("button");
    messageButton.textContent = "Get a Fabulous Message";
    document.body.appendChild(messageButton);

    // Add an event listener to the button
    messageButton.addEventListener("click", () => {
        const messages = [
            "You are fabulous! 🌈",
            "Love yourself, and the world will follow! 💖",
            "Rainbows make everything better! 🌟",
            "Proud to be you! 🏳️‍🌈",
            "Shine bright like a diamond! 💎"
        ];

        // Display a random message
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        alert(randomMessage);
    });
});
