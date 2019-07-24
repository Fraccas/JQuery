$(document).ready(function () {

    // step 1
    let $but = $('<button>Step 1</button>');
    $('body').prepend($but);

    $but.click(function() {
        alert("You are the best person ever.");
    });

    // step 2
    let $but2 = $("#aButton");
    let $ti = $("#aTextI");

    $but2.click(function () {
        alert($ti.val());
    });

    // step 3
    let $hoverDiv = $("#hoverDiv");
    $hoverDiv.hover(function () {
        $hoverDiv.css('background-color', 'aqua');
    }, function () {
        $hoverDiv.css('background-color', 'white');
    });

    // step 4
    let $newP = $('<p>Step 4: This text will change color when clicked!</p>');
    $('body').append($newP);
    $newP.click(function () {
        let colorArray = ['blue', 'green', 'red', 'aqua', 'purple'];
        let ranN = Math.floor(Math.random() * colorArray.length);
        $newP.css('color', colorArray[ranN]);
    });


    // step 5
    let $bButton = $('<button>Step 5</button>');
    $('body').append($bButton);
    let $bDiv = $('<div></div>');
    $('body').append($bDiv);

    $bButton.click(function () {
        let $bSpan = $('<span>James Dalton Ward</span>');;
        $bDiv.append($bSpan);
    });


    // step 6
    let friendsA = ['Brad', 'Bekah', 'Dave', 'AV', 'Chris', 'Paxton', 'James', 'Lucas', 'Mara', 'Caylee'];
    let $cButton = $('#cButton');
    let $cUL =$('#cUL');

    $cButton.click(function () {
        for (let f of friendsA) {
            let $listItem = $('<li>' + f + '</li>');
            $cUL.append($listItem);
        }
    });
});