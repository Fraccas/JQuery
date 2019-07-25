$(document).ready(function () {

    // globals
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let $senDiv = $('#sentence');
    let $targetLetter = $('#target-letter');
    let $feedback = $('#feedback');
    let $newGameB = $('#newGameB');

    // setup first run of game
    $senDiv.text("Click New Game to get Started!"); // add first sentence
    $targetLetter.text("");

    // count total number of words in game (54 default)
    let totalWords = 0;
    for (let s of sentences) {
        totalWords += WordCount(s);
    }

    // pushes yellow block to the right
    let $yBlock = $('#yellow-block');
    $yBlock.css('margin-left', '110px');
    let startingMargin = 110, mBuffer = 20;

    // game vars
    let gameover = true;
    let letterCount = 0,
        sentenceCount = 0,
        mistakeCount = 0;
    let startTime = new Date(),
    endTime = 0;

    // new game button 
    $newGameB.click(function() {
        gameover = false;
        newGame();
    });

    // enable/disable keyboard upper/lower based on shift key pres
    $keyboardUpper = $('#keyboard-upper-container');
    $keyboardLower = $('#keyboard-lower-container');

    $keyboardUpper.hide();
    // shift key press
    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            $keyboardUpper.show();
            $keyboardLower.hide();
        }
    });
    $(document).keyup(function (e) {
        if (e.keyCode == 16) {
            $keyboardUpper.hide();
            $keyboardLower.show();
        }
    });

    // get input from key buttons
    $(document).keypress(function (e) {
        if (!gameover) {
            let $key = $('#' + e.keyCode);

            // visuals (highlighting)
            $key.css('background-color', 'yellow');
            setTimeout(function () { // delay the unhighlight
                $key.css('background-color', 'rgb(245, 245, 245)');
            }, 200);

            // game logic
            if (String.fromCharCode(e.keyCode) == sentences[sentenceCount].charAt(letterCount)) {
                $feedback.append('<span class="glyphicon glyphicon-ok"></span>');
            } else {
                mistakeCount++;
                $feedback.append('<span class="glyphicon glyphicon-remove"></span>');
            }

            // add letter pressed and shift yellow block
            let newM = startingMargin + mBuffer;
            mBuffer += 18;
            $yBlock.css('margin-left', newM + 'px');
            letterCount++;

            // set new sentence when completing last
            if (letterCount >= sentences[sentenceCount].length) {
                sentenceCount++;
                $senDiv.text(sentences[sentenceCount]); // add first sentence

                resetSentence();
            }
        }

        // GAME OVER if end of all sentences
        if (sentenceCount >= sentences.length) {
            gameover = true;
            $newGameB.show();
            resetSentence();
            sentenceCount = 0;

            endTime = new Date();
            let mins = ((endTime - startTime) / 1000) / 60;
            let score = totalWords / mins - 2 * mistakeCount;
            $senDiv.text("Game Over! You had " + score + " wpm!!");
            $targetLetter.text("");
        }

        // update target letter on screen
        if (!gameover)
        $targetLetter.text(sentences[sentenceCount].charAt(letterCount));
    });

    function resetSentence() {
        letterCount = 0;
        mBuffer = 0;
        $yBlock.css('margin-left', '110px');
        $feedback.text("");
        $targetLetter.text("");
    }

    function newGame() {
        resetSentence();
        startTime = new Date();
        sentenceCount = 0;
        mistakeCount = 0;
        $senDiv.text(sentences[0]); // add first sentence
        $targetLetter.text(sentences[0].charAt(0));
        gameOver = false;
        $newGameB.hide();
    }

    function WordCount(str) { 
        return str.split(" ").length;
    }

});