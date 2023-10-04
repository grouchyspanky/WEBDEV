document.addEventListener("DOMContentLoaded", function () {
    // Cube calculator form
    const cubeForm = document.getElementById("cubeForm");
    const cubeResultElement = document.getElementById("cubeResult");

    cubeForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting and refreshing the page

        const valueInput = cubeForm.querySelector("input[name='value']");
        const inputValue = parseFloat(valueInput.value);

        if (!isNaN(inputValue)) {
            const cube = inputValue ** 3;
            cubeResultElement.textContent = `The cube of ${inputValue} is: ${cube}`;
        } else {
            cubeResultElement.textContent = "Please enter a valid number.";
        }
    });

    // Character counting form
    const characterCountForm = document.getElementById("characterCountForm");
    const characterCountResult = document.getElementById("characterCountResult");

    characterCountForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting and refreshing the page

        const sentenceInput = characterCountForm.querySelector("input[name='string']").value;
        const characterCount = sentenceInput.length;

        characterCountResult.textContent = `There are ${characterCount} characters in the input: ${sentenceInput}`;
    });
});
