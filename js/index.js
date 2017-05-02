/**
 * Created by canidmars on 5/1/17.
 */

    $(document).ready(function(){
    "use strict";

            // Variables

        var game = {
            possibleSeq : ['blue', 'red', 'yellow', 'green'],
            currentSeq : [],
            level: 0
        };
        var i;
        var userSeq = [];

        // var selected = '#' + game.currentSeq;


            // Functions

        function newSeq(){
            game.currentSeq.push(game.possibleSeq[(Math.floor(Math.random()*4))]);
            console.log(game.currentSeq);
        }

        function newGame() {
            game.currentSeq = [];
            game.level = 0;
        }

        function animateSeq(selector){
            //console.log(game.currentSeq);
            $('#' + game.currentSeq).animate({
                opacity: 0.5
            }, 500).animate({
                opacity: 1
            }, 500)
        }



        function playGame() {

        }


            $('.colors').click(function () {
                //console.log("success");
                if ($(this).attr('id') === game.currentSeq[userSeq++]) {
                    if (userSeq === game.currentSeq.length) {
                        console.log("success");
                        $('#newRound').show();
                    }
                }
            });



            // Events

            $('#start').click(function () {
                newGame();
                newSeq();
                animateSeq();
            });

            $('#blue').click(function () {
                animateSeq('#blue');
            });

            $('#yellow').click(function () {
                animateSeq('#yellow');
            });

            $('#green').click(function () {
                animateSeq('#green');
            });

            $('#red').click(function () {
                animateSeq('#red');
            });

            $('#newRound').click(function () {
                $('#newRound').hide();
                newSeq();
                animateSeq();
            });


    });


