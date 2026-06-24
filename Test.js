/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
    <button onclick="showText()">Click Me</button>
    <p id="message"></p>
`;

function showText() {
    document.getElementById("message").textContent =
        "Hello! You clicked the button.";
}

test('shows new text when button is clicked', () => {
    // Arrange
    const button = document.querySelector('button');
    const message = document.getElementById('message');

    expect(message.textContent).toBe('');

    // Act
    button.click();

    // Assert
    expect(message.textContent).toBe(
        'Hello! You clicked the button.'
    );
});