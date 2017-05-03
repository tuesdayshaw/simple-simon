/**
 * Created by canidmars on 5/1/17.
 */

$(document).ready(function () {
    "use strict";

    // Variables

    var game = {
        possibleSeq: ['blue', 'red', 'yellow', 'green'],
        currentSeq: [],
        level: 0
    };
    var i;
    var userSeq = 0;
    var count = 0;

        // Functions

    function newSeq() {
        game.currentSeq.push(game.possibleSeq[(Math.floor(Math.random() * 4))]);
        console.log(game.currentSeq);
        animateSeq();
    }

    function newGame() {
        game.currentSeq = [];
        game.level = 0;
    }

    function animateSeq() {
        count++;
        $('#' + game.currentSeq[count - 1]).animate({
            opacity: 0.5
        }, 500).animate({
            opacity: 1
        }, 500, function () {
            if (count < game.currentSeq.length){
                animateSeq();
            } else {
                count = 0;
            }
        })

    }

    //console.log("success");

    // Events

    $('.colors').click(function () {
        if ($(this).attr('id') === game.currentSeq[userSeq]) {
            userSeq++;
            if (userSeq === game.currentSeq.length) {
                //$('#newRound').show();
                userSeq = 0;
                game.level++;
                newSeq();
                $('#btn').text("Level: " + (game.level + 1));
            }
        } else {
            console.log('game over');
            $('#btn').text("Game Over! Start Again!");
        }
    });

    $('#start').click(function () {
        newGame();
        newSeq();
        $('#btn').text("Level: " + (game.level + 1))
    });

    $('#newRound').click(function () {
        //$('#newRound').hide();
        // game.level++;
        // newSeq();
    });

});


