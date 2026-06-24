/**
 * @jest-environment jsdom
 */
// 1. Set up the HTML mock environment
document.body.innerHTML = `
    <button onclick="showText()">Click Me</button>
    <p id="message"></p>
`;

// 2. Define the function and attach to windows
function showText() {
    document.getElementById("message").textContent =
        "Hello! You Clicked the Button."; 
}

window.showText = showText;

// 3. Run the test suite
test('shows new text when button is clicked', () => {
    // Arrange
    const button = document.querySelector('button');
    const message = document.getElementById('message');

    expect(message.textContent).toBe('');

    // Act
    button.click();

    // Assert
    expect(message.textContent).toBe(
        'Hello! You Clicked the Button.'
    );
});
