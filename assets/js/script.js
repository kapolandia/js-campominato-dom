let mainContainer = document.getElementById("main-cont")


function playGame(){
    mainContainer.innerHTML = "";
    let bombs;
    let difChoice = document.getElementById("diff-choice").value;
    if(difChoice == "facile"){
        for(let i = 1; i < 101; i++){
            let box = `<div class="box box-10">${i}</div>`
            mainContainer.innerHTML += box;
        }
        bombs = generateBombs(100);
        console.log(bombs);
    } else if(difChoice == "intermedio"){
        for(let i = 1; i < 82; i++){
            let box = `<div class="box box-9">${i}</div>`
            mainContainer.innerHTML += box;
        }
        bombs = generateBombs(81);
    } else if(difChoice == "difficile"){
        for(let i = 1; i < 50; i++){
            let box = `<div class="box box-7">${i}</div>`
            mainContainer.innerHTML += box;
        }
        bombs = generateBombs(49);
    }

    const boxes = document.querySelectorAll('.box');
    let openedBoxes = 0;
    boxes.forEach(box => {
    box.addEventListener('click', function() {
        let boxClicked = parseInt(this.innerHTML);
        console.log(boxClicked);

        if(bombs.includes(boxClicked)){
            this.innerHTML = "💣";
            this.classList.add('red');
            endGame();
        } else{
            this.classList.add('color');
            openedBoxes++;
            checkWin(openedBoxes, difChoice);
        }
    });
    });
}

function generateBombs(diff){
    const bombs = [];
    while(bombs.length < 16){
        let bombNumber = Math.floor(Math.random() * diff) + 1;
        if(!bombs.includes(bombNumber)){
            bombs.push(bombNumber);
        }
    }
    return(bombs);
}

function endGame(){
    setTimeout(function(){
        alert("Hai perso");
        playGame();
    },100);
}

function checkWin(openedBoxes, difChoice){
    console.log(openedBoxes);

    if(difChoice  === 'facile' && openedBoxes === (84)){
        alert("Hai vinto!")
        playGame();
    } else if(difChoice  === 'intermedio' && openedBoxes === (75)){
        alert("Hai vinto!")
        playGame();
    } else if(difChoice  === 'difficile' && openedBoxes === (34)){
        alert("Hai vinto!")
        playGame();
    }
}