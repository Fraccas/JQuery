window.addEventListener('DOMContentLoaded', (event) => {
    // step 1
    let but = document.createElement('button');
    let bT = document.createTextNode('Step 1');
    but.append(bT);
    document.body.prepend(but);

    but.addEventListener('click', function (){
        alert("You are the best person ever.");
    });

    // step 2
    let but2 = document.getElementById("aButton");
    let ti = document.getElementById("aTextI");

    but2.addEventListener('click', function() {
        alert(ti.value);
    });

    // step 3
    let hoverDiv = document.getElementById("hoverDiv");
    hoverDiv.addEventListener('mouseover', function() {
        hoverDiv.style.backgroundColor = "aqua";
    });
    hoverDiv.addEventListener('mouseleave', function () {
        hoverDiv.style.backgroundColor = "white";
    });

    // step 4
    let newP = document.createElement('p');
    let pText = document.createTextNode('Step 4: This text will change color when clicked!');
    newP.append(pText);
    document.body.append(newP);

    newP.addEventListener('click', function() {
        let colorArray = ['blue', 'green', 'red', 'aqua', 'purple'];
        let ranN = Math.floor(Math.random() * colorArray.length);
        newP.style.color = colorArray[ranN];
    });


    // step 5
    let bButton = document.createElement('button');
    let bBT = document.createTextNode('Step 5');
    bButton.append(bBT);
    document.body.append(bButton);
    let bDiv = document.createElement('div');
    document.body.append(bDiv);

    bButton.addEventListener('click', function (){
        let bSpan = document.createElement('span');
        let bT = document.createTextNode('James Dalton Ward');
        bSpan.append(bT);
        bDiv.append(bSpan);
    });


    // step 6
    let friendsA = ['Brad', 'Bekah', 'Dave', 'AV', 'Chris', 'Paxton', 'James', 'Lucas', 'Mara', 'Caylee'];
    let cButton = document.getElementById('cButton');
    let cUL = document.getElementById('cUL');

    cButton.addEventListener('click', function() {
        for (let f of friendsA) {
            let listItem = document.createElement('li');
            let fText = document.createTextNode(f);
            listItem.append(fText);
            cUL.append(listItem);
        }
    });
});