// Sample data for the leaderboard
let leaderboardData = [
    { name: "Player1", score: 150 },
    { name: "Player2", score: 120 },
    { name: "Player3", score: 180 },
    { name: "Player4", score: 90 },
    { name: "Player5", score: 200 },
    { name: "Player6", score: 20 },
    { name: "Player7", score: 80 }
];

// Function to sort the leaderboard by score in descending order
function sortLeaderboard() {
    leaderboardData.sort((a, b) => b.score - a.score);
}

// Function to update the leaderboard display
function updateLeaderboard(data) {
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = ''; // Clear the current list

    data.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${entry.name} - ${entry.score}`;
        leaderboardList.appendChild(listItem);
    });
}

// Function to add a new score to the leaderboard
function addScore(name, score) {
    leaderboardData.push({ name, score });
    sortLeaderboard();
    updateLeaderboard(leaderboardData);
}

// Function to filter leaderboard data based on search term
function filterLeaderboard(searchTerm) {
    const filteredData = leaderboardData.filter(entry => 
        entry.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    updateLeaderboard(filteredData);
}

// Initial sort and display of the leaderboard
sortLeaderboard();
updateLeaderboard(leaderboardData);

// Example of adding a new score
// addScore("Player6", 250);

// Add event listener for the search input
document.getElementById('search-input').addEventListener('input', function(event) {
    const searchTerm = event.target.value;
    filterLeaderboard(searchTerm);
});