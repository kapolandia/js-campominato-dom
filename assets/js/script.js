let mainContainer = document.getElementById("main-cont")

function playGame(){
    let difChoice = document.getElementById("diff-choice").value;
    mainContainer.innerHTML = "";
    if(difChoice == "facile"){
        for(let i = 1; i < 101; i++){
            let box = `<div class="box box-10">${i}</div>`
            mainContainer.innerHTML += box;
        }
    } else if(difChoice == "intermedio"){
        for(let i = 1; i < 82; i++){
            let box = `<div class="box box-9">${i}</div>`
            mainContainer.innerHTML += box;
        }
    } else if(difChoice == "difficile"){
        for(let i = 1; i < 50; i++){
            let box = `<div class="box box-7">${i}</div>`
            mainContainer.innerHTML += box;
        }
    }

    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
    box.addEventListener('click', function() {

        this.classList.add('color');
    });
    });
}