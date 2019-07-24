$(document).ready(function () {

    let $tField = $('#text');
    let $bSubmit = $('#btnSubmit');
    $('form').append($('<div class="vDiv"></div>'));
    $('.vDiv').append($('<ul class="vUL"></ul>'));
    let $vUL = $('.vUL');

    // detects change in input field to enable/disable button
    $tField.change(function() {
        if ($tField.val() == "") {
            $bSubmit.attr("disabled", true);
        } else {
            $bSubmit.attr("disabled", false);
        }
    });

    // if button is clicked add input to list
    $bSubmit.click(function() {
        event.preventDefault(); // prevents form from wiping data
        let $vDiv = $('.vDiv');
        let $t = $tField.val();
        $vUL.append('<li>' + $t + '</li>');

        let $lis = $('div li'); // get all li's within div
        // if li is clicked change color
        $lis.click(function() {
            let ran1 = Math.floor(Math.random() * 255);
                let ran2 = Math.floor(Math.random() * 255);
                let ran3 = Math.floor(Math.random() * 255);
                $(this).css("background-color", "rgb(" + ran1 + "," + ran2 + "," + ran3 + ")");
        });

        // if li is double clicked remove li
        $lis.dblclick(function() {
           $(this).remove();
        });
    });
});



