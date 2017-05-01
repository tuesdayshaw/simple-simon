/**
 * Created by canidmars on 5/1/17.
 */

    $(document).ready(function(){
    "use strict";

            // Variables

        var colorGenerator = (Math.floor(Math.random()*4)+1);
        var patternToRepeat = '';


            // Functions

        function colorPattern() {
            colorGenerator = (Math.floor(Math.random()*4)+1);
            switch (colorGenerator) {
                case 1:
                    patternToRepeat += colorGenerator;
                    $('#winter').toggleClass('pattern');
                    break;
                case 2:
                    patternToRepeat += colorGenerator;
                    $('#spring').toggleClass('pattern');
                    break;
                case 3:
                    patternToRepeat += colorGenerator;
                    $('#summer').toggleClass('pattern');
                    break;
                case 4:
                    patternToRepeat += colorGenerator;
                    $('#autumn').toggleClass('pattern');
                    break;
            }
        }

        function levels() {
            for(var i = 0; i < 10; i++){
                colorPattern();
            }
        }

        $('#start').click(function () {
            // remove any past visible pattern
            $('*').removeClass('pattern');
            levels();
            //generate random color pattern
            //show pattern for random color, display for 2 sec, clear and wait for player to respond.
            //repeat color generator ++ for each "loop" or level

        });


            // Events

        $('#blue').click(function () {
            $('*').removeClass('pattern');
            $('#winter').toggleClass('pattern');
        });

        $('#yellow').click(function () {
            $('*').removeClass('pattern');
            $('#spring').toggleClass('pattern');
        });

        $('#green').click(function () {
            $('*').removeClass('pattern');
            $('#summer').toggleClass('pattern');
        });

        $('#red').click(function () {
            $('*').removeClass('pattern');
            $('#autumn').toggleClass('pattern');
        })

    });


