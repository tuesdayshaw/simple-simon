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
    var userSeq = [];


    // Functions

    function newSeq() {
        game.currentSeq.push(game.possibleSeq[(Math.floor(Math.random() * 4))]);
        animateSeq();
    }

    function newGame() {
        game.currentSeq = [];
        game.level = 0;
    }

    function animateSeq(selector) {
        $('#' + game.currentSeq).animate({
            opacity: 0.5
        }, 500).animate({
            opacity: 1
        }, 500)
    }


    //console.log("success");

    // Events

    $('.colors').click(function () {
        if ($(this).attr('id') === game.currentSeq[userSeq++]) {
            if (userSeq === game.currentSeq.length) {
                $('#newRound').show();
            }
        }
    });

    $('#start').click(function () {
        newGame();
        newSeq();
    });

    $('#newRound').click(function () {
        $('#newRound').hide();
        game.level++;
        newSeq();
    });


});


