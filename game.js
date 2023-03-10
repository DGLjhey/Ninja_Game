// Initialize variables 
var game = {
    goldCount: 0,
    attemptCount: 20
  };

// to display text with the corresponding color
    function displayMessage(message, color) {
        console.log($('#message-container'));
            $('#message-container').text(message);
            $('#message-container').css('color', color);
}

// Function for generating random gold value
    function generateGold(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }

// count of attempts
    function updateAttemptCount() {
    game.attemptCount--;
    $('#attempt-count').text(game.attemptCount);
    }
// count of gold
    function updateGoldCount(value) {
        game.goldCount += value ;
        $('#gold-count').text(game.goldCount);

// Check if gold count reaches 250 within 20 tries
            if (game.goldCount >= 250 && game.attemptCount === 0) {
            displayMessage('Ninja won the game!', 'green');
            } else if (game.attemptCount === 0 && game.goldCount < 250) {
            displayMessage('Ninja lost the game!', 'red');
            }
    }

// adding an entry to the log
    function addToLog(date, time, location, gold) {
        // let logEntry = `<p>${location}<br>${date}<br>${time}<br>${gold} gold</p>`;
        let logEntry = `<p>Date:   ${date}<br>Number of Golds:   ${gold}<br>Location:   ${location} <br>Timestamp: ${time}<br>------------------------------------</p>`;
        $('#log-container').prepend(logEntry);
    }

// resetting the game
    function resetGame() {
        game.attemptCount = 20;
        game.goldCount = 0;
        $('#attempt-count').text(game.attemptCount);
        $('#gold-count').text(game.goldCount);
        $('#log-container').empty();
        $('#message-container').empty();
    }

// funtion for every location
// Bind functions to buttons
    $('#house-btn').click(function() {
        if (game.attemptCount > 0) {
            let gold = Math.random() < 0.8 ? 10 : 0;
            updateAttemptCount();
            updateGoldCount(gold);
            addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'House', gold);
            displayMessage(`Ninja earned ${gold} gold from the House.`, 'green');
                } else {
                    displayMessage('Ninja have no more attempts left.', 'red');
                    if (game.goldCount >= 250 && game.attemptCount === 0) {
                        displayMessage('Ninja won the game!', 'green');
                    } else if (game.attemptCount === 0 && game.goldCount < 250) {
                        displayMessage('Ninja lost the game!', 'red');
                    }
            }
    });

// cave function
    $('#cave-btn').click(function() {
        if (game.attemptCount > 0) {
            let gold = 5;
            updateAttemptCount();
            updateGoldCount(gold);
            addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'Cave', gold);
            displayMessage(`Ninja earned ${gold} gold from the Cave.`, 'green');
                } else {
                    displayMessage(`Ninja have no more attempts left.`, 'red');
                    if (game.goldCount >= 250 && game.attemptCount === 0) {
                        displayMessage('Ninja won the game!', 'green');
                    } else if (game.attemptCount === 0 && game.goldCount < 250) {
                        displayMessage('Ninja lost the game!', 'red');
                    }
        }
    });


// goldmine function
    $('#goldmine-btn').click(function() {
        if (game.attemptCount > 0) {
            let gold = Math.random() < 0.8 ? generateGold(1, 25) : 0;
            updateAttemptCount();
            updateGoldCount(gold);
            addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'Goldmine', gold);
            displayMessage(`Ninja earned ${gold} gold from the Goldmine.`, 'green');
                } else {
                    displayMessage(`Ninja have no more attempts left.`, 'red');
                    if (game.goldCount >= 250 && game.attemptCount === 0) {
                        displayMessage('Ninja won the game!', 'green');
                    } else if (game.attemptCount === 0 && game.goldCount < 250) {
                        displayMessage('Ninja lost the game!', 'red');
                }
        }
    });

// casino function
    $('#casino-btn').click(function() {
        if (game.attemptCount > 0) {
            let gold = Math.random() < 0.5 ? generateGold(-50, -40) : generateGold(40, 50);
            updateAttemptCount();
            updateGoldCount(gold);
            if (gold < 0) {
                addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'Casino', gold);
                displayMessage(`Ninja lost ${Math.abs(gold)} gold at the Casino.`, 'red');
            } else {
                addToLog(new Date().toLocaleDateString(), new Date().toLocaleTimeString(), 'Casino', gold);
                displayMessage(`Ninja earned ${gold} gold from the Casino.`, 'green');
            }
                } else {
                    displayMessage(`Ninja have no more attempts left.`, 'red');
                if (game.goldCount >= 250 && game.attemptCount === 0) {
                    displayMessage('Ninja won the game!', 'green');
                } else if (game.attemptCount === 0 && game.goldCount < 250) {
                    displayMessage('Ninja lost the game!', 'red');
                }
        }
    });

// reset function
    $('#reset-btn').click(function() {
        resetGame();
});

//animation
$("#cave-btn").click(function(){
    $("#ninja").animate({marginLeft: "-500px", marginTop: "-100px"}, 500, function(){
      // Reset the position of the image after the animation is complete
    $(this).css({marginLeft: 0, marginTop: 0});
    });
});

$("#goldmine-btn").click(function(){
    $("#ninja").animate({marginRight: "500px", marginTop: "100px"}, 500, function(){
      // Reset the position of the image after the animation is complete
    $(this).css({marginRight: 0, marginTop: 0});
    });
}); 

$("#house-btn").click(function(){
    $("#ninja").animate({marginLeft: "500px", marginTop: "-100px"}, 500, function(){
      // Reset the position of the image after the animation is complete
    $(this).css({marginLeft: 0, marginTop: 0});
    });
});  

$("#casino-btn").click(function(){
    $("#ninja").animate({marginLeft: "500px", marginTop: "100px"}, 500, function(){
      // Reset the position of the image after the animation is complete
    $(this).css({marginLeft: 0, marginTop: 0});
    });
});  

