function changeButtonText() {
    var buttonElement = document.getElementById('no');
    
    // Array of 20 different options
    var options = [
        "pretty please :'(",
        'did i do something?',
        'im so sad :/',
        'naurrrr',
        'pls uwu',
        'nooooo...',
        'can i change ur mind?',
        'i think u meant to click on yes.. right? yeah i think so',
        'dont click on me',
        'staphh',
        'im begging u',
        'poop',
        'no is for losers',
        'can i bribe u',
        ':('
    ];

    // Get a random index from the options array
    var randomIndex = Math.floor(Math.random() * options.length);

    // Update the button text with the randomly chosen option
    buttonElement.innerText = options[randomIndex];
}

function changeButtonTextYes() {
    var buttonElement = document.getElementById('yes');
    
    // Array of 20 different options
    var options = [
        "YIPPEEEEEEEE",
    ];

    // Get a random index from the options array
    var randomIndex = Math.floor(Math.random() * options.length);

    // Update the button text with the randomly chosen option
    buttonElement.innerText = options[randomIndex];
}

function rickroll() {
    // Hide the "Yes" button
    document.getElementById('no').style.display = 'none';
    var buttonElement = document.getElementById('yes');
    // Show the video player
    window.open("https://youtu.be/xvFZjo5PgG0");

    
    
    // Array of 20 different options
    var options = [
        "YIPPEEEEEEEE",
    ];

    var randomIndex = Math.floor(Math.random() * options.length);

    // Update the button text with the randomly chosen option
    buttonElement.innerText = options[randomIndex];

}