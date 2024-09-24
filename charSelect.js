document.addEventListener('DOMContentLoaded', () => {
    const characters = document.querySelectorAll('.character');
    const selectedCharacterDisplay = document.getElementById('selected-character');

    characters.forEach(character => {
        character.addEventListener('click', () => {
            // Remove selected class from all characters
            characters.forEach(char => char.classList.remove('selected'));

            // Add selected class to the clicked character
            character.classList.add('selected');

            // Display the selected character's name
            const characterName = character.getAttribute('data-character');
            selectedCharacterDisplay.textContent = `Selected: ${characterName}`;
        });
    });
});